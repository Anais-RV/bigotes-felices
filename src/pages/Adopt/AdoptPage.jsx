import HeaderSimple from '../../components/Header/HeaderSimple';
import AdoptForm from '../../components/AdoptForm/AdoptForm';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { useEffect } from 'react';
import './AdoptPage.css';

export default function AdoptPage() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.title = t('Adopt', 'title') || 'Bigotes Felices';
  }, [t, lang]);

  return (
    <>
      <HeaderSimple />
      <div className="adopt-page-container">
        <AdoptForm />
      </div>
    </>
  );
}
