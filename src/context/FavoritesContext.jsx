import React, { createContext, useContext, useCallback, useEffect, useMemo } from 'react';


const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

 
const favoritesReducer = (state, action) => {
  console.debug('[favoritesReducer] action:', action);
  switch (action.type) {
    case ADD_FAVORITE: {
      const item = action.payload;
      const id = String(item.id);
      if (state.favorites.some(f => String(f.id) === id)) return state;
      return { ...state, favorites: [...state.favorites, { ...item, id }] };
    }
    case REMOVE_FAVORITE: {
      const payload = action.payload;
      const idToRemove = payload && typeof payload === 'object' ? String(payload.id) : String(payload);
      return { ...state, favorites: state.favorites.filter(item => String(item.id) !== idToRemove) };
    }
    default:
      return state;
  }
};

// Loading data from localStorage
const initializer = () => {
  try {
    const raw = localStorage.getItem('favorites');
    if (!raw) return { favorites: [] };
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return { favorites: [] };
    const map = new Map();
    parsed.forEach(item => {
      if (!item || typeof item.id === 'undefined') return;
      map.set(String(item.id), { ...item, id: String(item.id) });
    });
    return { favorites: Array.from(map.values()) };
  } catch (err) {
    console.warn('Favorites: init parse error', err);
    return { favorites: [] };
  }
};

const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(favoritesReducer, undefined, initializer);


  const addFavorite = useCallback((item) => {
    if (!item || typeof item.id === 'undefined') {
      console.warn('[Favorites] addFavorite: item no válido', item);
      return;
    }
    dispatch({ type: ADD_FAVORITE, payload: { ...item, id: String(item.id) } });
  }, []);

  const removeFavorite = useCallback((idOrObj) => {
    const id = idOrObj && typeof idOrObj === 'object' ? idOrObj.id : idOrObj;
    if (typeof id === 'undefined') {
      console.warn('[Favorites] removeFavorite: id no válido', idOrObj);
      return;
    }
    dispatch({ type: REMOVE_FAVORITE, payload: String(id) });
  }, []);

  const isFavorite = useCallback((id) => {
    if (typeof id === 'undefined') return false;
    const nid = String(id);
    return state.favorites.some(item => String(item.id) === nid);
  }, [state.favorites]);

  // Sincronizar localStorage 
  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
      console.debug('[Favorites] localStorage updated:', state.favorites);
    } catch (err) {
      console.warn('[Favorites] localStorage set error', err);
    }
  }, [state.favorites]);

  const value = useMemo(() => ({
    favorites: state.favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  }), [state.favorites, addFavorite, removeFavorite, isFavorite]);

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};


// eslint-disable-next-line react-refresh/only-export-components
export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites debe usarse dentro de FavoritesProvider');
  return ctx;
};

export default FavoritesContext;
