import React from "react";
import '../App.css';

const StudentList = ({ students, deleteStudent }) => {
  return (
    <ul className="student-list">
  {students.map((student) => (
    <li key={student.id}>
      <div className="info">
        {student.image && <img src={`http://localhost:5000${student.image}`} alt="Student" />}
        <div>
          <strong>{student.name}</strong>
          <div>{student.course}</div>
        </div>
      </div>
      <div className="actions">
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
      </div>
    </li>
  ))}
</ul>

  );
};

export default StudentList;
