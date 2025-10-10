import React, { useState } from 'react';
import PreviousButton from '../components/Buttons/PreviousButton';
import NextButton from '../components/Buttons/NextButton';
import styles from '../components/Buttons/Buttons.module.css';
import './Slider.css';

// Carga todo desde ../../assets/images (raíz del proyecto)
const modules = import.meta.glob('../../assets/images/*.{png,jpg,jpeg,webp,gif}', {
  eager: true,
  import: 'default'
});

const images = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url);

export default function Slider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex(i => (i + 1) % images.length);
  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);

  if (images.length === 0) {
    return (
      <div className="slider">
        <h2>Slider de gatos</h2>
        <p>No se encontraron imágenes en <code>assets/images</code></p>
      </div>
    );
  }

  return (
    <div className={styles.slider}>
      <div className={styles['slider-window']}>
        <img 
          src={images[index]} 
          alt={`Gato ${index + 1}`} 
          className={styles['slider-image']} 
          draggable="false" 
        />
      </div>
      <div className={styles['slider-controls']}>
        <PreviousButton prev={prev} />
        <NextButton next={next} />
      </div>
    </div>
  );
}
