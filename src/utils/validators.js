const ERR = {
    name: 'Introduce un nombre válido (min. 2 letras, sin números).',
    email: 'Introduce un email válido.',
    phone: 'Introduce un teléfono válido (9–15 dígitos, opcional +).',
};

// RegEx de referencia (simple, no perfecto; suficiente para el proyecto).
const RE = {
    name: /^[A-Za-zÀ-ÿ' -]{2,}$/,           // letras, espacios, acentos, ', -
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,  // formato típico user@dominio.tld
    phone: /^\+?\d{9,15}$/,                  // + opcional y 9–15 dígitos
};

export function validateName(v) {
    const s = String(v ?? '').trim();
    const ok = RE.name.test(s);
    return { valid: ok, error: ok ? null : ERR.name };
}

export function validateEmail(v) {
    const s = String(v ?? '').trim();
    const ok = RE.email.test(s);
    return { valid: ok, error: ok ? null : ERR.email };
}

export function validatePhone(v) {
    const s = String(v ?? '').replace(/\s+/g, ''); // tolera espacios
    const ok = RE.phone.test(s);
    return { valid: ok, error: ok ? null : ERR.phone };
}

// OPCIONAL (para integración): valida 3 campos a la vez
export function validateForm({ fullName, email, phone }) {
    const fields = {
        fullName: validateName(fullName),
        email: validateEmail(email),
        phone: validatePhone(phone),
    };
    const isValid = fields.fullName.valid && fields.email.valid && fields.phone.valid;
    return { isValid, fields };
}