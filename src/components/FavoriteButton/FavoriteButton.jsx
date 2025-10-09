import HeartWhite from"../../icons/HeartWhite";
import HeartOutline from "../../icons/HeartOutline";
import { useState } from "react";
import style from "./FavoriteButton.module.css"

const FavoriteButton = () => { 
    const [isFav, setIsFav] = useState(false);
  return (
    <button
        className={style.favoriteButton}
        onClick={()=> setIsFav(!isFav)}
        aria-pressed={isFav}
        aria-label={isFav ? "Quitar de favoritos" : "Añadir a favoritos"}
       title={ "Añadir a favoritos" }>

        
     {isFav ? <HeartWhite color="#65b45e" />: <HeartOutline />
     } 
    



    </button>
  )
}
export default FavoriteButton