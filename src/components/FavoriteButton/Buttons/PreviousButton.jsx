// PreviousButton.jsx
import React from 'react';
import Button from '../../Button/Button';

export default function PreviousButton({ prev }) {

  {/** Button Previous */}

  return (
    
    <Button onClick={prev} aria-label="Anterior">
       ←
    </Button>
    
  );
}