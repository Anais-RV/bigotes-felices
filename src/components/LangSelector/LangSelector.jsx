import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.jsx";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "ru", label: "Русский" },
  { code: "br", label: "Português" }
];

const LanguageSelector = () => {

  const { lang, setLang } = useContext(LanguageContext);

  return (
    <select value={lang} onChange={e => setLang(e.target.value)}>
      {languages.map(l => (
        <option key={l.code} value={l.code}>{l.label}</option>
      ))}
    </select>
  );
};

export default LanguageSelector;