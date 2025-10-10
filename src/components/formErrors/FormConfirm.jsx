import './FormConfirm.css';

export default function FormConfirm({ onReset }) {
  return (
    <div role="alert" className="form-confirm">
      <p className="form-confirm-message">¡Formulario enviado con éxito!</p>
      <button onClick={onReset}>
Enviar otro
      </button>
    </div>
  );
}