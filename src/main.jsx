<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/HomePage'
import FavoriteButton from './components/FavoriteButton/FavoriteButton'

=======
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { FavoritesProvider } from './context/FavoritesContext';
import './index.css';
>>>>>>> dev

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <Home />
   
   
   

    <FavoriteButton/>
  </StrictMode>,
)
=======
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </StrictMode>
);
>>>>>>> dev
