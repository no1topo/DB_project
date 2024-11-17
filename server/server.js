const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

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
