import Header from '../../components/Header/Header';
import AdoptForm from '../../components/AdoptForm/AdoptForm';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { useEffect, useState } from 'react';
import Slider from '../../Slider/Slider';
import CatCard from '../../components/CatCard/CatCard';
import { readAllCats } from '../../service/catService';
import './AdoptPage.css';

export default function AdoptPage() {
  const { t, lang } = useLanguage();
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const catsData = await readAllCats(1);
        if (!mounted) return;
        const withUiAge = catsData.map(c => ({ ...c, uiAge: Math.floor(Math.random() * 10) + 1 }));
        setCats(withUiAge);
      } catch (error) {
        console.error('Error fetching cats:', error);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const currentCat = cats[0];

  useEffect(() => {
    document.title = t('Adopt', 'title') || 'Bigotes Felices';
  }, [t, lang]);

  const catCard = loading ? (
    <div>Cargando gatos...</div>
  ) : currentCat ? (
    <CatCard
      name={currentCat.breeds?.[0]?.name || 'Gato Misterioso'}
      age={currentCat.uiAge}
      imgUrl={currentCat.url}
      description={currentCat.breeds?.[0]?.description || 'Un gato adorable esperando un hogar lleno de amor.'}
      catId={currentCat.id}
      showDescriptionButtons={false}
    />
  ) : (
    <div>No hay gatos disponibles</div>
  );

  return (
    <>
      <Header slider={<Slider />} catCard={catCard} showHomeButton />
      <AdoptForm />
    </>
  );
}
