import React, { useState } from 'react';

const images = [
  'https://placekitten.com/1200/700',
  'https://placekitten.com/1201/700',
  'https://placekitten.com/1202/700'
];


export default function Slider() {
    const [index, setIndex] = useState(0);

    const next = () => {
    setIndex((index + 1) % images.length);
    };

    const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
    };

return (
    <div className="slider">
      <h2>Slider de gatos</h2>
        <div className="slider-window">
            <img src={images[index]} alt={`Gato ${index + 1}`} className="slider-image" />
        </div>
        <div className="slider-controls">
            <button onClick={prev}>←</button>
            <button onClick={next}>→</button>
        </div>
    </div>
  );
}