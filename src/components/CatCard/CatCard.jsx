//1. Hemos envuelto el card-container en un section para centralizarlo. Entonces despues de hacer los estilos de Home page lo podemos quitar. 2. Hemos realizado los cambios en box-shadow de Slider para que dos sombras se ven exactamente igual. 
import './CatCard.css';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import Button from '../Button/Button';

export default function CatCard({className, catId}) {
  return (
    <section className="page-container">
      <div className='card-container'>
        <p className='card-header'>Nombre/Edad</p>
        <div className='card-photo'>   
          <FavoriteButton className={className} catId={catId} />
        </div>
        <div className='card-buttons'>
          {/** Button Favoritos */}
          <Button>Favoritos</Button>
          {/** Button Adoptar */}
          <Button>Adoptar</Button>
        </div>
      </div>
    </section>
  );
}