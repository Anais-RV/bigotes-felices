import { Link, useNavigate } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import CatCard from '../../components/CatCard/CatCard';
import Button from '../../components/Button/Button';
import { useLanguage } from '../../context/LanguageContext';
import { useEffect } from 'react';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites = [] } = useFavorites() || {};
  const navigate = useNavigate();
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.title = t('Favorites', 'title') || 'Bigotes Felices';
  }, [t, lang]);

  const handleAdopt = (catId) => {
    navigate('/adopt', { state: { catId } });
  };

  return (
    <main className="favorites-page">
      {/* Botón Volver al Inicio */}
      <div className="favorites-page__header">
        <Link to="/">
          <Button ariaLabel={t('Favorites', 'back_button_aria')}>
            ← {t('Favorites', 'back_button')}
          </Button>
        </Link>
      </div>

      <h1 className="favorites-page__title">{t('Favorites', 'heading')}</h1>

      <section className="favorites-page__section">
        {favorites.length === 0 ? (
          <div className="empty-favorites">
            <h2>{t('Favorites', 'empty_title')}</h2>
            <p>{t('Favorites', 'empty_message')}</p>
            <Link to="/adopt">
              <Button>{t('Favorites', 'adopt_button')}</Button>
            </Link>
          </div>
        ) : (
          favorites.map((cat) => {
            const id = cat.id || cat.catId; // compatibilidad
            const name = cat.name || 'Gato sin nombre';
            const img = cat.image || cat.imgUrl || '';
            const description = cat.description || cat.desc || 'Sin descripción';
            const age = cat.age || 'Edad desconocida';

            return (
              <div key={id} className="favorites-page__card-wrapper">
                <CatCard
                  catId={id}
                  name={name}
                  age={age}
                  imgUrl={img}
                  description={description}
                  showDescriptionButtons={true}
                />

                <Button
                  onClick={() => handleAdopt(id)}
                  className="favorites-page__adopt-button"
                  ariaLabel={`${t('Favorites', 'adopt_cat')} ${name}`}
                >
                  {t('Favorites', 'adopt_cat')} {name}
                </Button>
              </div>
            );
          })
        )}
      </section>
    </main>
  );
};

export default FavoritesPage;
