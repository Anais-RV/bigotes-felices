import CatCard from '../../components/CatCard/CatCard';
import PreviusButton from '../../components/Buttons/PreviousButton.jsx';
import NextButton from '../../components/Buttons/NextButton.jsx';
const HomePage = () => {
  return (
    <div>
      <p>Home Page</p>
      <CatCard />
      <PreviusButton></PreviusButton>
      <NextButton></NextButton>
    </div>
  );
};

export default HomePage;
