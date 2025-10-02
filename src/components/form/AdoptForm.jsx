import React, { useState, useRef } from 'react';
import { submitAdoption } from '../../service/adopteServices';
import FieldError from '../formErrors/FieldError';
import FormConfirm from '../formErrors/FormConfirm';


export default function AdoptForm() {
const [formData, setFormData] = useState({
fullname: "",
email: "",
phone: "",
message: "",
});


const [errors, setErrors] = useState({});
const [status, setStatus] = useState("idle");


const fullnameRef = useRef(null);
const emailRef = useRef(null);
const phoneRef = useRef(null);
const messageRef = useRef(null);


const validate = () => {
const newErrors = {};
if (!formData.fullname) newErrors.fullname = "El nombre es obligatorio";
if (!formData.email) newErrors.email = "El email es obligatorio";
if (!formData.phone) newErrors.phone = "El teléfono es obligatorio";
if (!formData.message) newErrors.message = "El mensaje es obligatorio";
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

setStatus("submitting");
try {
await submitAdoption(formData);
setStatus("success");
setFormData({ fullname: "", email: "", phone: "", message: "" });
setErrors({});
} catch {
setStatus("error");
}
};


if (status === "success") {
return <FormConfirm onReset={() => setStatus("idle")} />;
}

return (
<form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
<h1 className="text-xl font-bold">Formulario de adopción</h1>


{status === "error" && (
<div role="alert" className="p-2 bg-red-100 text-red-700 rounded">
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
aria-describedby={errors.fullname ? "fullname-error" : undefined}
className="border rounded w-full p-2"
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
aria-describedby={errors.email ? "email-error" : undefined}
className="border rounded w-full p-2"
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
aria-describedby={errors.phone ? "phone-error" : undefined}
className="border rounded w-full p-2"
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
aria-describedby={errors.message ? "message-error" : undefined}
className="border rounded w-full p-2"
placeholder="Danos su opinión..."
/>
<FieldError id="message-error" message={errors.message} />
</fieldset>


<button
type="submit"
disabled={status === "submitting"}
className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
>
{status === "submitting" ? "Enviando..." : "Enviar"}
</button>


<button
type="reset"
onClick={() => setFormData({ fullname: "", email: "", phone: "", message: "" })}
className="px-4 py-2 bg-gray-400 text-white rounded"
>
Reiniciar
</button>
</form>
);
}