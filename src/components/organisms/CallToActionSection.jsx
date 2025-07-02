import Button from '../atoms/Button';
import Typography from '../atoms/Typography';

const CallToActionSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <Typography variant="h2" className="section-title">
              Prêt à Démarrer Votre Projet ?
            </Typography>
            <Typography variant="p" className="lead mb-4">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment 
              SecureDev peut transformer vos idées en solutions digitales performantes.
            </Typography>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button variant="primary" size="lg">
                Demander un devis
              </Button>
              <Button variant="outline" size="lg">
                Planifier un appel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
