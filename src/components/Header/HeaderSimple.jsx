import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Pumagato from '../Pumagato/Pumagato';
import { useLanguage } from '../../context/LanguageContext.jsx';
import './Header.theme.css';
import './Header.css';
import LanguageSelector from '../LangSelector/LangSelector';

/**
 * Header simplificado para páginas que NO son Home
 * Solo muestra: Logo + Selector de idioma + Toggle tema + Navegación
 */
export default function HeaderSimple() {
  const { t } = useLanguage();
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
      {/* Header superior con logo, selector idioma y tema */}
      <header className='top-header' style={{ '--header-size': `${pgSize}px` }}>
        <span className='brand'>Bigotes Felices</span>
        <div className='header-actions'>
          <LanguageSelector />
          <button 
            className='prueba-rusa'
            onClick={toggleTheme}
            aria-pressed={isDark}
            aria-label={isDark ? 'Desactivar modo oscuro' : 'Activar modo oscuro'}
            title='Gato negro sentado (click para luna)'
          >
            <Pumagato size={pgSize} title='Gato negro sentado (click para luna)' />
          </button>
        </div>
      </header>

      {/* Navbar simple solo con navegación */}
      <nav className='navbar-simple'>
        <div className='nav-actions-simple'>
          <NavLink to='/' className='nav-link'>
            {t('Navigation', 'home')}
          </NavLink>
          <NavLink to='/favorites' className='nav-link'>
            {t('Navigation', 'favorites')}
          </NavLink>
          <NavLink to='/adopt' className='nav-link'>
            {t('Navigation', 'adopt')}
          </NavLink>
        </div>
      </nav>
    </>
  );
}
