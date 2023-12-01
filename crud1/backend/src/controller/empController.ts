import { Request,Response } from "express";
import {postData,getData,deleteData,updateData,getSingleData} from '../service/empService.ts'

export const postEmpData=async(req:Request,res:Response)=>{
    const {name,department,salary}=req.body
    const sal:number=parseInt(salary)
    await postData(name,department,sal);
    res.send({message:"Data Saved Successfully", success:true})
}

export const getEmpData=async(req:Request,res:Response)=>{
   const data= await getData()
    res.send({success:true,message:"Data Retrieved Successfully",data})
} 

export const deleteEmpData=async(req:Request,res:Response)=>{
    const _id=req.params._id
    await deleteData(_id)
    res.send({success:true,message:"Data Deleted Successfully"})
}

export const updateEmpData=async(req:Request,res:Response)=>{
    const _id=req.params._id
    const {name,department,salary}=req.body
    const sal:number=parseInt(salary)
    await updateData(_id,name,department,sal)
    res.send({success:true,message:"Data Updated Successfully"})
}

export const getOneData=async(req:Request,res:Response)=>{
    const _id=req.params._id
   const data= await getSingleData(_id)
   res.send({success:true,message:"data retrieved successfully",data})
}