import { NavLink } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import './Header.css';

export default function HomeContent({ slider, catCard }) {
  return (
    <>
      <HeaderTop />
      
      <div className="navbar">
        <div className="navbar-content">
          <div className="slider-placeholder">
            {slider || "Aquí irá el slider"}
          </div>
          
          <div className="modal-box">
            {catCard || "Modal con contenido del slider"}
          </div>

          <nav className="nav-actions">
            <NavLink to="/" className="nav-link">HOME</NavLink>
            <NavLink to="/favorites" className="nav-link">FAVORITOS</NavLink>
            <NavLink to="/adopt" className="nav-link">ADOPTAR</NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}