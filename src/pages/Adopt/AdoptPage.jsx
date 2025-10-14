import AdoptForm from '../../components/AdoptForm/AdoptForm';
import { useLanguage } from "../../context/LanguageContext.jsx";
import { useEffect } from 'react';

const AdoptPage = () => {

  const { t, setPage } = useLanguage();

  useEffect(() => {
    setPage("Adopt");
  }, [setPage]);

  return (
    <div className="container mx-auto px-4 py-8">
      <AdoptForm />
    </div>
  );
};

export default AdoptPage;
