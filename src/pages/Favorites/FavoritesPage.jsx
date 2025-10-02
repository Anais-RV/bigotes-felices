import { useState, useEffect } from "react";
import { readAllCats } from "../../service/catService";

const FavoritesPage = () => {
  
  const [favCards, setFavCards] = useState([]);

  const getAllCatsFromService = async () => {
    const DATA = await readAllCats();
    setFavCards(DATA);
  };

  useEffect(() => { getAllCatsFromService(); }, []);

  return (
    <>
      {/* HEADER */}
      <main>
        <section className="main__section--fav-cards">
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