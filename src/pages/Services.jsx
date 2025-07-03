import Layout from '../components/templates/Layout';
import Typography from '../components/atoms/Typography';
import ServiceCard from '../components/molecules/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: 'code-slash',
      title: 'Développement Web',
      description: 'Applications web modernes, responsive et performantes utilisant les dernières technologies.',
      slug: 'developpement-web'
    },
    {
      icon: 'phone',
      title: 'Applications Mobile',
      description: 'Solutions mobiles natives et cross-platform pour iOS et Android.',
      slug: 'applications-mobile'
    },
    {
      icon: 'shield-check',
      title: 'Sécurité Informatique',
      description: 'Audit de sécurité, tests de pénétration et protection contre les cybermenaces.',
      slug: 'securite-informatique'
    },
    {
      icon: 'cloud-arrow-up',
      title: 'Solutions Cloud',
      description: 'Migration et déploiement d\'applications dans le cloud avec haute disponibilité.',
      slug: 'solutions-cloud'
    },
    {
      icon: 'gear',
      title: 'Maintenance & Support',
      description: 'Support technique continu et maintenance préventive de vos systèmes.',
      slug: 'maintenance-support'
    },
    {
      icon: 'people',
      title: 'Consulting IT',
      description: 'Conseil stratégique en technologies de l\'information pour votre transformation digitale.',
      slug: 'consulting-it'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-10 mx-auto text-center">
              <Typography variant="h1" className="hero-title mb-4">
                Nos <span className="text-primary-custom">Services</span>
              </Typography>
              <Typography variant="p" className="hero-subtitle lead mb-5">
                Découvrez notre gamme complète de services en développement et sécurité informatique. 
                Des solutions sur mesure pour accompagner votre transformation digitale.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <Typography variant="h2" className="section-title">
            Explorez Nos Expertises
          </Typography>
          <div className="row">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <Typography variant="h2" className="section-title">
                Pourquoi Choisir SecureDev ?
              </Typography>
              <div className="row">
                <div className="col-md-4 mb-4 text-center">
                  <div className="card-icon mb-3">
                    <i className="bi bi-award text-primary-custom" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h5>Expertise Reconnue</h5>
                  <p className="text-muted">
                    Équipe formée aux dernières technologies et méthodologies du secteur.
                  </p>
                </div>
                <div className="col-md-4 mb-4 text-center">
                  <div className="card-icon mb-3">
                    <i className="bi bi-clock-history text-primary-custom" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h5>Livraison Rapide</h5>
                  <p className="text-muted">
                    Méthodes agiles pour des projets livrés dans les temps avec qualité.
                  </p>
                </div>
                <div className="col-md-4 mb-4 text-center">
                  <div className="card-icon mb-3">
                    <i className="bi bi-headset text-primary-custom" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h5>Support Continu</h5>
                  <p className="text-muted">
                    Accompagnement post-projet avec maintenance et support technique.
                  </p>
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
