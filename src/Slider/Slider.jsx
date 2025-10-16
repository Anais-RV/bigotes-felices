import React, { useState } from 'react';
import PreviousButton from '../components/Buttons/PreviousButton';
import NextButton from '../components/Buttons/NextButton';
import './Slider.css';

export default function Slider({ cats = [], onSelectCat }) {
  const [index, setIndex] = useState(0);

  if (cats.length === 0) {
    return (
      <div className="slider">
        <h2>Slider de gatos</h2>
        <p>No hay gatos disponibles.</p>
      </div>
    );
  }

  const next = () => {
    setIndex((prev) => (prev + 1) % cats.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + cats.length) % cats.length);
  };

  const handleImageClick = () => {
    if (onSelectCat) onSelectCat(index);
  };

  return (
    <div className="slider">
      <div className="slider-window" onClick={handleImageClick}>
        <img 
          src={cats[index].url} 
          alt={`Gato ${index + 1}`} 
          className="slider-image" 
          draggable="false" 
        />
      </div>
      <div className="slider-controls">
        <PreviousButton prev={prev} />
        <NextButton next={next} />
      </div>
    </div>
  );
}
