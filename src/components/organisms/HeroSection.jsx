import Button from '../atoms/Button';
import Typography from '../atoms/Typography';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8 mx-auto text-center">
            <Typography variant="h1" className="hero-title">
              Votre Partenaire de Confiance en 
              <span className="text-primary-custom"> Développement</span> et 
              <span className="text-primary-custom"> Sécurité</span>
            </Typography>
            <Typography variant="p" className="hero-subtitle lead">
              SecureDev transforme vos idées en solutions numériques robustes et sécurisées. 
              Nous combinons expertise technique et innovation pour propulser votre entreprise vers le futur digital.
            </Typography>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button variant="primary" size="lg">
                Découvrir nos services
              </Button>
              <Button variant="outline" size="lg">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
