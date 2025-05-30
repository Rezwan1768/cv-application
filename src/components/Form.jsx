export function Form({ onSubmit }) {
  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <p>This is the form component!</p>
      <button type="submit">Submit</button>
    </form>
  );
}
