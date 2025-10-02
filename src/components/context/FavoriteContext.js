// FavoriteContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        // Cargar favoritos iniciales desde localStorage
        try {
            const stored = localStorage.getItem("favorites");
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error("Error leyendo favoritos de localStorage:", error);
            return [];
        }
    });

    // Guardar cambios en localStorage cada vez que favorites cambie
    useEffect(() => {
        try {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        } catch (error) {
            console.error("Error guardando favoritos en localStorage:", error);
        }
    }, [favorites]);

    const addFavorite = (item) => {
        setFavorites((prev) => {
            if (!prev.find((fav) => fav.id === item.id)) {
                return [...prev, item];
            }
            return prev;
        });
    };

    const removeFavorite = (id) => {
        setFavorites((prev) => prev.filter((fav) => fav.id !== id));
    };

    const isFavorite = (id) => favorites.some((fav) => fav.id === id);

    return (
        <FavoriteContext.Provider
            value={{ favorites, addFavorite, removeFavorite, isFavorite }}
        >
            {children}
        </FavoriteContext.Provider>
    );
};
