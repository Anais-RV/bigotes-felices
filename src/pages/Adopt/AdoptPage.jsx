import Header from '../../components/Header/Header';
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
<<<<<<< HEAD
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <AdoptForm />
      </div>
    </>
=======
    <div className="adopt-page-container">
      <AdoptForm />
    </div>
>>>>>>> origin/dev
  );
}
