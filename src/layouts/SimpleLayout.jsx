import { NavLink } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import './Header.css';

export default function SimpleLayout({ children }) {
  return (
    <>
      <HeaderTop />
      
      {/* Navegación simple para páginas que no son Home */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '12px', 
        padding: '16px',
        background: '#B8D498',
        margin: '0 auto',
        maxWidth: '600px',
        borderRadius: '0 0 32px 32px',
        marginBottom: '20px'
      }}>
        <NavLink to="/" className="nav-link">HOME</NavLink>
        <NavLink to="/favorites" className="nav-link">FAVORITOS</NavLink>
        <NavLink to="/adopt" className="nav-link">ADOPTAR</NavLink>
      </nav>

      {/* Contenido de la página */}
      <main style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '20px' 
      }}>
        {children}
      </main>
    </>
  );
}
