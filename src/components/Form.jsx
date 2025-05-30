import { Field } from "./Field";

export function Form({ onSubmit }) {
  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset>
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
        <Field id="school" type="text" placeholder="Example University">
          School:{" "}
        </Field>
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
      </fieldset>
      <fieldset>
        <legend>Work Experience</legend>
        <Field id="company" type="text">
          Company:{" "}
        </Field>
        <Field id="position" type="text">
          Position:{" "}
        </Field>
        <label htmlFor="job-desc">Description: </label>
        <textarea id="job-desc" rows="8" cols="100"></textarea>
        <Field id="work-start" type="date">
          Start:{" "}
        </Field>
        <Field id="work-end" type="date">
          End:{" "}
        </Field>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}
