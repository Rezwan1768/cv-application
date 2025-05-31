export function Field({ id, type, children, ...rest }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{children}</label>
      <input id={id} type={type} name={id} {...rest} />
    </div>
  );
}
