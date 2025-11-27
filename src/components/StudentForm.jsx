import { useState } from "react";
import { addStudent, updateStudent } from "../services/studentService";

function StudentForm({ student, setScreen }) {
  const [name, setName] = useState(student?.name || "");
  const [section, setSection] = useState(student?.section || "");
  const [marks, setMarks] = useState(student?.marks || "");
  const [grade, setGrade] = useState(student?.grade || "");

  async function handleSubmit(e) {
    e.preventDefault();

    const studentData = { name, section, marks, grade };

    if (student) {
      await updateStudent(student.id, studentData);
      alert("Student updated successfully!");
    } else {
      await addStudent(studentData);
      alert("Student added successfully!");
    }

    setScreen("list");
  }

  return (
    <div>
      <h2>{student ? "Edit Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div>
          <label>Section: </label>
          <input value={section} onChange={(e) => setSection(e.target.value)} required />
        </div>

        <div>
          <label>Marks: </label>
          <input type="number" value={marks} onChange={(e) => setMarks(e.target.value)} required />
        </div>

        <div>
          <label>Grade: </label>
          <input value={grade} onChange={(e) => setGrade(e.target.value)} required />
        </div>

        <button type="submit">Save</button>
        <button type="button" onClick={() => setScreen("list")}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
