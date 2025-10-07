import React from 'react';
import { useFavorites } from './../../context/FavoritesContext';

const FavoritesPage = () => {
  const { favorites, removeFavorite, isFavorite } = useFavorites();

  if (favorites.length === 0) {
    return <p>No tienes favoritos todavía...</p>;
  }

  return (
    <div>
      <h1>🔥 Tus Favoritos 🔥</h1>

      <ul >
        {favorites.map((item) => (
          <li key={item.id}>
            <div>
              <h2>{item.title}</h2>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                />
              )}
              <p>
                ID: {item.id}
              </p>
            </div>

            <button onClick={() => removeFavorite(item)}>
              ❌ Quitar de Favoritos
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;