import { createContext, useContext, useState } from 'react';
import translations from '../translations/index.js';

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  // Idioma por defecto: español
  const [lang, setLang] = useState('es');

  const t = (section, key) => {
    if (!section || !key) {
      console.warn('⚠️ Falta sección o clave en traducción:', { section, key });
      return '[missing-key]';
    }
    return translations?.[lang]?.[section]?.[key] ?? `[${section}.${key}]`;
  };

  const value = { lang, setLang, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
