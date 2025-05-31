import { useState } from "react";
import { Form } from "./Form";
import { Resume } from "./Resume";

export function App() {
  const [formData, setFormData] = useState({
    personal: { firstName: "", lastName: "", email: "", phone: "" },
    education: [{ id: 1, school: "", degree: "", major: "", startDate: "" }],
    work: [
      { id: 1, company: "", position: "", startDate: "", description: "" },
    ],
  });

  const [isEditMode, setIsEditMode] = useState(true);

  function handleModeChange() {
    setIsEditMode(!isEditMode);
  }

  function updatePersonal(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [name]: value },
    }));
  }

  return (
    <>
      <h1>Resume/CV Application</h1>
      {isEditMode ? (
        <Form
          data={formData}
          onSubmit={handleModeChange}
          onUpdatePersonal={updatePersonal}
        />
      ) : (
        <Resume onClick={handleModeChange} />
      )}
    </>
  );
}
