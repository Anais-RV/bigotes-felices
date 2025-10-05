// NextButton.jsx
import React from 'react';

export default function NextButton({ next }) {
  return (
    <button onClick={next} aria-label="Siguiente">
            →
    </button>
  );
}