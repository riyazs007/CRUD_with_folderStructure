import company from "../Schema/schema"

export const sendData=(name:String,age:Number,gender:String,qualification:String)=>{
   const info= new company({name,age,gender,qualification})
   return info.save()
}

export const takeData=()=>{
    return company.find({})
}

export const removeData=(_id:String)=>{
    return company.deleteOne({_id})
}

export const editData=(_id:String,name:String,age:Number,gender:String,qualification:String)=>{
    return company.updateOne({_id},{name,age,gender,qualification})
}

export const getone=(_id:string)=>{
    return company.findOne({_id})
}