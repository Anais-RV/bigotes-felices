import { useState, useRef } from 'react';
import { submitAdoption } from '../../service/adopteServices';
import FieldError from '../FormErrors/FieldError';
import FormConfirm from '../FormErrors/FormConfirm';
import Button from '../Button/Button';
import './AdoptForm.css';


export default function AdoptForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: '',
  });


  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');


  const fullnameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);


  const validate = () => {
    const newErrors = {};
    if (!formData.fullname) newErrors.fullname = 'El nombre es obligatorio';
    if (!formData.email) newErrors.email = 'El email es obligatorio';
    if (!formData.phone) newErrors.phone = 'El teléfono es obligatorio';
    if (!formData.message) newErrors.message = 'El mensaje es obligatorio';
    return newErrors;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);


    if (Object.keys(newErrors).length > 0) {
      if (newErrors.fullname) fullnameRef.current?.focus();
      else if (newErrors.email) emailRef.current?.focus();
      else if (newErrors.phone) phoneRef.current?.focus();
      else if (newErrors.message) messageRef.current?.focus();
      return;
    }

    setStatus('submitting');
    try {
      await submitAdoption(formData);
      setStatus('success');
      setFormData({ fullname: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch {
      setStatus('error');
    }
  };


  if (status === 'success') {
    return <FormConfirm onReset={() => setStatus('idle')} />;
  }

  return (
    <form onSubmit={handleSubmit} className="adopt-form">
      <h1>Formulario de adopción</h1>


      {status === 'error' && (
        <div role="alert" className="error-alert">
Ocurrió un error al enviar. Intenta de nuevo.
        </div>
      )}


      <fieldset>
        <legend>
          <label htmlFor="fullname">Nombre completo:</label>
        </legend>
        <input
          ref={fullnameRef}
          type="text"
          id="fullname"
          value={formData.fullname}
          onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
          aria-invalid={!!errors.fullname}
          aria-describedby={errors.fullname ? 'fullname-error' : undefined}
          placeholder="Juan Cachopo"
        />
        <FieldError id="fullname-error" message={errors.fullname} />
      </fieldset>

      <fieldset>
        <legend>
          <label htmlFor="email">Correo electrónico:</label>
        </legend>
        <input
          ref={emailRef}
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          placeholder="juancachopo@gmail.com"
        />
        <FieldError id="email-error" message={errors.email} />
      </fieldset>

      <fieldset>
        <legend>
          <label htmlFor="phone">Teléfono:</label>
        </legend>
        <input
          ref={phoneRef}
          type="text"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          placeholder="985123123"
        />
        <FieldError id="phone-error" message={errors.phone} />
      </fieldset>

      <fieldset>
        <legend>
          <label htmlFor="message">Mensaje:</label>
        </legend>
        <textarea
          ref={messageRef}
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="Danos su opinión..."
        />
        <FieldError id="message-error" message={errors.message} />
      </fieldset>


      <div className="button-group">
        {/** Button Sending... / Send */}
        <Button 
          type="submit" 
          disabled={status === 'submitting'} >
          {status === 'submitting' ? 'Enviando...' : 'Enviar'}
        </Button>

        {/** Button Reset */}
        <Button
          type="reset"
          onClick={() => setFormData({ fullname: '', email: '', phone: '', message: '' })}
        >
          Reiniciar
        </Button>
      </div>
    </form>
  );
}