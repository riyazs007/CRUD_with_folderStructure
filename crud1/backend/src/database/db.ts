import mongoose from "mongoose";

const connection=async()=>{
    await mongoose.connect('mongodb://localhost:27017/MyDatabase').then(()=>console.log("Server proposed to Database "))
}
export default connection;