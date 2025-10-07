import Heart from '../../icons/Heart';
import HeartOutline from '../../icons/HeartOutline';
import { useState } from 'react';
import Button from '../Button/Button';

const FavoriteButton = () => { 
  const [isFav, setIsFav] = useState(false);
  
  {/** Button Heart */}

  return (
    
    <Button 
      className="heart" 
      onClick={() => setIsFav(!isFav)}
      ariaPressed={isFav}
      ariaLabel={isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}>
      {isFav ? <Heart /> : <HeartOutline />}
      Pepe
    </Button>
    
  );
};

export default FavoriteButton;
