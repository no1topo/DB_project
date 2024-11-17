const Pool = require("pg").Pool;

const pool = new pool ({
    user: "postgres",
    password: "qwaszxwsxqaz",
    host: "localhost",
    port: 5432,
    database: "flex_database" 
})

module.exports=pool;