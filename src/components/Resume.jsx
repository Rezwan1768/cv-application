import { EducationSection } from "./EducationSection";
import { WorkSection } from "./WorkSection";
import "../styles/resume.css";

export function Resume({ formData, onClick }) {
  const { firstName, lastName, email, phone } = formData.personal;
  const schools = formData.education;
  const jobs = formData.work;

  return (
    <>
      <div className="resume">
        <section className="personal-info">
          <h1>{firstName + " " + lastName}</h1>

          <div className="contacts">
            <p>Phone: {phone}</p>
            <span className="hide-on-small">{"|"}</span>
            <p>Email: {email}</p>
          </div>
        </section>

        <section>
          <h2>Education</h2>
          {schools.map((school) => (
            <EducationSection key={school.id} school={school} />
          ))}
        </section>

        <section>
          <h2>Professional Experience</h2>
          {jobs.map((job) => (
            <WorkSection key={job.id} job={job} />
          ))}
        </section>
      </div>

      <button type="button" className="edit-btn" onClick={onClick}>
        Edit
      </button>
    </>
  );
}
