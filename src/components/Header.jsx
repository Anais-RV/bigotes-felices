import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <>
      <header className="top-header">Iván Calero</header>

      <div className="navbar">
        <div className="navbar-content">
          <div className="slider-placeholder">Aquí irá el slider</div>
          <div className="modal-box">Modal con contenido del slider</div>

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
