import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../Slider/Slider';
import CatCard from '../../components/CatCard/CatCard';
import React, { useState, useEffect } from 'react';
import './HomePage.css';
//importamos catService para traer datos de su API
import '../../service/catService.js';

const HomePage = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**useEffect --> lo que pasa cuando carga la página */
  useEffect(() => {
    /**Cuando la página se abre por primera vez, se ejecuta la función fetchData() */
    const fetchData = async () => {
      // Usamos try/catch para manejar errores
      try {
        
        setLoading(true); //Decimos: está cargando
        setError(null); //Limpiamos los errores anteriores

        //Añadimos Promise para que la duración de la carga sea de 1.5 segundos
        await new Promise(resolve => setTimeout(resolve, 1500)); 

        //Probamos con la variable response para simular que estamos conectando a una API externa:
        //Simularemos una respuesta de exito
        const response = 'success';
        //Simularemos una respuesta de error
        //const response = "error";

        //Condicional error
        if (response === 'error') {
          throw new Error('No se pudo cargar...'); //Si hay error, lo lanzamos
        }


      } catch (error) {
        setError(error.message); //Si algo falla, almacenamos el error
      } finally {
        setLoading(false); //Le decimos que ya no está cargando
      }
    };
    // Llamamos a la funcion fetchData
    fetchData();
    // El [] vacío significa que el useEffect solo carga UNA VEZ al principio
  }, []);

  //Estado de carga
  if(loading) {
    return(
      <div className="loading">
        <h2>Cargando...</h2>
        <p>Por favor, espere un momento</p>
      </div>
    );
  }

  //Estado de error
  if(error) {
    return(
      <div className='error'>
        <h2>Error</h2>
        <p>Algo salió mal</p>
      </div>
    );
  }

  //Estado exitoso
  return (
    <Header 
      slider={<Slider />}
      catCard={
        loading ? (
          <div>Cargando gatos...</div>
        ) : currentCat ? (
          <CatCard 
            name={currentCat.breeds?.[0]?.name || 'Gato Misterioso'}
            age={Math.floor(Math.random() * 10) + 1} // Edad aleatoria ya que la API no proporciona edad
            imgUrl={currentCat.url}
            description={currentCat.breeds?.[0]?.description || 'Un gato adorable esperando un hogar lleno de amor.'}
            catId={currentCat.id}
          />
        ) : (
          <div>No hay gatos disponibles</div>
        )
      }
    />
  );

};

export default HomePage;
