import React from "react";
import { employeeGet } from "../types/types";

const GetAll = ({ allEmployees,onDelData,onUpdateData }: { allEmployees: employeeGet[];
    onDelData:(_id:string)=>void;
    onUpdateData:(_id:string)=>void
}) => {
  return (
    <>
      <table border={1}>
        <thead></thead>
        <tr>
          <td>Name</td>
          <td>Department</td>
          <td>Salary</td>
          <td>PF</td>
          <td>Ta</td>
          <td>Da</td>
          <td>Hra</td>
          <td>Gross</td>
          <td>Net</td>
          <td>Delete</td>
          <td>Edit</td>
        </tr>
        <tbody>
          {allEmployees.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.name}</td>
                <td>{element.department}</td>
                <td>{element.salary}</td>
                <td>{element.pf}</td>
                <td>{element.ta}</td>
                <td>{element.da}</td>
                <td>{element.hra}</td>
                <td>{element.gross}</td>
                <td>{element.net}</td>
                <td><button onClick={()=>onDelData(element._id)}>delete</button></td>
                <td><button onClick={()=>onUpdateData(element._id)}>edit</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default GetAll;
