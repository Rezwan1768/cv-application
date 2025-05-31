import { Field } from "./Field";
import "../styles/form.css";

export function Form({ onSubmit }) {
  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset className="field-columns">
        <legend>Personal Information</legend>
        <Field id="first-name" type="text" placeholder="Jane">
          First Name:{" "}
        </Field>
        <Field id="last-name" type="text" placeholder="Doe">
          Last Name:{" "}
        </Field>
        <Field id="email" type="email" placeholder="janedoe@example.com">
          Email:{" "}
        </Field>
        <Field id="phone" type="tel" placeholder="123-456-7890">
          Phone:{" "}
        </Field>
      </fieldset>

      <fieldset>
        <legend>Education</legend>
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
          <Field id="school-end" type="date">
            End:{" "}
          </Field>
        </div>
      </fieldset>

      <fieldset>
        <legend>Work Experience</legend>
        <div className="field-columns">
          <Field id="company" type="text" placeholder="Jane's Company">
            Company:{" "}
          </Field>
          <Field id="position" type="text" placeholder="Jane's Position">
            Position:{" "}
          </Field>
          <Field id="work-start" type="date">
            Start:{" "}
          </Field>
          <Field id="work-end" type="date">
            End:{" "}
          </Field>
        </div>
        <div className="form-field">
          <label htmlFor="job-desc">Description: </label>
          <textarea id="job-desc" rows="7" cols="10"></textarea>
        </div>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}
