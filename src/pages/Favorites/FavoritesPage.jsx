<<<<<<< HEAD
import Header from '../../components/Header/Header';


import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import CatCard from '../../components/CatCard/CatCard';

const FavoritesPage = () => {
  const { favorites = [] } = useFavorites() || {}; // use 'favorites' from context, safe default

  return (
    <>
      <Header />
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
=======
import { Link, useNavigate } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import CatCard from '../../components/CatCard/CatCard';
import Button from '../../components/Button/Button';
import './FavoritesPage.css';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { useEffect } from 'react';

export default function FavoritesPage() {
  const { t, lang } = useLanguage();
  const { favorites = [] } = useFavorites() || {};
  const navigate = useNavigate();

  // Título dinámico correcto
  useEffect(() => {
    document.title = t('Favorites', 'title') || 'Bigotes Felices';
  }, [t, lang]);

  const handleAdopt = (catId) => {
    navigate('/adopt', { state: { catId } });
  };

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
}
>>>>>>> origin/dev
