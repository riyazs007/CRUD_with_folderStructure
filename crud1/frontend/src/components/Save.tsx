import React, { useState,useEffect } from "react";
import { employeeSet } from "../types/types";

const Save = ({
  onPostData,
  updateId,
  employeeInitial,
}: {
  onPostData: (employee: employeeSet) => void;
  updateId?: string;
  employeeInitial?: employeeSet;
}) => {
  const [employee, setEmployee] = useState<employeeSet>({
    name: "",
    department: "",
    salary: 0,
  });

  useEffect(()=>{
    if(updateId&&employeeInitial){
        setEmployee(employeeInitial)
    }
  },[updateId,employeeInitial])

  const { name, department, salary } = employee;
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const save = () => {
    onPostData(employee);
    setEmployee({
        name:'',
        department:'',
        salary:0
    })
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Department</td>
            <td>
              <select
                name="department"
                value={department}
                onChange={(e) => onSelectChange(e)}
              >
                <option value="">Select Department</option>
                <option value="Manager">Manager</option>
                <option value="Developer">Developer</option>
                <option value="SeniorDeveloper">Senior Developer</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Salary</td>
            <td>
              <input
                type="number"
                name="salary"
                value={salary}
                onChange={(e) => onInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button onClick={save}>{updateId?"Update":"Save"}</button>
            </td>
          </tr>
        </thead>
      </table>
    </>
  );
};
export default Save;
