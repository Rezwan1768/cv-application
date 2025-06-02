import { Field } from "./Field";

const SECTION = "education";
export function SchoolEntry({ schoolData, handleClick, handleUpdate }) {
  const { id, school, degree, major, startDate, endDate, isAttending } =
    schoolData;

  function onCheck(e) {
    const checked = e.target.checked;
    handleUpdate(SECTION, id, "isAttending", e);

    if (checked) {
      // Clear the end date when currently attending
      handleUpdate(SECTION, id, "endDate", { target: { value: "" } });
    }
  }

  function onClick() {
    handleClick(SECTION, id);
  }

  return (
    <div className="education-section">
      <Field
        id={`school-${id}`}
        type="text"
        value={school}
        onChange={(e) => handleUpdate(SECTION, id, "school", e)}
      >
        School:{" "}
      </Field>

      <div className="field-columns">
        <Field
          id={`degree-${id}`}
          type="text"
          value={degree}
          onChange={(e) => handleUpdate(SECTION, id, "degree", e)}
        >
          Degree:{" "}
        </Field>

        <Field
          id={`major-${id}`}
          type="text"
          value={major}
          onChange={(e) => handleUpdate(SECTION, id, "major", e)}
        >
          Major:{" "}
        </Field>

        <Field
          id={`school-start-${id}`}
          type="date"
          value={startDate}
          onChange={(e) => handleUpdate(SECTION, id, "startDate", e)}
        >
          Start:{" "}
        </Field>

        {!isAttending && (
          <Field
            id={`school-end-${id}`}
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
          id={`has-graduated-${id}`}
          type="checkbox"
          checked={isAttending}
          onChange={onCheck}
        />
        <label htmlFor={`has-graduated-${id}`}>I currently attend</label>
      </div>

      <button type="button" className="field-margin remove" onClick={onClick}>
        Remove
      </button>
    </div>
  );
}
