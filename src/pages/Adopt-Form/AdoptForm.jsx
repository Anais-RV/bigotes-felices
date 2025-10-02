import React, {useState} from 'react'

const AdoptForm = () => {

    //Estado local por campo
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    //funcion handleSubmit para enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados: ", {fullname, email, phone, message});
    }

    //funcion handleReset para vacias los campos del formulario
    const handleReset = () => {
        setFullname("");
        setEmail("");
        setPhone("");
        setMessage("");
    }

  return (
    <form action="#" method='post'>
        <h1>Formulario de adopción</h1>
        <fieldset>
            <legend><label for="fullname">Nombre completo:</label></legend>
            <input type='text' id='fullname' className='fullname' placeholder='Juan Cachopo' />
        </fieldset>
        <fieldset>
            <legend><label for="email">Correo electrónico: </label></legend>
            <input type='email' id='email' className="email" placeholder="juancachopo@gmail.com" />
        </fieldset>
        <fieldset>
            <legend><label for="phone">Teléfono: </label></legend>
            <input type='text' id='phone' className='phone' placeholder='985123123' />
        </fieldset>
        <fieldset>
            <legend><label for="message">Mensaje: </label></legend>
            <textarea id='message' className='message' placeholder='Danos su opinión...'></textarea>
        </fieldset>
        <button type='submit' id="submit" className="submit">
            Enviar
        </button>
        <button type='reset' id="reset" name="reset">
            Reiniciar
        </button> 
    </form>
  )
}

export default AdoptForm