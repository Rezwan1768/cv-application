export function WorkSection({ job }) {
  const { company, position, startDate, endDate, isCurrentJob, description } =
    job;
  return (
    <div className="entry">
      <div className="name-date">
        <h3>{company}</h3>
        {startDate.trim() && (
          <p>
            {startDate} to{" "}
            {isCurrentJob || !endDate?.trim() ? "Present" : endDate}
          </p>
        )}
      </div>
      <p>{position}</p>
      <p className="description">{description}</p>
    </div>
  );
}
