import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Pumagato from '../Pumagato/Pumagato';
import './Header.theme.css';
import './Header.css';

export default function Header({ slider, catCard }) {
  const pgSize = 60;
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const dark = saved ? saved === 'dark' : false;
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <>
      <header className='top-header' style={{ '--header-size': `${pgSize}px` }}>
        <span className='brand'>Bigotes Felices</span>
        <div className='header-actions'>
          <button
            className='pumagato-toggle'
            onClick={toggleTheme}
            aria-pressed={isDark}
            aria-label={isDark ? 'Desactivar modo oscuro' : 'Activar modo oscuro'}
            title='Gato negro sentado (click para luna)'
          >
            <Pumagato size={pgSize} title='Gato negro sentado (click para luna)' />
          </button>
        </div>
      </header>

      <div className='navbar'>
        <div className='navbar-content'>
          <div className='slider-placeholder'>
            {slider || 'Aquí irá el slider'}
          </div>

          <div className='modal-box'>
            {catCard || 'Modal con contenido del slider'}
          </div>

          <nav className='nav-actions'><br />
            <NavLink to='/' className='nav-link'>HOME</NavLink>
            <NavLink to='/favorites' className='nav-link'>FAVORITOS</NavLink>
            <NavLink to='/adopt' className='nav-link'>ADOPTAR</NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}
