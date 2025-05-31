import { Field } from "./Field";
import { SchoolEntry } from "./SchoolEntry";
import "../styles/form.css";
import { useState } from "react";

export function Form({ data, onSubmit, onUpdatePersonal }) {
  const [isCurrentJob, setIsCurrentJob] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  const { firstName, lastName, email, phone } = data.personal;
  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset className="field-columns">
        <legend>Personal Information</legend>
        <Field
          id="first-name"
          type="text"
          name="firstName"
          placeholder="Jane"
          value={firstName}
          onChange={onUpdatePersonal}
        >
          First Name:{" "}
        </Field>
        <Field
          id="last-name"
          type="text"
          name="lastName"
          placeholder="Doe"
          value={lastName}
          onChange={onUpdatePersonal}
        >
          Last Name:{" "}
        </Field>
        <Field
          id="email"
          type="email"
          name="email"
          placeholder="janedoe@example.com"
          value={email}
          onChange={onUpdatePersonal}
        >
          Email:{" "}
        </Field>
        <Field
          id="phone"
          type="tel"
          name="phone"
          placeholder="123-456-7890"
          value={phone}
          onChange={onUpdatePersonal}
        >
          Phone:{" "}
        </Field>
      </fieldset>

      <fieldset>
        <legend>Education</legend>
        <SchoolEntry />
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
          {!isCurrentJob && (
            <Field id="work-end" type="date">
              End:{" "}
            </Field>
          )}
        </div>
        <div className="checkbox-field">
          <input
            id="current-job"
            type="checkbox"
            checked={isCurrentJob}
            onChange={(e) => setIsCurrentJob(e.target.checked)}
          />
          <label htmlFor="current-job">I currently work here</label>
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
