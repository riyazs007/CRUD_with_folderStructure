import { Request,Response } from "express"
import {sendData,takeData,removeData,editData,getone} from '../Service/service'
export const getdata=async(req:Request,res:Response)=>{
   const data= await takeData()
    res.send({message:"data retrived successfully",data})
}

export const postdata=async(req:Request,res:Response)=>{
    const {name,age,gender,qualification}=req.body
   const data= await sendData(name,age,gender,qualification) 
   res.send({success:true,message:"data saved successfully"})
}

export const deleteData=async(req:Request,res:Response)=>{
    const _id=req.params._id
    await removeData(_id)
    res.send({success:true,message:"record deleted successfully"})
}

export const updateData=async(req:Request,res:Response)=>{
    const _id=req.params._id
    const {name,age,gender,qualification}=req.body
    const data=await editData(_id,name,age,gender,qualification)
        res.send({message:"data updated successfully",data})
}

export const getOnedata=async(req:Request,res:Response)=>{
    const _id=req.params._id
    const data=await getone(_id)
    res.send({success:true,message:"Data retrieved successfully",data})
}