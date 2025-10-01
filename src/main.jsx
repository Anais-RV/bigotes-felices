import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import { FavoritesProvider } from './context/FavoritesContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
      <Home />
    </FavoritesProvider>
  </StrictMode>,
)
