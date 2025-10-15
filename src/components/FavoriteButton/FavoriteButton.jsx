import React, { useState, useEffect, useCallback } from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import HeartWhite from '../../icons/HeartWhite';
import HeartOutline from '../../icons/HeartOutline';
import Button from '../Button';
import './FavoriteButton.css';

export default function FavoriteButton({ cat, catId, catName, catImage, catMeta, ...rest }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  // Resolver props/objeto cat
  const id = cat ? cat.id : catId;
  const name = cat ? cat.name : catName;
  const image = cat ? cat.image : catImage;
  const meta = cat ? { ...cat } : (catMeta || {});
  const nid = typeof id !== 'undefined' ? String(id) : undefined;

  // Estado sincronizado con contexto
  const [favorite, setFavorite] = useState(() => isFavorite(nid));

  useEffect(() => {
    const val = isFavorite(nid);
    console.debug(`[FavoriteButton:${nid}] isFavorite ->`, val);
    setFavorite(val);
  }, [nid, isFavorite]);

  // item completo que guardaremos
  const favoriteItem = { id: nid, name, image, ...meta };

  const handleToggle = useCallback((e) => {
    e && e.preventDefault && e.preventDefault();
    console.debug(`[FavoriteButton:${nid}] handleToggle - current local fav:`, favorite);
    setFavorite(prev => {
      const nuevo = !prev;
      if (nuevo) {
        console.debug(`[FavoriteButton:${nid}] adding`, favoriteItem);
        addFavorite(favoriteItem);
      } else {
        console.debug(`[FavoriteButton:${nid}] removing id:`, nid);
        removeFavorite(nid);
      }
      return nuevo;
    });
  }, [nid, addFavorite, removeFavorite, favoriteItem, favorite]);

  const classes = `favorite-button${favorite ? ' favorite-button--active' : ''}`;

  return (
    <Button
      className={classes}
      aria-pressed={!!favorite}
      aria-label={favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
      onClick={handleToggle}
      {...rest}
    >
      {favorite ? (
        <HeartWhite size={20} color="#4f6b2a" />
      ) : (
        <HeartOutline size={20} color="#8CA66E" />
      )}
    </Button>
  );
}
