import React, { createContext, useState, useContext } from 'react';
import translations from '.translations/index.js'
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(  'es');


const translate = (key) => translations[language][page][key] || key;
return (
    <LanguageContext.Provider value = {{ language, setLanguage, translate}} >
        {children}
        </LanguageContext.Provider>

    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
if (!context) {
throw new Error('uselang not used in a langprovider');
}
return context;
};