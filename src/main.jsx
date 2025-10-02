import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
{/**Importamos FavoritesProvider */}
import { FavoritesProvider } from "./context/FavoritesContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/**Englobamos FavoritesProvider */}
    <FavoritesProvider>
      {/**Componentes */}
      <RouterProvider router={router} />
    </FavoritesProvider>
    
  </StrictMode>
);
