import './CatCard.css';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { useState } from 'react';

export default function CatCard({ className, name, age, imgUrl, description, catId, showDescriptionButtons = false }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = (e) => {
    e.stopPropagation(); 
    setFlipped((prev) => !prev);
  };

  return (
    <div className={`card-container ${flipped ? 'flipped' : ''}`}>
      <div className="card-inner">
        
        <div className="card-front">
          <p className="card-header">{name}/{age}</p>
          <div className="card-photo">
            <img src={imgUrl} alt={name} className="cat-image" />
          </div>

          <div className="cat-actions">
            <FavoriteButton className={className} catId={catId} />
          </div>

          {showDescriptionButtons && (
            <button className="flip-button" onClick={handleFlip}>
            Ver descripción
            </button>
          )}
        </div>

        <div className="card-back">
          <div className="description">{description}</div>
          <button className="flip-button" onClick={handleFlip}>
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
