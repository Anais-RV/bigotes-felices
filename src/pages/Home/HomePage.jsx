import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../Slider/Slider';
import CatCard from '../../components/CatCard/CatCard';
import { readAllCats } from '../../service/catService';
import { useLanguage } from '../../context/LanguageContext.jsx';
import './HomePage.css';

export default function HomePage() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCatIndex, setSelectedCatIndex] = useState(null);
  const { t, lang } = useLanguage();

  // Título dinámico correcto
  useEffect(() => {
    document.title = t('Home', 'title') || 'Bigotes Felices';
  }, [t, lang]);

  // Carga de gatos (y fijamos una edad UI estable)
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        // Delay de 1.5s para simular carga real (bueno para demo)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const catsData = await readAllCats(10);
        if (!mounted) return;
        const withUiAge = catsData.map(c => ({
          ...c,
          uiAge: Math.floor(Math.random() * 10) + 1
        }));
        setCats(withUiAge);
        setError(null);
      } catch (err) {
        console.error('Error fetching cats:', err);
        if (mounted) setError('error');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const selectedCat = selectedCatIndex !== null ? cats[selectedCatIndex] : null;

  // Estado de carga
  if (loading) {
    return (
      <div className="loading">
        <h2>{t('Loading', 'title') || 'Cargando...'}</h2>
        <p>{t('Loading', 'message') || 'Por favor, espere un momento'}</p>
      </div>
    );
  }

  // Estado de error
  if (error) {
    return (
      <div className="error">
        <h2>{t('Error', 'title') || 'Error'}</h2>
        <p>{t('Error', 'message') || 'Algo salió mal'}</p>
        <p>{t('Error', 'retry') || 'Por favor, recargue la página'}</p>
      </div>
    );
  }

  return (
    <Header
      slider={<Slider cats={cats}
        onSelectCat={setSelectedCatIndex} 
      />
      }
      catCard={
        loading ? (
          <div>Cargando gatos...</div>
        ) : selectedCat ? (
          <CatCard
            name={selectedCat.breeds?.[0]?.name || 'Gato Misterioso'}
            age={selectedCat.uiAge}
            imgUrl={selectedCat.url}
            description={selectedCat.breeds?.[0]?.description || 'Un gato adorable esperando un hogar lleno de amor.'}
            catId={selectedCat.id}
            showDescriptionButtons={false}
          />
        ) : (
          <div>Aún no has seleccionado ningún gato</div>
        )
      }
    />
  );
}
