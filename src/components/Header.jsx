import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <>
      <header className="top-header">
        <span className="brand">Bigotes Felices</span>

        {/* Gato del header */}
        <div
          className="header-cat"
          aria-label="Silueta de un gato sentado"
          role="img"
          title="Michi Michi"
        >
          <div className="cat">
            <div className="cat-body" />

            {/* cabeza y orejas */}
            <div className="cat-head" />
            <div className="cat-ear ear-left" />
            <div className="cat-ear ear-right" />

            {/* Rabo: colocado dentro de .cat y centrado para salir por la parte inferior */}
            <div className="cat-tail">
              <span className="tail-seg" />
              <span className="tail-seg" />
              <span className="tail-seg" />
              <span className="tail-seg" />
              <span className="tail-seg" />
            </div>
          </div>
        </div>
      </header>

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
