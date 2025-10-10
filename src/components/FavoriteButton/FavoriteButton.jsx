import { useState } from 'react';
import HeartWhite from '../../icons/HeartWhite';
import HeartOutline from '../../icons/HeartOutline';
import Button from '../Button';
import './FavoriteButton.css';

export default function FavoriteButton({ catId }) {
  // TODO: catId será usado con FavoritesContext en futuro PR
  const [favorite, setFavorite] = useState(false);
  const classes = `favorite-button${favorite ? ' favorite-button--active' : ''}`;

  return (
    <Button
      className={classes}
      aria-pressed={favorite}
      aria-label={favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
      onClick={() => setFavorite(v => !v)}
    >
      {favorite ? <HeartWhite /> : <HeartOutline />}
    </Button>
  );
}