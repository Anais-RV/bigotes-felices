import Header from '../../components/Header/Header';
import AdoptForm from '../../components/AdoptForm/AdoptForm';

const AdoptPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <AdoptForm />
      </div>
    </>
  );
};

export default AdoptPage;
