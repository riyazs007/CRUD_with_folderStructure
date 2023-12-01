import mongoose from "mongoose";

const empSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    pf:{
        type:Number,
        required:true
    },
    da:{
        type:Number,
        required:true
    },
    ta:{
        type:Number,
        required:true
    },
    hra:{
        type:Number,
        required:true
    },
    gross:{
        type:Number,
        required:true
    },
    net:{
        type:Number,
        required:true
    }
})

const Employee=mongoose.model('Employee',empSchema)

export default Employee;