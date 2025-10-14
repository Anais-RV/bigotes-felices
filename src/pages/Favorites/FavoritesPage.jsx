import { Link, useNavigate } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import CatCard from '../../components/CatCard/CatCard';
import Button from '../../components/Button/Button';
import './FavoritesPage.css';
import { useLanguage } from "../../context/LanguageContext.jsx";
import { useEffect } from 'react';

const FavoritesPage = () => {
  const { favorites = [] } = useFavorites() || {};
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const page = "Favorites";

  useEffect(() => {
    document.title = t(page, "title") || "Bigotes Felices";
  }, [lang]);

  const handleAdopt = (catId) => {
    // Navegar a la página de adopción con el ID del gato
    navigate('/adopt', { state: { catId } });
  };

  return (
    <main className="favorites-page">
      {/* Botón Volver al Inicio en la parte superior */}
      <div className="favorites-page__header">
        <Link to="/">
          <Button ariaLabel="Volver a la página principal">
            ← Volver al Inicio
          </Button>
        </Link>
      </div>

      <h1 className="favorites-page__title">Mis Favoritos</h1>
      
      <section className="favorites-page__section">
        {favorites.length === 0 ? (
          <div className="empty-favorites">
            <h2>No tienes favoritos</h2>
            <p>¡Explora nuestros gatitos y añade algunos a tus favoritos!</p>
            <Link to="/adopt">
              <Button>Adoptar</Button>
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
              />
              <Button 
                onClick={() => handleAdopt(cat.catId)}
                className="favorites-page__adopt-button"
                ariaLabel={`Adoptar a ${cat.name}`}
              >
                Adoptar a {cat.name}
              </Button>
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default FavoritesPage;