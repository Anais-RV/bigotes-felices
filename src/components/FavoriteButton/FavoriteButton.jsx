import Heart from "../../icons/Heart";
import { useState } from "react";

import React from 'react'

const FavoriteButton = () => { 
    const [isFav, setIsfav] = useState(false);
  return (
    <button
        className="favorite-button"
        onClick={()=> setIsfav(!isFav)}
        aria-pressed={isFav}
        aria-label={isFav ? "Quitar de favoritos": "Añadir a favoritos"}
        >
        {isFav ? ()}



    </button>
  )
}

export default FavoriteButton
