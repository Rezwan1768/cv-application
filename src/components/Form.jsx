import { Field } from "./Field";
import { SchoolEntry } from "./SchoolEntry";
import { WorkEntry } from "./WorkEntry";
import "../styles/form.css";

export function Form({
  data,
  onSubmit,
  onUpdatePersonal,
  onAddArrayItem,
  onDeleteArrayItem,
  onUpdateArrayItem,
}) {
  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  function handleAddSchool() {
    onAddArrayItem("education");
  }

  function handleAddJob() {
    onAddArrayItem("work");
  }

  const { firstName, lastName, email, phone } = data.personal;
  const schools = data.education;
  const jobs = data.work;

  return (
    <>
      <h1 className="form-title">Resume/CV Application</h1>
      <form onSubmit={handleFormSubmit}>
        <fieldset className="field-columns">
          <legend>Personal Information</legend>
          <Field
            id="first-name"
            type="text"
            name="firstName"
            required
            value={firstName}
            onChange={onUpdatePersonal}
          >
            First Name:{" "}
          </Field>

          <Field
            id="last-name"
            type="text"
            name="lastName"
            required
            value={lastName}
            onChange={onUpdatePersonal}
          >
            Last Name:{" "}
          </Field>

          <Field
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onUpdatePersonal}
          >
            Email:{" "}
          </Field>

          <Field
            id="phone"
            type="tel"
            name="phone"
            value={phone}
            onChange={onUpdatePersonal}
          >
            Phone:{" "}
          </Field>
        </fieldset>

        <fieldset>
          <legend>Education</legend>

          {schools.map((school) => (
            <SchoolEntry
              key={school.id}
              schoolData={school}
              handleClick={onDeleteArrayItem}
              handleUpdate={onUpdateArrayItem}
            />
          ))}

          <button type="button" className="add" onClick={handleAddSchool}>
            Add
          </button>
        </fieldset>

        <fieldset>
          <legend>Work Experience</legend>
          {jobs.map((job) => (
            <WorkEntry
              key={job.id}
              jobData={job}
              handleClick={onDeleteArrayItem}
              handleUpdate={onUpdateArrayItem}
            />
          ))}

          <button type="button" className="add" onClick={handleAddJob}>
            Add
          </button>
        </fieldset>

        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
