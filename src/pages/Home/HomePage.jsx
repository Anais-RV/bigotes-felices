import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../Slider/Slider';
import CatCard from '../../components/CatCard/CatCard';
import './HomePage.css';
//importamos catService 
import { readAllCats } from '../../service/catService';
import { useLanguage } from '../../context/LanguageContext.jsx';

<<<<<<< HEAD
const HomePage = () => {

  //Cambios en las variables
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cats, setCats] = useState([]);
=======
export default function HomePage() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t, lang } = useLanguage();  // ← nada de setPage
>>>>>>> origin/dev

  // Título dinámico correcto
  useEffect(() => {
    document.title = t('Home', 'title') || 'Bigotes Felices';
  }, [t, lang]);

  // Carga de gatos (y fijamos una edad UI estable)
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
<<<<<<< HEAD

        //Delay en red (tiempo de espera 1.5 segundos)
        await new Promise(resolve => setTimeout(resolve, 1500));

        const catsData = await readAllCats(10); // Cargar 10 gatos
        setCats(catsData);
        setLoading(false);
        setError(null);

      } catch (error) {
        console.error('Error fetching cats:', error);
        setLoading(false);
        setError('Error en pantalla de carga.');
=======
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
>>>>>>> origin/dev
      }
    })();
    return () => { mounted = false; };
  }, []);

  const currentCat = cats[0];

  //Estado de carga
  if(loading) {
    return(
      <div className="loading">
        <h2>Cargando...</h2>
        <p>Por favor, espere un momento</p>
      </div>
    );
  }

  //Estado de error
  if(error) {
    return(
      <div className='error'>
        <h2>Error</h2>
        <p>Algo salió mal</p>
      </div>
    );
  }

  //Estado exitoso
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
            showDescriptionButtons={false}
          />
        ) : (
          <div>No hay gatos disponibles</div>
        )
      }
    />
  );
<<<<<<< HEAD

};

export default HomePage;
=======
}
>>>>>>> origin/dev
