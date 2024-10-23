const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.jason());


app.listen(5000, ()=>{
    console.log("server has started On port 5000");
})