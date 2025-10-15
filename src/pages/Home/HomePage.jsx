import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../Slider/Slider';
import CatCard from '../../components/CatCard/CatCard';
import { readAllCats } from '../../service/catService';
import { useLanguage } from '../../context/LanguageContext.jsx';

export default function HomePage() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t, lang } = useLanguage();  // ← nada de setPage

  // Título dinámico correcto
  useEffect(() => {
    document.title = t('Home', 'title') || 'Bigotes Felices';
  }, [t, lang]);

  // Carga de gatos (y fijamos una edad UI estable)
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const catsData = await readAllCats(10);
        if (!mounted) return;
        const withUiAge = catsData.map(c => ({
          ...c,
          uiAge: Math.floor(Math.random() * 10) + 1
        }));
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

  return (
    <Header
      slider={<Slider />}
      catCard={
        loading ? (
          <div>Cargando gatos...</div>
        ) : currentCat ? (
          <CatCard
            name={currentCat.breeds?.[0]?.name || 'Gato Misterioso'}
            age={currentCat.uiAge}
            imgUrl={currentCat.url}
            description={currentCat.breeds?.[0]?.description || 'Un gato adorable esperando un hogar lleno de amor.'}
            catId={currentCat.id}
          />
        ) : (
          <div>No hay gatos disponibles</div>
        )
      }
    />
  );
}
