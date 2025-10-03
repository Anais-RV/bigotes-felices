// PreviousButton.jsx
import React from 'react';

export default function PreviousButton({ prev }) {
    return (
        <button onClick={prev} aria-label="Anterior">
            ←
        </button>
    );
}