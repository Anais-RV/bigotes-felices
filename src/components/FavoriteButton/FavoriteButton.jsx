import HeartOutline from "../../icons/HeartWhite";
import HeartWhite from"../../icons/HeartOutline";
import { useState } from "react";
import style from "./FavoriteButton.module.css"
import React from 'react'
const FavoriteButton = () => { 
    const [isFav, setIsFav] = useState(false);
  return (
    <button
        className={style.favoriteButton}
        onClick={()=> setIsFav(!isFav)}
        aria-pressed={isFav}
        aria-label={isFav ? "Quitar de favoritos" : "Añadir a favoritos"}
       title={ "Añadir a favoritos" }>

        
     {isFav ? <Heart />:<HeartWhite  />
     } 
    



    </button>
  )
}
export default FavoriteButton