import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import PorsCard from "./components/propsCatCard/PorsCard.jsx/"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home /> 
    
    
    
    <PorsCard/>
  </StrictMode>,
  
  
  
 
)
