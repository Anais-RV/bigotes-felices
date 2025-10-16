import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './AdoptForm.css';
import Button from '../Button/Button';
import { useLanguage } from '../../context/LanguageContext.jsx';

// Declaramos funcion AdoptForm con el prop onSubmit
const AdoptForm = ({onSubmit}) => {
  const { t } = useLanguage();

  //Estado local por campo
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  //funcion handleSubmit para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { fullname, email, phone, message };

    //Si se pasó onSubmit como prop, lo ejecuta
    if (onSubmit) {
      onSubmit(formData);
    }

    console.log('Datos enviados: ', formData);
  };

  //funcion handleReset para vacias los campos del formulario
  const handleReset = () => {
    setFullname('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{t('AdoptForm', 'heading')}</h1>
      <fieldset>
        <legend>
          <label htmlFor="fullname">{t('AdoptForm', 'fullname')}</label>
        </legend>
        <input
          type="text"
          id="fullname"
          className="fullname"
          value={fullname}
          onChange={e => setFullname(e.target.value)}
          placeholder={t('AdoptForm', 'fullnamePlaceholder')}
          required
        />
      </fieldset>
      <fieldset>
        <legend>
          <label htmlFor="email">{t('AdoptForm', 'email')}</label>
        </legend>
        <input
          type="email"
          id="email"
          className="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder={t('AdoptForm', 'emailPlaceholder')}
          required
        />
      </fieldset>
      <fieldset>
        <legend>
          <label htmlFor="phone">{t('AdoptForm', 'phone')}</label>
        </legend>
        <input
          type="text"
          id="phone"
          className="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder={t('AdoptForm', 'phonePlaceholder')}
        />
      </fieldset>
      <fieldset>
        <legend>
          <label htmlFor="message">{t('AdoptForm', 'message')}</label>
        </legend>
        <textarea
          id="message"
          className="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder={t('AdoptForm', 'messagePlaceholder')}
        ></textarea>
      </fieldset>
      <div className="button-group">
        {/** Boton Enviar */}
        <Button type="submit" id="submit" className="submit">
          {t('AdoptForm', 'submit')}
        </Button>
        {/** Boton Reiniciar */}
        <Button
          type="button"
          onClick={handleReset}
          className="submit"
          id="reset"
          name="reset"
        >
          {t('AdoptForm', 'reset')}
        </Button>
        {/** Boton Home */}
        <Button type="button" id="homeButton" className="submit">
          <NavLink to="/">{t('AdoptForm', 'home')}</NavLink>
        </Button>
      </div>
    </form>
  );
};

export default AdoptForm;