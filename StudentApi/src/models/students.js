const mongoose=require("mongoose");
const validator=require("validator");

const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:1
    },
    email:{
        type:String,
        required:true,
        unique:[true, "Email id is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
  

}, 
{ versionKey: false })



//we will create new collection

const Student=new mongoose.model('Student',studentSchema);

module.exports= Student;