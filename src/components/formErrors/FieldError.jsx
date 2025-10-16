import './FieldError.css';

export default function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="field-error">
      {message}
    </p>
  );
}