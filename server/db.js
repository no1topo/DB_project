const { Pool } = require('pg');
// require('dotenv').config(); // To load environment variables

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "flex_database",
    password: "123",
    port: 5432,
});

module.exports = pool;
