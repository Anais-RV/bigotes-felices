
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { FavoritesProvider } from './context/FavoritesContext';
import './index.css';
import { LanguageProvider } from './context/LanguageContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </LanguageProvider>
  </StrictMode>
);
