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
              <a href="#" className="text-decoration-none">
                <Icon name="linkedin" size="1.5rem" />
              </a>
              <a href="#" className="text-decoration-none">
                <Icon name="twitter" size="1.5rem" />
              </a>
              <a href="#" className="text-decoration-none">
                <Icon name="github" size="1.5rem" />
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/">Accueil</a></li>
              <li><a href="/about">À propos</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="#">Développement Web</a></li>
              <li><a href="#">Applications Mobile</a></li>
              <li><a href="#">Sécurité Informatique</a></li>
              <li><a href="#">Solutions Cloud</a></li>
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
              <span>contact@securedev.cd</span>
            </div>
            <div className="d-flex align-items-center">
              <Icon name="phone" className="me-2" />
              <span>+243 XXX XXX XXX</span>
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
