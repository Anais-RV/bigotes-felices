<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import FavoriteButton from './components/FavoriteButton/FavoriteButton'

=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./index.css";
>>>>>>> 10cdab5fe3c55a8898404c2a7dfa388dc42f8762

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD
    <Home />
   
   
   

    <FavoriteButton/>
  </StrictMode>,
)
=======
    <RouterProvider router={router} />
  </StrictMode>
);
>>>>>>> 10cdab5fe3c55a8898404c2a7dfa388dc42f8762
