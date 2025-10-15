import './CatCard.css';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { useState } from 'react';

export default function CatCard({ className, name, age, imgUrl, description, catId, breed, location, color }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = (e) => {
    e.stopPropagation();
    setFlipped(prev => !prev);
  };

  const cat = {
    id: catId !== undefined ? String(catId) : undefined,
    name: name || 'Gato sin nombre',
    age: age || 'Desconocida',
    image: imgUrl || '',
    description: description || '',
    breed: breed || '',
    location: location || '',
    color: color || '',
  };

  return (
    <div className={`card-container ${flipped ? 'flipped' : ''}`}>
      <div className="card-inner">
        <div className="card-front">
          <p className="card-header">{cat.name} / {cat.age}</p>
          <div className="card-photo">
            <img src={cat.image} alt={cat.name} className="cat-image" />
          </div>

          <div className="cat-actions">
            <FavoriteButton className={className} cat={cat} />
          </div>

          <button className="flip-button" onClick={handleFlip}>Ver descripción</button>
        </div>

        <div className="card-back">
          <div className="description">{cat.description}</div>
          <button className="flip-button" onClick={handleFlip}>Volver</button>
        </div>
      </div>
    </div>
  );
}
