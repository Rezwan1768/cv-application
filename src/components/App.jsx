import { useState } from "react";
import { Form } from "./Form";
import { Resume } from "./Resume";

export function App() {
  const [isEditMode, setIsEditMode] = useState(true);

  function handleModeChange() {
    setIsEditMode(!isEditMode);
  }

  return (
    <>
      <h1>Resume/CV Application</h1>
      {isEditMode ? (
        <Form onSubmit={handleModeChange} />
      ) : (
        <Resume onClick={handleModeChange} />
      )}
    </>
  );
}
