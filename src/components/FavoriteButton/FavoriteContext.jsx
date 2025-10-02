import React from "react";
import { useFavorites } from "./FavoriteContext";



const Item = ({ item }) => {
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const toggleFavorite = () => {
        if (isFavorite(item.id)) removeFavorite(item.id);
        else addFavorite(item);
    };

    return (
        <div>
            <h3>{item.name}</h3>
            <button onClick={toggleFavorite}>
                {isFavorite(item.id) ? "💔 Eliminar" : "❤️ Añadir"}
            </button>
        </div>
    );
};