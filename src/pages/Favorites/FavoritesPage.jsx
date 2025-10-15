import { Link, useNavigate } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import CatCard from '../../components/CatCard/CatCard';
import Button from '../../components/Button/Button';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites = [] } = useFavorites() || {};
  const navigate = useNavigate();

  const handleAdopt = (catId) => {
    navigate('/adopt', { state: { catId } });
  };

  return (
    <main className="favorites-page">
      {/* Botón Volver al Inicio */}
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
                />

                <Button
                  onClick={() => handleAdopt(id)}
                  className="favorites-page__adopt-button"
                  ariaLabel={`Adoptar a ${name}`}
                >
                  Adoptar a {name}
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
