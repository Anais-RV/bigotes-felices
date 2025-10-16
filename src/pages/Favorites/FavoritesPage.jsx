import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites';
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
    <main className="favorites-page">
      {/* Volver al inicio */}
      <div className="favorites-page__header">
        <Link to="/">
          <Button ariaLabel="Volver a la página principal">
            ← Volver al Inicio
          </Button>
        </Link>
      </div>

      <h1 className="favorites-page__title">
        {t('Favorites', 'heading') || 'Mis Favoritos'}
      </h1>

      <section className="favorites-page__section">
        {favorites.length === 0 ? (
          <div className="empty-favorites">
            <h2>{t('Favorites', 'emptyTitle') || 'No tienes favoritos'}</h2>
            <p>{t('Favorites', 'emptyText') || 'Explora nuestros gatitos y añade algunos a tus favoritos.'}</p>
            <Link to="/adopt">
              <Button ariaLabel="Ir a adoptar">
                {t('Favorites', 'ctaAdopt') || 'Adoptar'}
              </Button>
            </Link>
          </div>
        ) : (
          favorites.map((cat) => (
            <div key={cat.catId} className="favorites-page__card-wrapper">
              <CatCard
                name={cat.name}
                age={cat.age}
                imgUrl={cat.imgUrl}
                description={cat.description}
                catId={cat.catId}
                showDescriptionButtons={true}
                showHomeButton={true}
              />
              <Button
                onClick={() => handleAdopt(cat.catId)}
                className="favorites-page__adopt-button"
                ariaLabel={`Adoptar a ${cat.name}`}
              >
                {t('Favorites', 'adoptBtn') || `Adoptar a ${cat.name}`}
              </Button>
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default FavoritesPage;
