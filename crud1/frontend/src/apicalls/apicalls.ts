import axios from "axios";
import { employeeGet, employeeSet } from "../types/types";
import  { useState } from 'react'
export const onPost=async(employee:employeeSet)=>{
    await axios.post('http://localhost:1432/post-data',employee)
}

export const onGet=async()=>{
    const res=await axios.get('http://localhost:1432/get-data')
   return res.data.data
    }

    export const onDel=async(_id:string)=>{
        await axios.delete(`http://localhost:1432/delete-data/${_id}`)
    }

   
export const onGetone=async(_id:string)=>{
      const res=  await axios.get(`http://localhost:1432/get-data/${_id}`)
      return res.data.data
}

export const onUpdate=async(_id:string,employee:employeeSet)=>{
    await axios.put(`http://localhost:1432/update-data/${_id}`,employee)
}