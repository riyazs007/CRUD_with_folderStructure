import { studentGet, studentSet } from "./types/types";
import { addPupil, removeStudent, retrieveStudent,retrieveStudentById,updateStudent } from "./api_calls/apicalls";
import Save from "./components/Save";
import { useEffect, useState } from "react";

import GetAll from "./components/GetAll";
const App = () => {
  const [allStudents, setAllStudents] = useState<studentGet[]>([]);
  const [editStudentId, setEditStudentId] = useState<string | undefined>(undefined);
  const [initialData, setInitialData] = useState<studentSet | undefined>(undefined);
  const addStudent = async (student: studentSet) => {
    
    if (editStudentId) {
      // If editing, update the existing record
      // You need to implement the update API call
      // For now, assume there's an updateStudent function
      // that updates the record using the student's _id
      await updateStudent(editStudentId, student);
    } else {
      // If not editing, add a new record
      const res = await addPupil(student);
      console.log(res.data.message);
    }

    setEditStudentId(undefined);
    setInitialData(undefined);
    getStudent();
  };
  const getStudent = async () => {
    const res: studentGet[] = await retrieveStudent();
    setAllStudents(res);
  };
  const delStudent = async (_id: string) => {
    await removeStudent(_id);
    getStudent();
  };

  const editStudent = async (_id: string) => {
    setEditStudentId(_id);
    // Retrieve the initial data for the selected student
    const initialDataRes = await retrieveStudentById(_id);
    setInitialData(initialDataRes);
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <>
      <br /><br /><br />
      <Save addStudent={addStudent} editStudentId={editStudentId} initialData={initialData}/>
      <br /><br /><br />
      <h1><b><u>Students Details</u></b></h1>
      <GetAll allStudents={allStudents} delStudent={delStudent}  editStudent={editStudent}  />   
    </>
  );
};
export default App;
