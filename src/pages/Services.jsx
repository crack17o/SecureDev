import Layout from '../components/templates/Layout';
import Typography from '../components/atoms/Typography';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section bg-light py-5">
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-8 mx-auto text-center">
              <Typography variant="h1" className="hero-title">
                Nos <span className="text-primary-custom">Services</span>
              </Typography>
              <Typography variant="p" className="hero-subtitle lead">
                Nous offrons des solutions technologiques complètes, alliant développement web, sécurité et innovation.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container">
          <Typography variant="h2" className="section-title text-center mb-5">
            Ce que nous proposons
          </Typography>
          <div className="row">
            {/* Développement Web */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card card-custom h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-laptop" style={{ fontSize: '2rem', color: '#007bff' }}></i>
                  <Typography variant="h4" className="card-title mt-3 mb-2">Développement Web</Typography>
                  <Typography variant="p" className="card-text">
                    Création de sites web modernes, performants et adaptés aux besoins spécifiques de chaque client.
                  </Typography>
                </div>
              </div>
            </div>

            {/* Sécurité Informatique */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card card-custom h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-shield-lock" style={{ fontSize: '2rem', color: '#007bff' }}></i>
                  <Typography variant="h4" className="card-title mt-3 mb-2">Sécurité Informatique</Typography>
                  <Typography variant="p" className="card-text">
                    Audit, détection de vulnérabilités, et mise en place de systèmes robustes contre les cyberattaques.
                  </Typography>
                </div>
              </div>
            </div>

            {/* Applications Mobiles */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card card-custom h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-phone" style={{ fontSize: '2rem', color: '#007bff' }}></i>
                  <Typography variant="h4" className="card-title mt-3 mb-2">Applications Mobiles</Typography>
                  <Typography variant="p" className="card-text">
                    Développement d'applications Android et iOS intuitives pour connecter les entreprises à leurs clients.
                  </Typography>
                </div>
              </div>
            </div>

            {/* UX/UI Design */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card card-custom h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-brush" style={{ fontSize: '2rem', color: '#007bff' }}></i>
                  <Typography variant="h4" className="card-title mt-3 mb-2">Design UX/UI</Typography>
                  <Typography variant="p" className="card-text">
                    Conception d’interfaces intuitives et attractives centrées sur l’utilisateur pour améliorer l’expérience client.
                  </Typography>
                </div>
              </div>
            </div>

            {/* Formation & Ateliers */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card card-custom h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-mortarboard" style={{ fontSize: '2rem', color: '#007bff' }}></i>
                  <Typography variant="h4" className="card-title mt-3 mb-2">Formations & Ateliers</Typography>
                  <Typography variant="p" className="card-text">
                    Sessions de formation en développement web, cybersécurité et outils numériques pour tous niveaux.
                  </Typography>
                </div>
              </div>
            </div>

            {/* Consulting Tech */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card card-custom h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-gear" style={{ fontSize: '2rem', color: '#007bff' }}></i>
                  <Typography variant="h4" className="card-title mt-3 mb-2">Consulting & Stratégie</Typography>
                  <Typography variant="p" className="card-text">
                    Accompagnement stratégique pour digitaliser les processus métiers et maximiser les performances.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
