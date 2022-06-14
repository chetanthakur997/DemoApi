const express = require("express");
require("./src/db/conn");
const studentRouter=require("./src/routes/students");
const app=express();
const port=process.env.Port  || 8000;
app.use(express.json());
app.use(studentRouter);
app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
});