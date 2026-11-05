import { useState } from "react";

import HeaderContainer from "./components/HeaderContainer";
import FormContainer from "./components/FormContainer";
import ListContainer from "./components/ListContainer";

import "./style.css";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <>
      <HeaderContainer />

      <FormContainer onAddStudent={addStudent} />

      <ListContainer
        students={students}
        onDeleteStudent={deleteStudent}
      />
    </>
  );
}

export default App;