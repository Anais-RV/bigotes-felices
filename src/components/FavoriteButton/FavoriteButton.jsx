import Heart from "../../icons/Heart";
import HeartWhite from"../../icons/HeartWhite";
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
     {isFav ? <Heart filled={isFav}/>:<HeartWhite filled={!isFav} />
    
   }




    </button>
  )
}

export default FavoriteButton
