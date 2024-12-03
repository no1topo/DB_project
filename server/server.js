const express = require('express');
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcrypt');
const multer = require('multer');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
let global;

// Hashing

// Login endpoint
app.post('/api/login', async (req, res) => {
    
    const { username, password } = req.body;
    try {
        // Fetch user from database
        const result = await pool.query('SELECT * FROM public."User" WHERE "Username" = $1', [username]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        const user = result.rows[0];
        bcrypt.compare(password, user.Password_hash,(err, result) =>{
            if (err) {
                res.status(500).json({ error: 'Internal server error' });
              } else if (result) {
                if (user.Role===1) {
                    global = username;
                    console.log(global,user.Role);
                    res.status(201).json({ message: 'Login successful' });
                } else if(user.Role===0){
                    global = username; 
                    console.log(global,user.Role);
                    res.status(200).json({ message: 'Login successful' });
                } else{
                    res.status(401).json({ error: 'Invalid username or password' });
                }
              } else {
                res.status(401).json({ error: 'Invalid username or password' });
              }
        });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// Registration endpoint
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    

    try {
        // Check if the username already exists
        const userCheck = await pool.query('SELECT * FROM public."User" WHERE "Username" = $1', [username]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        await pool.query(
            'INSERT INTO public."User" ("Username", "Password_hash") VALUES ($1, $2)',
            [username, hashedPassword]
            
        );

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

//ChangePassword

app.post('/api/change_pass', async (req, res) => {
    const {password,oldpassword}  = req.body;
    try {
    const response = await pool.query('SELECT * FROM public."User" WHERE "Username" = $1', [global]);
    const user = response.rows[0];
    const result = await bcrypt.compare(oldpassword, user.Password_hash);
    if (result) {
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update the database
        await pool.query(
            'UPDATE public."User" SET "Password_hash" = $2 WHERE "Username" = $1;',
            [global, hashedPassword]
        );

        res.status(201).json({ message: 'Password Changed' });
    } else {
        res.status(401).json({ error: 'Invalid username or password' });
    }
} catch (err) {
    // Catch and handle errors
    console.error(err); // For debugging purposes
    res.status(500).json({ error: 'Internal server error' });
}
    
});

//profile picture
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// API to upload profile image

app.post('/api/user/upload-profile-image', upload.single('image'), async (req, res) => {
    const { buffer } = req.file;
    const userId = global; // Replace with actual user ID from session/auth

    try {
        // Check if the user already has a profile image
        const existing = await pool.query('SELECT * FROM public."User" WHERE "Username" = $1', [userId]);

        if (existing.rows.length > 0) {
            // Update the existing image
            await pool.query('UPDATE public."User" SET "pic" = $1 WHERE "Username" = $2', [buffer, userId]);
        } else {
            // Insert a new image
            await pool.query('INSERT INTO public."User" ("Username", "pic") VALUES ($1, $2)', [userId, buffer]);
        }

        res.status(200).send('Image uploaded successfully.');
    } catch (error) {
        console.error('Error saving image to database:', error);
        res.status(500).send('Failed to upload image.');
    }
});

// API to fetch profile image
app.get('/api/user/profile-image', async (req, res) => {
    const userId = global; // Replace with actual user ID from session/auth

    try {
        const result = await pool.query('SELECT "pic" FROM public."User" WHERE "Username" = $1', [userId]);

        if (result.rows.length > 0) {
            const imageData = result.rows[0].pic;
            res.set('Content-Type', 'image/jpeg');
            res.send(imageData);
        } else {
            res.status(404).send('No profile image found.');
        }
    } catch (error) {
        console.error('Error fetching profile image:', error);
        res.status(500).send('Failed to fetch image.');
    }
});





//User_data
app.get('/api/user_data', async (req,res)=>{

    try {
        const result = await pool.query(
            'select * from public."Student" where "Std_id"=$1;',[global]
        );
        for (let row of result.rows) {
            if (row.Date_Of_Birth) {
                row.Date_Of_Birth = row.Date_Of_Birth.toISOString().split('T')[0];
            }
        }
        
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
})





//get_std_id

app.get('/api/id', async (req,res)=>{

    try {
        const result = await pool.query(
            'SELECT "Username" FROM public."User" WHERE "Username" = $1',[global]
        );

        
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});




// Routes


// Attendance.js
app.get('/api/data', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT "Lecture_Date"::DATE,"Status","Duration","Course_ID" FROM public."Attendance" WHERE "Std_id" = $1;',[global]
        );

        // Properly loop through result.rows and format the date
        for (let row of result.rows) {
            if (row.Lecture_Date) {
                row.Lecture_Date = row.Lecture_Date.toISOString().split('T')[0];
            }
        }

        res.json(result.rows);
        // console.log(json(result.rows));
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/data/couse', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT DISTINCT "Course_ID" FROM public."Attendance" WHERE "Std_id" = $1;',[global]
        );
        
        res.json(result.rows);
        // console.log(json(result.rows));
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});


// Marks.js

app.get('/api/Marks', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT "Std_id","Course_ID","Instructor_ID",public."Course_Marks"."Evaluation_ID",public."Question"."Question_ID","Question_No","Weightage","Obtained_Marks","Total_Marks" from public."Course_Marks" join public."Marks_evaluation" on public."Course_Marks"."Evaluation_ID"=public."Marks_evaluation"."Evaluation_ID" join public."Question" on public."Question"."Question_ID"=public."Marks_evaluation"."Question_ID" WHERE "Std_id" = $1;',[global]
            
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/Marks/avg', async (req, res) => {
    try {
        const result = await pool.query(
            `
            SELECT "Course_ID","Question_No" , ROUND(AVG("Obtained_Marks"),2)
            from public."Course_Marks" 
            join public."Marks_evaluation" on public."Course_Marks"."Evaluation_ID"=public."Marks_evaluation"."Evaluation_ID"  
            join public."Question" on public."Question"."Question_ID"=public."Marks_evaluation"."Question_ID" 
            where "Marks_evaluation"."Evaluation_ID"="Course_Marks"."Evaluation_ID" AND "Marks_evaluation"."Question_ID"="Question"."Question_ID" 
            group by "Course_ID","Question_No"
            order by "Question_No";
            
            `
            
        );
        
        res.json(result.rows);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/Marks/min', async (req, res) => {
    try {
        const result = await pool.query(
            `
            SELECT "Course_ID","Question_No" , min("Obtained_Marks")
            from public."Course_Marks" 
            join public."Marks_evaluation" on public."Course_Marks"."Evaluation_ID"=public."Marks_evaluation"."Evaluation_ID" 
            join public."Question" on public."Question"."Question_ID"=public."Marks_evaluation"."Question_ID"
            where "Marks_evaluation"."Evaluation_ID"="Course_Marks"."Evaluation_ID" AND "Marks_evaluation"."Question_ID"="Question"."Question_ID"
            group by "Course_ID","Question_No"
            order by "Question_No";
            `
            
        );
        
        res.json(result.rows);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/Marks/max', async (req, res) => {
    try {
        const result = await pool.query(
            `
            SELECT "Course_ID","Question_No" , max("Obtained_Marks")
            from public."Course_Marks" 
            join public."Marks_evaluation" on public."Course_Marks"."Evaluation_ID"=public."Marks_evaluation"."Evaluation_ID" 
            join public."Question" on public."Question"."Question_ID"=public."Marks_evaluation"."Question_ID"
            where "Marks_evaluation"."Evaluation_ID"="Course_Marks"."Evaluation_ID" AND "Marks_evaluation"."Question_ID"="Question"."Question_ID"
            group by "Course_ID","Question_No"
            order by "Question_No";
            
            `
            
        );
        
        res.json(result.rows);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/Marks/stddev', async (req, res) => {
    try {
        const result = await pool.query(
            `
            SELECT "Course_ID","Question_No" , ROUND(stddev("Obtained_Marks"),2)
            from public."Course_Marks" 
            join public."Marks_evaluation" on public."Course_Marks"."Evaluation_ID"=public."Marks_evaluation"."Evaluation_ID" 
            join public."Question" on public."Question"."Question_ID"=public."Marks_evaluation"."Question_ID"
            where "Marks_evaluation"."Evaluation_ID"="Course_Marks"."Evaluation_ID" AND "Marks_evaluation"."Question_ID"="Question"."Question_ID"
            group by "Course_ID","Question_No"
            order by "Question_No";
            
            `
            
        );
        
        res.json(result.rows);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

//feedback
app.post('/api/feedback', async (req, res) => {
    const feedback = req.body; // Assuming body-parser or equivalent is used
    Object.entries(feedback).forEach(async ([key, value]) => {
        try {
            const instructor_id = await pool.query(
                `Select DISTINCT * From public."Instructor_Courses" WHERE "Courses_Course_ID"=$1;`,[key]
            );
            const instructor_id_result = instructor_id.rows;
            await pool.query(
                `INSERT INTO public."Feedback" VALUES 
                ($1, $2, $3, $4);`,
                [global, key,instructor_id_result[0].Instructor_Instructor_ID,value]
                
            );
            
            // console.log(`Course ID: ${key}, Feedback: ${value}, instructor: ${instructor_id_result[0].Instructor_Instructor_ID}`);
            return res.status(201);
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    });
    
});


app.get('/api/feedback/course', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT DISTINCT public."Student_Courses"."Courses_Course_ID", public."Courses"."Course_Name" 
            FROM public."Student_Courses" join public."Courses" 
            on public."Student_Courses"."Courses_Course_ID"=public."Courses"."Course_ID"
            WHERE "Student_Std_id" = $1;`,[global]
        );
        
        res.json(result.rows);
        // console.log(json(result.rows));
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});


//TimeTable

app.get('/api/timetable', async (req, res) => {
    try {
        const result = await pool.query(
            `Select C."Std_id",C."Day",I."Instructor_Name",D."Course_Name",C."Start_time",C."End_time" From public."Classes" C
            join public."Instructor" I on I."Instructor_ID" = C."Instructor_ID"
            join public."Courses" D on D."Course_ID" = C."Course_ID"
            WHERE "Std_id"=$1
            group by "Std_id","Day",I."Instructor_Name",D."Course_Name","Start_time","End_time";`,[global]
        );
        
        res.json(result.rows);
        // console.log(json(result.rows));
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/timetable/days', async (req, res) => {
    try {
        const result = await pool.query(
            `Select DISTINCT "Day" From public."Classes" 
            WHERE "Std_id"=$1;`,[global]
        );
        
        res.json(result.rows);
        // console.log(json(result.rows));
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

//withdraw

app.post('/api/withdraw', async (req, res) => {
    const withdraw = req.body; // Assuming body-parser or equivalent is used
    
        try {
            await pool.query(
                `
                delete from public."Student_Courses" 
                where "Student_Std_id" = $1 and "Courses_Course_ID"= $2;
                `,
                [global, withdraw.courseId]
                
            );
            
            return res.status(200);
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
});

//Challan

app.get('/api/challan', async (req, res) => {
    try {
        const result = await pool.query(
            `select * from public."Challan" where "Std_id"=$1;`,[global]
        );
        
        for (let row of result.rows) {
            if (row.Due_date) {
                row.Due_date = row.Due_date.toISOString().split('T')[0];
                
            }
            if (row.Generated_on) {
                row.Generated_on = row.Generated_on.toISOString().split('T')[0];
            }
        }

        res.json(result.rows);
        // console.log(json(result.rows));
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});



//<TEACHER___________________________________________________________________________>

//Attendance
app.get('/api/teacher/courses', async (req, res) => {
        try {
            const result = await pool.query(
                `
                select DISTINCT * from public."Instructor_Courses" 
                where "Instructor_Instructor_ID"=$1;
                `,
                [global]
            );
            
            res.json(result.rows);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
});

app.get("/api/teacher/sections/:courseId", async (req, res) => {
    const { courseId } = req.params;
    try {
      const result = await pool.query(
        `SELECT "Section_ID" FROM public."Section" 
        WHERE "Course_ID" = $1 AND "Instructor_ID" = $2;`,
        [courseId,global]
      );
      res.json(result.rows);
    } catch (error) {
      console.error("Error fetching sections:", error);
      res.status(500).json({ error: "Error fetching sections" });
    }
  });

app.get("/api/teacher/students/:sectionId", async (req, res) => {
    const { sectionId } = req.params;
    try {
      const result = await pool.query(
        `SELECT "Std_id" FROM public."Section" WHERE "Section_ID" = $1`,
        [sectionId]
      );
      res.json(result.rows);
    } catch (error) {
      console.error("Error fetching students:", error);
      res.status(500).json({ error: "Error fetching students" });
    }
});

  // Save attendance
app.post("/api/teacher/attendance", async (req, res) => {
    const { courseId, sectionId, date, records } = req.body;
  
    if (!courseId || !sectionId || !date || !records || records.length === 0) {
      return res.status(400).json({ error: "Invalid or missing attendance data" });
    }
  
    try {
      const client = await pool.connect();
  
      // Start a transaction
      await client.query("BEGIN");
  
      // Insert or update attendance records
      for (const record of records) {
        const { studentId, status } = record;
        await client.query(
          `
          INSERT INTO public."Attendance" ("Lecture_Date", "Status", "Std_id", "Course_ID", "Duration")
          VALUES ($1, $2, $3, $4, 1)
          ON CONFLICT ("Lecture_Date", "Std_id", "Course_ID")
          DO UPDATE SET "Status" = EXCLUDED."Status"
          `,
          [date,status,studentId,courseId]
        );
      }
  
      // Commit transaction
      await client.query("COMMIT");
      client.release();
  
      res.json({ message: "Attendance saved successfully" });
    } catch (error) {
      console.error("Error saving attendance:", error);
  
      // Rollback transaction in case of error
      if (client) {
        await client.query("ROLLBACK");
        client.release();
      }
  
      res.status(500).json({ error: "Error saving attendance" });
    }
});

//Add Course
app.post('/api/add_course/register', async (req, res) => {
    const withdraw = req.body; // Assuming body-parser or equivalent is used
    
        try {
            await pool.query(
                `
                INSERT INTO public."Courses" ("Course_ID", "Course_Name")
                VALUES ($2, $1)
                on conflict ("Course_ID") do nothing;
                `,
                [withdraw.Course_name, withdraw.course_code]
                
            );
            
            return res.status(200);
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
});

//Remove Course
app.post('/api/remove_course/register', async (req, res) => {
    const withdraw = req.body; // Assuming body-parser or equivalent is used
    
        try {
            await pool.query(
                `
                delete from public."Courses" where "Course_ID" = $2 AND "Course_Name"=$1;
                `,
                [withdraw.Course_name, withdraw.course_code]
                
            );
            
            return res.status(200);
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
});


//feedback
app.get('/api/teacher/feedback/:sectionId/:courseId', async (req, res) => {
    const { sectionId,courseId } = req.params;
    try {
      const students = await pool.query(
        `select public."Feedback"."Std_id",public."Feedback"."Feedback" from public."Feedback"
        join public."Section" on public."Section"."Std_id"=public."Feedback"."Std_id"
        where public."Feedback"."Course_ID" = $1 AND public."Feedback"."Instructor_ID"=$2
         AND public."Section"."Section_ID"=$3;`,
        [courseId,global,sectionId]
      );
  
      res.json(students.rows)
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

//Course_management
app.get('/api/teacher/coursemanage', async (req, res) => {
    try {
      const response = await pool.query(
        `select "Course_ID","Course_Name" from public."Courses"
        left join public."Instructor_Courses" 
        on public."Instructor_Courses"."Courses_Course_ID"=public."Courses"."Course_ID"
        where "Instructor_Instructor_ID" is null;`
      );
  
      res.json(response.rows)
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

app.post('/api/teacher/courseaccpet', async (req, res) => {
    const accept = req.body; // Assuming body-parser or equivalent is used
        
        try {
            await pool.query(
                `
                INSERT INTO public."Instructor_Courses" VALUES 
                ($1, $2);
                `,
                [global, accept.courseId]
                
            );
            
            return res.status(200).json({ message: 'Course accepted successfully.' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to accept course.' });
        }
});

//teacher_Data
app.get('/api/teacher/user_data', async (req,res)=>{

    try {
        const result = await pool.query(
            'select * from public."Instructor" where "Instructor_ID"=$1;',[global]
        );
        // for (let row of result.rows) {
        //     if (row.Date_Of_Birth) {
        //         row.Date_Of_Birth = row.Date_Of_Birth.toISOString().split('T')[0];
        //     }
        // }
        
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
})

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
