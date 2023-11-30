import { studentGet } from "../types/types";

const GetAll = ({
  allStudents,
  delStudent,
  editStudent, // Add editStudent function prop
}: {
  allStudents: studentGet[];
  delStudent: (_id: string) => void;
  editStudent: (_id: string) => void; // Define editStudent function
}) => {
  const deleteStudent = (_id: string) => {
    delStudent(_id);
  };

  return (
    <>
      <table border={1} style={{backgroundColor:"pink"}}>
        <thead></thead>
        <tbody>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Qualification</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        {allStudents.map((element, index) => {
          return (
            <tr key={index}>
              <td>{element.name}</td>
              <td>{element.age}</td>
              <td>{element.gender}</td>
              <td>{element.qualification}</td>
              <td>
                <button onClick={() => deleteStudent(element._id)} style={{color:"white", backgroundColor:"red"}}>
                  Delete
                </button>
              </td>
              <td>
                  <button onClick={() => editStudent(element._id)} style={{color:"white", backgroundColor:"blue"}}>
                    Edit
                  </button>
                </td>
             
            </tr>
          );
        })}
        </tbody>
      </table>
    </>
  );
};
export default GetAll;
