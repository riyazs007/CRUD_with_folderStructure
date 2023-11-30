import mongoose from "mongoose";

const Riyaz=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:25
        },
        gender:{
            type:String,
            required:true
        },
        qualification:{
            type:String,
            required:true
        }
    }
)
const company=mongoose.model('company',Riyaz);
export default company;