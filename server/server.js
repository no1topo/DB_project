const express = require('express');
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcrypt');

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
                global = username; 
                console.log(global);
                res.status(200).json({ message: 'Login successful' });
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
            
            console.log(`Course ID: ${key}, Feedback: ${value}, instructor: ${instructor_id_result[0].Instructor_Instructor_ID}`);
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

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
