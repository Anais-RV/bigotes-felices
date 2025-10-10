import Header from '../../components/Header/Header';
import Slider from '../../Slider/Slider';
import CatCard from '../../components/CatCard/CatCard';
import React, { useState, useEffect } from 'react';
import "./HomePage.css"

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

        //Añadimos Promise para que la duración de la carga sea de 3 segundos
        await new Promise(resolve => setTimeout(resolve, 3000)); 

        //Simularemos una respuesta exitosa
        //const response = "success";
        //Simularemos una respuesta de error
        const response = "error";

        if (response === "error") {
          throw new Error("No se pudo cargar..."); //Si hay error, lo lanzamos
        }


      } catch (error) {
        setError(error.message); //Si algo falla, almacenamos el error
      } finally {
        setLoading(false); //Le decimos que ya no está cargando
      }
    }
    // Llamamos a la funcion fetchData
    fetchData();
    // El [] vacío significa que el useEffect solo carga UNA VEZ al principio
  }, []);

  //Estado de carga
  if(loading) {
    return(
      <div className="loading">
        <p>Cargando...</p>
        <p>Por favor, espere un momento</p>
      </div>
    );
  }

  //Estado de error
  if(error) {
    return(
      <div className='error'>
        <p>Vaya por dios...</p>
        <p>Algo salió mal</p>
      </div>
    );
  }

  //Estado exitoso
  return (
    <Header 
      slider={<Slider />}
      catCard={<CatCard />}
    />
  );
};

export default HomePage;
