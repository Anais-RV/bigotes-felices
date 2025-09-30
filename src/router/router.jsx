import { createBrowserRouter } from "react-router-dom";
import AdoptPage from "../pages/Adopt/AdoptPage.jsx";
import FavoritesPage from "../pages/Favorites/FavoritesPage.jsx";
import HomePage from "../pages/Home/HomePage.jsx";
import Home from "../components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> // Home -> Components
  },
  {
    path: "/home",
    element: <HomePage /> // HomePage -> Pages
  },
  {
    path: "/adopt",
    element: <AdoptPage />
  },
  {
    path: "/favorites",
    element: <FavoritesPage />
  }
])