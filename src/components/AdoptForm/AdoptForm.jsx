import React, {useState} from 'react';

// Declaramos funcion AdoptForm con el prop onSubmit
const AdoptForm = ({onSubmit}) => {

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
      <h1>Formulario de adopción</h1>
      <fieldset>
        <legend><label htmlFor="fullname">Nombre completo:</label></legend>
        <input 
          type='text' 
          id='fullname' 
          className='fullname' 
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          placeholder='Juan Cachopo' 
          required />
      </fieldset>
      <fieldset>
        <legend><label htmlFor="email">Correo electrónico: </label></legend>
        <input 
          type='email' 
          id='email' 
          className="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="juancachopo@gmail.com" 
          required />
      </fieldset>
      <fieldset>
        <legend><label htmlFor="phone">Teléfono: </label></legend>
        <input 
          type='text' 
          id='phone' 
          className='phone' 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='985123123' />
      </fieldset>
      <fieldset>
        <legend><label htmlFor="message">Mensaje: </label></legend>
        <textarea 
          id='message' 
          className='message' 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Danos su opinión...'>

        </textarea>
      </fieldset>
      <button type='submit' id="submit" className="submit">
            Enviar
      </button>
      <button type='button' onClick={handleReset} id="reset" name="reset">
            Reiniciar
      </button> 
    </form>
  );
};

export default AdoptForm;