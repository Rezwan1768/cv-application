import { useState } from "react";
import { Field } from "./Field";

export function SchoolEntry() {
  const [isAttending, setIsAttending] = useState(false);

  return (
    <div>
      <Field id="school" type="text" placeholder="The Autopsy of Jane Doe">
        School:{" "}
      </Field>
      <div className="field-columns">
        <Field id="degree" type="text" placeholder="Bachelors of Arts">
          Degree:{" "}
        </Field>
        <Field id="major" type="text" placeholder="Liberal Arts">
          Major:{" "}
        </Field>
        <Field id="school-start" type="date">
          Start:{" "}
        </Field>
        {!isAttending && (
          <Field id="school-end" type="date">
            End:{" "}
          </Field>
        )}
      </div>
      <div className="checkbox-field">
        <input
          id="has-graduated"
          type="checkbox"
          checked={isAttending}
          onChange={(e) => setIsAttending(e.target.checked)}
        />
        <label htmlFor="has-graduated">I currently attend</label>
      </div>
    </div>
  );
}
