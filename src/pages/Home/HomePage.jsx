import Header from '../../components/Header/Header';
import Slider from '../../Slider/Slider';
import CatCard from '../../components/CatCard/CatCard';

const HomePage = () => {
  return (
    <Header 
      slider={<Slider />}
      catCard={<CatCard />}
    />
  );
};

export default HomePage;
