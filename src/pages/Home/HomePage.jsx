import Header from '../../components/Header/Header';
import Slider from '../../Slider/Slider';
import CatCard from '../../components/CatCard/CatCard';
import React, { useState, useEffect } from 'react';

const HomePage = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  /**useEffect --> lo que pasa cuando carga la página */
  useEffect(() => {
    /**Cuando la página se abre por primera vez, se ejecuta la función fetchData() */
    const fetchData = async () => {
      
    }
  });

  return (
    <Header 
      slider={<Slider />}
      catCard={<CatCard />}
    />
  );
};

export default HomePage;
