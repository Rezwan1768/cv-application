export function Field({ id, type, children, ...rest }) {
  return (
    <div className="form-field field-margin">
      <label htmlFor={id}>{children}</label>
      <input id={id} type={type} {...rest} />
    </div>
  );
}
