import { useState, useEffect } from "react";
import { readAllCats } from "../../service/catService";
// 💡 PISTA 1: ¿No deberías importar el hook useFavorites que creó DavidLapi?
// import { useFavorites } from "../../context/FavoritesContext";

// 💡 PISTA 2: También necesitas importar Link de react-router-dom
// import { Link } from "react-router-dom";

const FavoritesPage = () => {
  
  // 💡 PISTA 3: ¿Realmente necesitas este estado local? 
  // El contexto de favoritos ya tiene la lista de favoritos
  const [favCards, setFavCards] = useState([]);

  // 💡 PISTA 4: Esta función carga TODOS los gatos, no solo los favoritos
  // ¿No deberías usar el contexto para obtener solo los favoritos?
  const getAllCatsFromService = async () => {
    const DATA = await readAllCats();
    setFavCards(DATA);
  };

  useEffect(() => { getAllCatsFromService(); }, []);

  // 💡 PISTA 5: Deberías obtener { favorites } del contexto usando useFavorites()

  return (
    <>
      {/* HEADER */}
      <main>
        <section className="main__section--fav-cards">
          {/* 💡 PISTA 6: ¿Qué pasa si favorites.length === 0? 
              Deberías mostrar "No tienes favoritos" según los criterios de aceptación */}
          {favCards.map((favCard) => (
            <div key={favCard.id}></div> // Card Component inside here
          ))}
        </section>
        <div className="div__btn--styling">
          <button className="btn__btn--state-adopt-all">Adoptar</button>
          <Link to="/">
            <button className="btn__btn--state-home-link">Home</button>
          </Link>
        </div>
      </main>
    </>
  )
}

export default FavoritesPage;