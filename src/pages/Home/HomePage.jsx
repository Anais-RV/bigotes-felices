import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../Slider/Slider';
import CatCard from '../../components/CatCard/CatCard';
import { readAllCats } from '../../service/catService';
import { useLanguage } from "../../context/LanguageContext.jsx";

const HomePage = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t, setPage } = useLanguage();

  useEffect(() => {
    setPage("Home");
  }, [setPage]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const catsData = await readAllCats(10); // Cargar 10 gatos
        setCats(catsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cats:', error);
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  const currentCat = cats[0]; // Mostrar el primer gato por ahora

  return (
    <Header 
      slider={<Slider />}
      catCard={
        loading ? (
          <div>Cargando gatos...</div>
        ) : currentCat ? (
          <CatCard 
            name={currentCat.breeds?.[0]?.name || 'Gato Misterioso'}
            age={Math.floor(Math.random() * 10) + 1} // Edad aleatoria ya que la API no proporciona edad
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
};

export default HomePage;
