import { useState } from "react";
import { Form } from "./Form";
import { Resume } from "./Resume";

export function App() {
  const [formData, setFormData] = useState({
    personal: { firstName: "", lastName: "", email: "", phone: "" },
    education: [
      {
        id: 1,
        school: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "",
        isAttending: false,
      },
    ],
    work: [
      {
        id: 1,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        isCurrentJob: false,
        description: "",
      },
    ],
  });

  // Used to toggle between the form and resume
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

  // Allow adding new school or job (depends on the value of section)
  function addArrayItem(section) {
    setFormData((prev) => {
      const newId = Math.max(...prev[section].map((item) => item.id), 0) + 1;
      const newItem =
        section === "education"
          ? {
              id: newId,
              school: "",
              degree: "",
              major: "",
              startDate: "",
              endDate: "",
              isAttending: false,
            }
          : {
              id: newId,
              company: "",
              position: "",
              startDate: "",
              endDate: "",
              isCurrentJob: false,
              description: "",
            };

      return {
        ...prev,
        [section]: [...prev[section], newItem],
      };
    });
  }

  function deleteArrayItem(section, id) {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id),
    }));
  }

  function updateArrayItem(section, id, field, e) {
    setFormData((prev) => {
      const updatedSection = prev[section].map((item) => {
        if (item.id === id) {
          const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
          return {
            ...item,
            [field]: value,
          };
        }
        return item;
      });

      return {
        ...prev,
        [section]: updatedSection,
      };
    });
  }

  return (
    <>
      <h1>Resume/CV Application</h1>
      {isEditMode ? (
        <Form
          data={formData}
          onSubmit={handleModeChange}
          onUpdatePersonal={updatePersonal}
          onAddArrayItem={addArrayItem}
          onDeleteArrayItem={deleteArrayItem}
          onUpdateArrayItem={updateArrayItem}
        />
      ) : (
        <Resume onClick={handleModeChange} />
      )}
    </>
  );
}
