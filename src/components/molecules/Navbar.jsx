import { Link, useLocation } from 'react-router-dom';
import Logo from '../atoms/Logo';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <Logo />
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto navbar-nav-custom">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                to="/"
              >
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`} 
                to="/about"
              >
                À propos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
