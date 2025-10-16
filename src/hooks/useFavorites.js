import { useContext } from 'react';
import FavoritesContext from '../context/FavoritesContext';

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites debe ser usado dentro de FavoritesProvider');
  }
  return context;
};

export default useFavorites;