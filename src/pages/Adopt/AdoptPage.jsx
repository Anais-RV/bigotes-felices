import AdoptForm from '../../components/AdoptForm/AdoptForm';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { useEffect } from 'react';

export default function AdoptPage() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.title = t('Adopt', 'title') || 'Bigotes Felices';
  }, [t, lang]);

  return (
    <div className="container mx-auto px-4 py-8">
      <AdoptForm />
    </div>
  );
}
