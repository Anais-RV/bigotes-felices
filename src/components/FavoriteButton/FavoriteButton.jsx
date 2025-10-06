import Heart from "../../icons/Heart";
import HeartWhite from"../../icons/HeartWhite";
import { useState } from "react";
import style from "./FavoriteButton.module.css"
import React from 'react'
const FavoriteButton = () => { 
    const [isFav, setIsfav] = useState(false);
  return (
    <button
        className={style.favoriteButton}
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