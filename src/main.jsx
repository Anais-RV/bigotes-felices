import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import FavoriteButton from './components/FavoriteButton/FavoriteButton'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
   
   
   
   
    <FavoriteButton/>
  </StrictMode>,
)
