import {
  getStudents,
  deleteStudent,
  getStudentById,
} from "../services/studentService";

function StudentList({ students, setStudents, setScreen, setSelectedStudent }) {
  async function loadStudents() {
    const data = await getStudents();
    setStudents(data);
    alert("Students Loaded!");
  }

  async function handleDelete(id) {
    await deleteStudent(id);
    alert("Student Deleted. Click Load Students again.");
  }

  async function handleView(id) {
    const student = await getStudentById(id);
    setSelectedStudent(student);
    setScreen("details");
  }

  async function handleEdit(id) {
    const student = await getStudentById(id);
    setSelectedStudent(student);
    setScreen("form");
  }

  return (
    <div>
      <button onClick={loadStudents}>Load Students</button>
      <button onClick={() => setScreen("form")}>Add Student</button>

      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students found. Click Load Students.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Section</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.name}</td>
                <td>{stu.section}</td>
                <td>{stu.marks}</td>
                <td>{stu.grade}</td>
                <td>
                  <button onClick={() => handleView(stu.id)}>View</button>
                  <button onClick={() => handleEdit(stu.id)}>Edit</button>
                  <button onClick={() => handleDelete(stu.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      )}
    </div>
  );
}

export default StudentList;
