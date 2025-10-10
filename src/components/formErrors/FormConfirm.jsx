import './FormConfirm.css';
import Button from '../Button/Button';

export default function FormConfirm({ onReset }) {
  return (
    <div role="alert" className="form-confirm">
      <p className="form-confirm-message">¡Formulario enviado con éxito!</p>
      {/** Button Send Another Form */}
      <Button onClick={onReset}>
        Enviar otro
      </Button>
    </div>
  );
}