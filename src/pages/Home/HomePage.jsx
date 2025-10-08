import Header from '../../components/Header/Header';
import Slider from '../../Slider/Slider';
import CatCard from '../../components/CatCard/CatCard';
import { useState, useEffect } from 'react';

const HomePage = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  return (
    <Header 
      slider={<Slider />}
      catCard={<CatCard />}
    />
  );
};

export default HomePage;
