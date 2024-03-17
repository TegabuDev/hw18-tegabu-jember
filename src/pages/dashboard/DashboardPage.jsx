import React, { useEffect, useState } from "react";
import data from "../../data/students";
import AddStudent from "../../components/AddStudent";
import StudentList from "../../components/StudentList";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/AuthProvider";
import { utilService } from "../../services/utilService";

const DashboardPage = () => {
  const [students, setStudents] = useState(data);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const addStudent = (name, age, major, university, averageGrade) => {
    const newStudent = {
      id: utilService.generateId(),
      name,
      age,
      major,
      university,
      averageGrade,
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  const removeStudent = (studentId) => {
    const updatedStudent = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updatedStudent);
  };

  const editStudent = (e) => {
    // const index = students.findIndex(
    //   (user) => (user.username = e.target.value)
    // );
    // students[index].userName = e.target.value;
    // setStudents(students);
  };

  return (
    <div className="dashboard-container">
      {/* <h2>Dashboard</h2> */}
      <AddStudent addStudent={addStudent} />
      <StudentList
        students={students}
        removeStudent={removeStudent}
        editStudent={editStudent}
      />
    </div>
  );
};

export default DashboardPage;
