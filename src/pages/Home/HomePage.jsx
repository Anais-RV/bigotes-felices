// src/pages/home/HomePage.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../Slider/Slider';
import CatCard from '../../components/CatCard/CatCard';
import translations from '../../translations';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const defaultLang = 'es';

  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem('lang');
    return stored && translations[stored] ? stored : defaultLang;
  });

  const [dictionary, setDictionary] = useState(translations[language]);

  useEffect(() => {
    localStorage.setItem('lang', language);
    setDictionary(translations[language]);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
};

const HomeContent = () => {
  const { dictionary, language, setLanguage } = useContext(LanguageContext);

  return (
    <>
      <Header
        slider={<Slider />}
        catCard={<CatCard />}
        title={dictionary.Home.welcome}
        description={dictionary.Home.description}
        navLabels={{
          home: dictionary.Home.title,
          favorites: dictionary.Favorites.title,
          adopt: dictionary.Adopt.title
        }}
      />

      {/* Selector de idioma debajo del header */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        >
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="br">Português</option>
          <option value="de">Deutsch</option>
          <option value="ru">Русский</option>
        </select>
      </div>
    </>
  );
};

const HomePage = () => (
  <LanguageProvider>
    <HomeContent />
  </LanguageProvider>
);

export default HomePage;