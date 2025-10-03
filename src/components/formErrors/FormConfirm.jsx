import React from 'react';


export default function FormConfirm({ onReset }) {
return (
<div role="alert" className="p-4 bg-green-100 rounded-md">
<p className="text-green-800 font-medium">¡Formulario enviado con éxito!</p>
<button
onClick={onReset}
className="mt-2 px-3 py-1 bg-green-600 text-white rounded"
>
Enviar otro
</button>
</div>
);
}