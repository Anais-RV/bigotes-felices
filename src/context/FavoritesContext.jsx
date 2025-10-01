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
            //Condicional para evitar duplicados
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

//Iniciamos la función Provider
//children: son los componentes hijos que estarán dentro del Provider
export const FavoritesProvider = ({children}) => {
    //Iniciamos el hook useReducer
    //state: estado actual (array vacío de favoritos)
    //dispatch: función para enviar acciones al reducer
    const [state, dispatch] = useReducer(favoritesReducer, inicial);

    //Iniciamos la función auxiliar 'addFavorite' que se encarga de agregar favoritos
    //Dentro de ello llamamos a la función dispatch para que envíe la acción al reducer
    //type: el tipo de acción (en este caso, ADD_FAVORITE)
    //payload: los datos (el item a agregar) 
    const addFavorite = (item) => {
        dispatch({type: ADD_FAVORITE, payload: item});
    }

    //Iniciamos la función auxiliar 'removeFavorite' que se encarga de eliminar favoritos
    //Hace lo mismo que addFavorite, pero en vez de agregar elimina favoritos
    const removeFavorite = (item) => {
        dispatch({type: REMOVE_FAVORITE, payload: item});
    }

    //Iniciamos la función auxiliar 'isFavorite' que verifica si un item está en favoritos
    //some: devuelve true si encuentra al menos un elemento que cumpla la condición
    //Compara el id recibido con los id de los items en state.favorites
    //Devuelve true si exite, false si no existe
    const isFavorite = (id) => {
        return state.favorites.some(item => item.id === id);
    }

    //Creamos un objeto con todo lo que queremos compartir con los componentes
    const value = {
        favorites: state.favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }

    //Renderizamos el Provider del contexto
    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites debe ser usado dentro de FavoritesProvider');
  }
  return context;
};

export default FavoritesContext;