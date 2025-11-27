import { useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";

function App() {
  const [screen, setScreen] = useState("list"); 
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState([]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Student Result Management</h1>

      {screen === "list" && (
        <StudentList
          students={students}
          setStudents={setStudents}
          setScreen={setScreen}
          setSelectedStudent={setSelectedStudent}
        />
      )}

      {screen === "form" && (
        <StudentForm
          student={selectedStudent}
          setScreen={setScreen}
        />
      )}

      {screen === "details" && (
        <StudentDetails
          student={selectedStudent}
          setScreen={setScreen}
        />
      )}
    </div>
  );
}

export default App;
