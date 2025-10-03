import HomeContent from '../../components/HomeContent';
import CatCard from '../../components/CatCard/CatCard';
import Slider from '../../Slider/Slider';

const HomePage = () => {
  return (
    <HomeContent 
      slider={<Slider />}
      catCard={<CatCard />}
    />
  );
};

export default HomePage;
