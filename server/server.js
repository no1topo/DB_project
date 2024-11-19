const express = require('express');
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcrypt');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Hashing

// Login endpoint
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Received data:', { username, password }); // Debugging

    try {
        // Fetch user from database
        const result = await pool.query('SELECT * FROM public."User" WHERE "Username" = $1', [username]);
        console.log(result.rows[0]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = result.rows[0];
        
        bcrypt.compare(password, user.Password_hash,(err, result) =>{
            console.log(result);
            if (err) {
                res.status(500).json({ error: 'Internal server error' });
              } else if (result) {
                console.log("working!SASAS!!");
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




// Routes
app.get('/api/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM public."Student";');
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
