import { Link } from 'react-router-dom';
import Logo from '../atoms/Logo';
import Icon from '../atoms/Icon';

const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <Logo size="lg" className="mb-3" />
            <p className="mb-3">
              SecureDev est votre partenaire de confiance pour le développement 
              et la sécurité informatique. Nous transformons vos idées en solutions digitales robustes.
            </p>
            <div className="d-flex gap-3">
              <a href="https://linkedin.com/company/securedev" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <Icon name="linkedin" size="1.5rem" />
              </a>
              <a href="https://github.com/SecureDev-RDC" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <Icon name="github" size="1.5rem" />
              </a>
              <a href="mailto:contact@securedev.cd" className="text-decoration-none">
                <Icon name="envelope" size="1.5rem" />
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/pricing">Tarifs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><Link to="/services/developpement-web">Développement Web</Link></li>
              <li><Link to="/services/applications-mobile">Applications Mobile</Link></li>
              <li><Link to="/services/securite-informatique">Sécurité Informatique</Link></li>
              <li><Link to="/services/solutions-cloud">Solutions Cloud</Link></li>
              <li><Link to="/services/consulting-it">Consulting IT</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-3 mb-4">
            <h5>Contact</h5>
            <div className="d-flex align-items-center mb-2">
              <Icon name="geo-alt" className="me-2" />
              <span>Kinshasa, RD Congo</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Icon name="envelope" className="me-2" />
              <a href="mailto:contact@securedev.cd" className="text-decoration-none">
                contact@securedev.cd
              </a>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Icon name="whatsapp" className="me-2" />
              <a href="https://wa.me/243828026729" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                +243 828 026 729
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 SecureDev. Tous droits réservés. Créé dans le cadre du cours de Marketing Digital - L3 Sciences Informatiques, UPC.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
