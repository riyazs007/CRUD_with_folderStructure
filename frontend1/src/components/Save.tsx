import { useState,useEffect } from "react";
import { studentSet } from "../types/types";

const Save = ({
  addStudent,
  editStudentId, // Add editStudentId prop
  initialData, // Add initialData prop
}: {
  addStudent: (student: studentSet) => void;
  editStudentId?: string; // Define editStudentId prop
  initialData?: studentSet; // Define initialData prop
}) => {
  const [student, setStudent] = useState<studentSet>({
    name: "",
    age: 0,
    gender: "",
    qualification: "",
  });

  useEffect(() => {
    if (editStudentId && initialData) {
      // If editing, set initial data
      setStudent(initialData);
    }
  }, [editStudentId, initialData]);

  const { name, age, gender, qualification } = student;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const save = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    addStudent(student);
    setStudent({
      name: "",
      age: 0,
      gender: "",
      qualification: "",
    });
  };
  return (
    <>
      <table>
        <thead></thead>
        <tbody>
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
            <td>Age</td>
            <td>
              <input
                type="number"
                name="age"
                value={age}
                onChange={(e) => onInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>
              <input
                type="text"
                name="gender"
                value={gender}
                onChange={(e) => onInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Qualification</td>
            <td>
              <input
                type="text"
                name="qualification"
                value={qualification}
                onChange={(e) => onInputChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button onClick={(e) => save(e)}>{editStudentId ? "Update" : "Save"}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Save;
