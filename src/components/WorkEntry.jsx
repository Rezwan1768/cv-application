import { useState } from "react";
import { Field } from "./Field";

export function WorkEntry({ id, handleClick }) {
  const [isCurrentJob, setIsCurrentJob] = useState(false);

  function onClick() {
    handleClick("work", id);
  }

  return (
    <div className="work-section">
      <div className="field-columns">
        <Field id={`company-${id}`} type="text" placeholder="Jane's Company">
          Company:{" "}
        </Field>

        <Field id={`position-${id}`} type="text" placeholder="Jane's Position">
          Position:{" "}
        </Field>

        <Field id={`work-start-${id}`} type="date">
          Start:{" "}
        </Field>

        {!isCurrentJob && (
          <Field id={`work-end-${id}`} type="date">
            End:{" "}
          </Field>
        )}
      </div>
      <div className="field-margin input-button-group">
        <div className="checkbox-field">
          <input
            id={`current-job-${id}`}
            type="checkbox"
            checked={isCurrentJob}
            onChange={(e) => setIsCurrentJob(e.target.checked)}
          />
          <label htmlFor={`current-job-${id}`}>I currently work here</label>
        </div>
        <button type="button" onClick={onClick}>
          Remove
        </button>
      </div>

      <div className="form-field field-margin">
        <label htmlFor={`job-desc-${id}`}>Description: </label>
        <textarea id={`job-desc-${id}`} rows="7" cols="10"></textarea>
      </div>
    </div>
  );
}
