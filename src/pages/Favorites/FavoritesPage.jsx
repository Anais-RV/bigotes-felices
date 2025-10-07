import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import CatCard from '../../components/CatCard/CatCard';

const FavoritesPage = () => {
  const { favoriteCats } = useFavorites();

  return (
    <>
      <main>
        <section className="main__section--fav-cards">
          {favoriteCats.length === 0 ? (
            <div className="empty-favorites">
              <h2>No tienes favoritos</h2>
              <p>¡Explora nuestros gatitos y añade algunos a tus favoritos!</p>
            </div>
          ) : (
            favoriteCats.map((cat) => (
              <CatCard key={cat.id} cat={cat} />
            ))
          )}
        </section>
        <div className="div__btn--styling">
          <button className="btn__btn--state-adopt-all">Adoptar</button>
          <Link to="/">
            <button className="btn__btn--state-home-link">Home</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default FavoritesPage;