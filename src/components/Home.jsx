import "./Home.css";
import Slider from "./slider";

export default function Home() {
  return (
    <div className="home">
      <h1>Proyecto limpio 🚀</h1>
      <p>Ya no dependemos de App.jsx</p>
      <Slider />
    </div>
  );
}