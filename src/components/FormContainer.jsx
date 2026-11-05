import { useState } from "react";

function FormContainer({ onAddStudent }) {
  const [name, setName] = useState("");
  const [program, setProgram] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !program.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    onAddStudent({
      id: Date.now(),
      name,
      program,
    });

    setName("");
    setProgram("");
  };

  return (
    <section id="formContainer">
      <form id="studentForm" onSubmit={handleSubmit}>
        <div className="input-fields">
          <label htmlFor="name">Student Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-fields">
          <label htmlFor="program">Program</label>
          <input
            type="text"
            name="program"
            id="program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" className="add-btn">
            Add Student
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormContainer;