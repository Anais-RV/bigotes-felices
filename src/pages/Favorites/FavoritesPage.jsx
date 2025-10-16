import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import CatCard from '../../components/CatCard/CatCard';
import Slider from '../../Slider/Slider';
import { useEffect, useState } from 'react';
import { readAllCats } from '../../service/catService';

const FavoritesPage = () => {
  const { favorites = [] } = useFavorites() || {}; // use 'favorites' from context, safe default
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
      <main>
        <h1>Favorites Page</h1>
        <section className="main__section--fav-cards">
          {favorites.length === 0 ? (
            <div className="empty-favorites">
              <h2>No tienes favoritos</h2>
              <p>¡Explora nuestros gatitos y añade algunos a tus favoritos!</p>
            </div>
          ) : (
            favorites.map((cat) => (
              <CatCard key={cat.id} cat={cat} />
            ))
          )}
        </section>
        <div className="div__btn--styling">
          <Link to="/adopt">
            <button className="btn__btn--state-adopt-all">Adoptar</button>
          </Link>
          <Link to="/">
            <button className="btn__btn--state-home-link">Home</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default FavoritesPage;
