export function EducationSection({ school }) {
  const {
    school: name,
    degree,
    major,
    startDate,
    endDate,
    isAttending,
  } = school;
  return (
    <div className="entry">
      <div className="name-date">
        <h3>{name}</h3>
        {startDate?.trim() && (
          <p>
            {startDate} to{" "}
            {isAttending || !endDate?.trim() ? "Present" : endDate}
          </p>
        )}
      </div>
      <p>
        {degree} in {major}
      </p>
    </div>
  );
}
