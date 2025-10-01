import React, { createContext, useContext, useReducer} from "react";

//Acciones
const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

//Estado inicial con un objeto 
const inicial = {
    favorites: [],
};

//Reducer
const favoritesReducer = (state, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            //Evitar duplicados
            if (state.favorites.some(item => item.id === action.payload.id)) {
                return state;
            }

            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };

        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item => item.id !== action.payload.id),
            }
        
        default:
            return state;
    }
};

//Crear contexto
const FavoritesContext = createContext();