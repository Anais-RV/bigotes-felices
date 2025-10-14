import { createContext, useContext, useState, useEffect } from "react";
import translations from "../translations/index.js";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  
  const [lang, setLang] = useState("en");
  const [page, setPage] = useState("Home");
  
  const t = (key) => {
    return translations[lang]?.[page]?.[key] ?? `[${key}]`;
  }

  useEffect(() => {
    const title = t("title") || "Bigotes Felices";
    document.title = title;
  }, [lang, page]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, page, setPage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);