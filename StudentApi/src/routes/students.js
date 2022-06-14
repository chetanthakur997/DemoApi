const express = require("express");
const router = new express.Router();
const Student=require("../models/students");

//create a student using asyn await
router.post("/students",async(req,res)=>{
    try {
        console.log("dhdhhhdh");
      console.log(req.body+"jjjjjjjj");
      const user=new Student(req.body);
      const createUser=await  user.save();
      res.status(201).send(createUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

// create a student using promise

// router.post("/students",async(req,res)=>{
//    console.log(req.body);
//    const user=new Student(req.body);
//    user.save().then(()=>{
//     res.status(201).send(user);
//    }).catch((e)=>{
//     res.status(400).send(e);
//    })
//  res.send("hello this side chetan")
// });

//get students

router.get("/students",async(req,res)=>{
    try {
        const studentData = await Student.find();
        res.send(studentData);
    } catch (error) {
        res.send(error);
    }
});

//get student by id

router.get("/students/:id",async(req,res)=>{
    try {
       const id= req.params.id
        const studentData = await Student.findById(id);
        if(!studentData){
            res.status(404).send()
        }else{
            res.send(studentData);
        }
    } catch (error) {
        res.send(error);
    }
});

//delete student by id

router.delete("/students/:id",async(req,res)=>{
    try {
       const id= req.params.id
        const studentData = await Student.findByIdAndDelete(id);
        if(!id){
            res.status(404).send()
        }else{
            res.send(studentData);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

//update student by id
router.patch("/students/:id",async(req,res)=>{
    try {
       const id= req.params.id
        const updateStudentData = await Student.findByIdAndUpdate(id,req.body,{new:true});
        if(!id){
            res.status(404).send()
        }else{
            res.send(updateStudentData);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports=router;