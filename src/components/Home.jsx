import { Routes, Route } from 'react-router-dom';
import './Home.css';


function HomePage() { return <div style={{ padding: 16 }}>Home page</div>; }
function FavoritesPage() { return <div style={{ padding: 16 }}>Favorites page</div>; }
function AdoptPage() { return <div style={{ padding: 16 }}>Adopt page</div>; }

export default function Home() {
  return (
    <div className="home">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/adopt" element={<AdoptPage />} />
      </Routes>
    </div>
  );
}
