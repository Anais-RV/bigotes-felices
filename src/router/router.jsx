import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../pages/Home/HomePage.jsx";
import AdoptPage from "../pages/Adopt/AdoptPage.jsx";
import FavoritesPage from "../pages/Favorites/FavoritesPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/home",              // 👈 alias
    element: <Navigate to="/" replace />
  },
  {
    path: "/adopt",
    element: <AdoptPage />
  },
  {
    path: "/favorites",
    element: <FavoritesPage />
  }
]);
