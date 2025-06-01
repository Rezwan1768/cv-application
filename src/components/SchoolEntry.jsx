import { useState } from "react";
import { Field } from "./Field";

export function SchoolEntry({ id, handleClick }) {
  const [isAttending, setIsAttending] = useState(false);

  function onClick() {
    handleClick("education", id);
  }

  return (
    <div className="education-section">
      <Field
        id={`school-${id}`}
        type="text"
        placeholder="The Autopsy of Jane Doe"
      >
        School:{" "}
      </Field>

      <div className="field-columns">
        <Field id={`degree-${id}`} type="text" placeholder="Bachelors of Arts">
          Degree:{" "}
        </Field>

        <Field id={`major-${id}`} type="text" placeholder="Liberal Arts">
          Major:{" "}
        </Field>

        <Field id={`school-start-${id}`} type="date">
          Start:{" "}
        </Field>

        {!isAttending && (
          <Field id={`school-end-${id}`} type="date">
            End:{" "}
          </Field>
        )}
      </div>

      <div className="field-margin input-button-group">
        <div className="checkbox-field">
          <input
            id={`has-graduated-${id}`}
            type="checkbox"
            checked={isAttending}
            onChange={(e) => setIsAttending(e.target.checked)}
          />
          <label htmlFor={`has-graduated-${id}`}>I currently attend</label>
        </div>

        <button type="button" onClick={onClick}>
          Remove
        </button>
      </div>
    </div>
  );
}
