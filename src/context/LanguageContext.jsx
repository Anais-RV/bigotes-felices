import { createContext } from "react";
import translations from "../translations/index.js";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const [lang, setLang] = useState("es");
  const translate = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};