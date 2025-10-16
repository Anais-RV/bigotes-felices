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
            <div key={cat.id} className="favorites-page__card-wrapper">
              <CatCard
                name={cat.name}
                age={cat.age}
                imgUrl={cat.imgUrl || cat.image}
                description={cat.description}
                catId={cat.id}
                showDescriptionButtons={true}
                showHomeButton={true}
              />
              <Button
                onClick={() => handleAdopt(cat.id)}
                className="favorites-page__adopt-button"
                ariaLabel={`${t('Favorites', 'ctaAdopt')} ${cat.name}`}
              >
                {t('Favorites', 'ctaAdopt')} {cat.name}
              </Button>
            </div>
          ))
        )}
      </section>
    </main>
  );
}
