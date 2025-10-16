import React, { createContext, useContext, useEffect, useCallback, useMemo } from 'react';

// =============================
// ACCIONES DEL REDUCER
// =============================
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

// =============================
// REDUCER
// =============================
// Reducer robusto: maneja las acciones de agregar y eliminar favoritos
// Convierte IDs a string para evitar problemas de comparación (1 vs "1")
const favoritesReducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      const item = action.payload;
      const id = String(item.id);
      // Condicional para evitar duplicados
      if (state.favorites.some(f => String(f.id) === id)) return state;
      return { ...state, favorites: [...state.favorites, { ...item, id }] };
    }
    case REMOVE_FAVORITE: {
      // Acepta tanto objeto {id: 1} como id directo (1)
      const idToRemove = action.payload && typeof action.payload === 'object'
        ? String(action.payload.id)
        : String(action.payload);
      return { ...state, favorites: state.favorites.filter(f => String(f.id) !== idToRemove) };
    }
    default:
      return state;
  }
};

// =============================
// INICIALIZADOR DESDE LOCALSTORAGE
// =============================
// Carga inicial desde localStorage o devuelve array vacío
// Esta función se ejecuta UNA SOLA VEZ al crear el reducer
const initializer = () => {
  try {
    const raw = localStorage.getItem('favorites');
    if (!raw) return { favorites: [] };
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return { favorites: [] };
    
    // Usa Map para eliminar duplicados (por si hay datos corruptos)
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

// =============================
// CONTEXTO
// =============================
const FavoritesContext = createContext(null);

// =============================
// PROVIDER
// =============================
// children: son los componentes hijos que estarán dentro del Provider
export const FavoritesProvider = ({ children }) => {
  // Iniciamos el hook useReducer
  // state: estado actual del array de favoritos
  // dispatch: función para enviar acciones al reducer
  // initializer: función que carga datos desde localStorage SOLO la primera vez
  const [state, dispatch] = React.useReducer(favoritesReducer, undefined, initializer);

  // =============================
  // FUNCIONES AUXILIARES
  // =============================
  
  // addFavorite: función que se encarga de agregar favoritos
  // Usa useCallback para que no se recree en cada render (optimización)
  // Dentro llamamos a dispatch para enviar la acción ADD_FAVORITE al reducer
  const addFavorite = useCallback((cat) => {
    if (!cat || typeof cat.id === 'undefined') return;
    dispatch({ type: ADD_FAVORITE, payload: { ...cat, id: String(cat.id) } });
  }, []);

  // removeFavorite: función que elimina favoritos
  // Acepta tanto un objeto {id: 1} como solo el id (1)
  const removeFavorite = useCallback((idOrObj) => {
    const id = idOrObj && typeof idOrObj === 'object' ? idOrObj.id : idOrObj;
    if (typeof id === 'undefined') return;
    dispatch({ type: REMOVE_FAVORITE, payload: String(id) });
  }, []);

  // isFavorite: verifica si un item está en favoritos
  // some: devuelve true si encuentra al menos un elemento que cumpla la condición
  const isFavorite = useCallback((id) => {
    if (typeof id === 'undefined') return false;
    return state.favorites.some(f => String(f.id) === String(id));
  }, [state.favorites]);

  // =============================
  // PERSISTENCIA EN LOCALSTORAGE
  // =============================
  // useEffect: guarda el estado en localStorage cada vez que cambie
  // Se ejecuta DESPUÉS de cada render donde state.favorites cambió
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  }, [state.favorites]);

  // Creamos un objeto con todo lo que queremos compartir con los componentes
  // useMemo evita recrear el objeto en cada render (optimización)
  const value = useMemo(() => ({
    favorites: state.favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  }), [state.favorites, addFavorite, removeFavorite, isFavorite]);

  // Renderizamos el Provider del contexto
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

// =============================
// HOOK PERSONALIZADO
// =============================
// eslint-disable-next-line react-refresh/only-export-components
export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites debe usarse dentro de FavoritesProvider');
  return ctx;
};

export default FavoritesContext;
