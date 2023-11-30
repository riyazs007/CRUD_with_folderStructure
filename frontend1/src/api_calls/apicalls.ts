import axios from "axios";
import { studentSet } from "../types/types";

export const addPupil=async(student:studentSet)=>{
    return    await axios.post('http://localhost:3332/send-data',student)
}

export const retrieveStudent=async()=>{
    const res=await axios.get('http://localhost:3332/get-data')
    return res.data.data
}
export const removeStudent=async(_id:string)=>{
    return await axios.delete(`http://localhost:3332/delete/${_id}`)
}

  export const updateStudent = async (_id: string, student: studentSet) => {
    return await axios.put(`http://localhost:3332/update/${_id}`, student);   
  }
  
  export const retrieveStudentById = async (_id: string) => {
    const res = await axios.get(`http://localhost:3332/get-data/${_id}`);
    return res.data.data;
    // Replace 'http://localhost:3332/getStudent' with your actual endpoint to retrieve a student by ID
  }