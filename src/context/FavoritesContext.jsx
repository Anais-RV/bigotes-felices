
import React, { createContext, useReducer, useCallback, useEffect, useMemo } from 'react';

const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

// Reducer robusto
const favoritesReducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      const item = action.payload;
      const id = String(item.id);
      if (state.favorites.some(f => String(f.id) === id)) return state;
      return { ...state, favorites: [...state.favorites, { ...item, id }] };
    }
    case REMOVE_FAVORITE: {
      const idToRemove = action.payload && typeof action.payload === 'object'
        ? String(action.payload.id)
        : String(action.payload);
      return { ...state, favorites: state.favorites.filter(f => String(f.id) !== idToRemove) };
    }
    default:
      return state;
  }
};

// Inicializador desde localStorage
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
  } catch {
    return { favorites: [] };
  }
};

const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, undefined, initializer);

  const addFavorite = useCallback((cat) => {
    if (!cat || typeof cat.id === 'undefined') return;
    dispatch({ type: ADD_FAVORITE, payload: { ...cat, id: String(cat.id) } });
  }, []);

  const removeFavorite = useCallback((idOrObj) => {
    const id = idOrObj && typeof idOrObj === 'object' ? idOrObj.id : idOrObj;
    if (typeof id === 'undefined') return;
    dispatch({ type: REMOVE_FAVORITE, payload: String(id) });
  }, []);

  const isFavorite = useCallback((id) => {
    if (typeof id === 'undefined') return false;
    return state.favorites.some(f => String(f.id) === String(id));
  }, [state.favorites]);

  // Persistencia en localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  }, [state.favorites]);

  const value = useMemo(() => ({
    favorites: state.favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  }), [state.favorites, addFavorite, removeFavorite, isFavorite]);

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
