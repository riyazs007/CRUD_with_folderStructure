import exp from "constants";
import { serviceLogic } from "../commons/service_logic";
import Employee from "../model/empSchema";

export const postData = (name: String, department: String, salary: number) => {
  const info = serviceLogic(salary);
  const postData = new Employee({
    name,
    department,
    salary,
    pf: info.pf,
    ta: info.ta,
    da: info.da,
    hra: info.hra,
    gross: info.gross,
    net: info.net,
  });
  return postData.save();
};

export const getData = () => {
  return Employee.find({});
};

export const deleteData=(_id:String)=>{
  return Employee.deleteOne({_id})
}

export const updateData=(_id:String,name:String,department:String,salary:number)=>{
  const info = serviceLogic(salary);
  return Employee.updateOne({_id},{
    name,
    department,
    salary,
    pf: info.pf,
    ta: info.ta,
    da: info.da,
    hra: info.hra,
    gross: info.gross,
    net: info.net,
  })
}

export const getSingleData=(_id:String)=>{
  return Employee.findOne({_id})
}