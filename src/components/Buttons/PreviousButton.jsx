// PreviousButton.jsx
import React from 'react';
import styles from './Buttons.module.css';

export default function PreviousButton({ prev }) {
    return (
        <button
            className={styles['slider-controls-button']}
            onClick={prev}
            aria-label="Anterior">
            ←
        </button>
    );
}