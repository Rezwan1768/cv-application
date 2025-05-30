export function Field({ id, type, children, ...rest }) {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} type={type} {...rest} />
    </>
  );
}
