import { Field } from "./Field";

const SECTION = "work";
export function WorkEntry({ jobData, handleClick, handleUpdate }) {
  const {
    id,
    company,
    position,
    startDate,
    endDate,
    isCurrentJob,
    description,
  } = jobData;

  function onCheck(e) {
    const checked = e.target.checked;
    handleUpdate(SECTION, id, "isCurrentJob", e);

    if (checked) {
      handleUpdate(SECTION, id, "endDate", { target: { value: "" } });
    }
  }

  function onClick() {
    handleClick(SECTION, id);
  }

  return (
    <div className="work-section">
      <div className="field-columns">
        <Field
          id={`company-${id}`}
          type="text"
          placeholder="Jane's Company"
          value={company}
          onChange={(e) => handleUpdate(SECTION, id, "company", e)}
        >
          Company:{" "}
        </Field>

        <Field
          id={`position-${id}`}
          type="text"
          placeholder="Jane's Position"
          value={position}
          onChange={(e) => handleUpdate(SECTION, id, "position", e)}
        >
          Position:{" "}
        </Field>

        <Field
          id={`work-start-${id}`}
          type="date"
          value={startDate}
          onChange={(e) => handleUpdate(SECTION, id, "startDate", e)}
        >
          Start:{" "}
        </Field>

        {!isCurrentJob && (
          <Field
            id={`work-end-${id}`}
            type="date"
            value={endDate}
            onChange={(e) => handleUpdate(SECTION, id, "endDate", e)}
          >
            End:{" "}
          </Field>
        )}
      </div>

      <div className="checkbox-field field-margin">
        <input
          id={`current-job-${id}`}
          type="checkbox"
          checked={isCurrentJob}
          onChange={onCheck}
        />
        <label htmlFor={`current-job-${id}`}>I currently work here</label>
      </div>

      <div className="form-field field-margin">
        <label htmlFor={`job-desc-${id}`}>Description: </label>
        <textarea
          id={`job-desc-${id}`}
          rows="7"
          cols="10"
          value={description}
          onChange={(e) => handleUpdate(SECTION, id, "description", e)}
        ></textarea>
      </div>

      <button type="button" className="field-margin" onClick={onClick}>
        Remove
      </button>
    </div>
  );
}
