import { useContext } from 'react';
import AdoptForm from '../../components/AdoptForm/AdoptForm';
import { LanguageContext } from '@/context/LanguageContext';
import { useEffect } from 'react';

const AdoptPage = () => {

  const { translating } = useContext(LanguageContext);

  useEffect(() => {
    document.title = translating.Adopt.title;
  }, [translating]);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <AdoptForm />
    </div>
  );
};

export default AdoptPage;
