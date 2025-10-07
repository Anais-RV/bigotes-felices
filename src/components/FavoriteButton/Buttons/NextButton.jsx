// NextButton.jsx
import React from 'react';
import Button from '../../Button/Button';

export default function NextButton({ next }) {

  {/** Button Next */}

  return (
  
    <Button onClick={next} aria-label="Siguiente">
       →
    </Button>
    
  );
}