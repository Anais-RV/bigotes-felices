import React from 'react';


export default function FieldError({ id, message }) {
if (!message) return null;
return (
<p id={id} role="alert" className="text-red-600 text-sm mt-1">
{message}
</p>
);
}