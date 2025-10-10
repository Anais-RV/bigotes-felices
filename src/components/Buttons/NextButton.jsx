// NextButton.jsx
import React from 'react';
import styles from './Buttons.module.css';

export default function NextButton({ next }) {
    return (
        <button
            className={styles['slider-controls-button']}
            onClick={next}
            aria-label="Siguiente">
            →
        </button>
    );
}