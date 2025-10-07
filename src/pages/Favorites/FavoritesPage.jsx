import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import CatCard from '../../components/CatCard/CatCard';

const FavoritesPage = () => {
  const { favorites = [] } = useFavorites() || {}; // use 'favorites' from context, safe default

  return (
    <>
      <main>
        <p>Favorites Page</p>
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