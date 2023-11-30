import mongoose from "mongoose";

const Run=async()=>{
   await mongoose.connect('mongodb://127.0.0.1:27017/Dil_Deewana').then(()=> console.log('db connected'))
}
export default Run;