import Heart from '../../icons/Heart';
import HeartOutline from '../../icons/HeartOutline';
import { useState } from 'react';

const FavoriteButton = () => { 
  const [isFav, setIsFav] = useState(false);
  
  return (
    <button
      className="heart"
      onClick={() => setIsFav(!isFav)}
      aria-pressed={isFav}
      aria-label={isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
    >
      {isFav ? <Heart /> : <HeartOutline />}
    </button>
    
  );
};

export default FavoriteButton;
