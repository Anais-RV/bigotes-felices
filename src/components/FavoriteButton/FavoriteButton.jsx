import React, { useState, useEffect, useCallback } from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import HeartWhite from '../../icons/HeartWhite';
import HeartOutline from '../../icons/HeartOutline';
import Button from '../Button';
import './FavoriteButton.css';

export default function FavoriteButton({ cat, className }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const [favorite, setFavorite] = useState(() => (cat?.id ? isFavorite(cat.id) : false));

  useEffect(() => {
    if (!cat?.id) {
      setFavorite(false);
      return;
    }
    setFavorite(isFavorite(cat.id));
  }, [cat, isFavorite]);

  const handleToggle = useCallback((e) => {
    if (e?.stopPropagation) e.stopPropagation();
    if (!cat?.id) return;

    setFavorite(prev => {
      const nuevo = !prev;
      const catData = { ...cat, id: String(cat.id), addedAt: new Date().toISOString() };

      if (nuevo) addFavorite(catData);
      else removeFavorite(cat.id);

      return nuevo;
    });
  }, [cat, addFavorite, removeFavorite]);

  const classes = `favorite-button${favorite ? ' favorite-button--active' : ''} ${className || ''}`;

  return (
    <Button
      className={classes}
      aria-pressed={!!favorite}
      aria-label={favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
      onClick={handleToggle}
    >
      {favorite ? <HeartWhite size={20} color="#4f6b2a" /> : <HeartOutline size={20} color="#8CA66E" />}
    </Button>
  );
}
