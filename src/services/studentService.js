const BASE_URL = "http://localhost:3001/students";

export async function getStudents() {
  const response = await fetch(BASE_URL);
  return response.json();
}

export async function addStudent(student) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  return response.json();
}

export async function updateStudent(id, student) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  return response.json();
}

export async function deleteStudent(id) {
  return fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}

export async function getStudentById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
}
