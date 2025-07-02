import Layout from '../components/templates/Layout';
import TeamSection from '../components/organisms/TeamSection';
import Typography from '../components/atoms/Typography';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-8 mx-auto text-center about-hero ">
              <Typography variant="h1" className="hero-title">
                À Propos de <span className="text-primary-custom">SecureDev</span>
              </Typography>
              <Typography variant="p" className="hero-subtitle lead">
                Née de la passion étudiante pour l'innovation technologique, 
                SecureDev représente l'excellence en développement et sécurité informatique.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <Typography variant="h2" className="section-title">
                Notre Histoire
              </Typography>
              <div className="row">
                <div className="col-md-6">
                  <Typography variant="p" className="mb-4">
                    SecureDev a vu le jour dans le cadre d'un projet académique du cours de 
                    Marketing Digital dispensé par MM. Melshor Essomasor et Pescie Mampuya 
                    aux étudiants de L3 Sciences Informatiques à l'Université Protestante au Congo.
                  </Typography>
                  <Typography variant="p" className="mb-4">
                    Ce qui a commencé comme un exercice universitaire s'est rapidement transformé 
                    en une vision concrète : créer une entreprise qui combine excellence technique 
                    et innovation pour répondre aux défis digitaux d'aujourd'hui.
                  </Typography>
                </div>
                <div className="col-md-6">
                  <Typography variant="p" className="mb-4">
                    Fondée par une équipe dynamique de cinq étudiants passionnés, SecureDev 
                    incarne la nouvelle génération d'entrepreneurs tech congolais, déterminés 
                    à placer la RD Congo sur la carte mondiale de l'innovation technologique.
                  </Typography>
                  <Typography variant="p" className="mb-4">
                    Aujourd'hui, nous sommes fiers de proposer des solutions de développement 
                    web et de sécurité informatique qui rivalisent avec les standards internationaux.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="services-section section-padding">
        <div className="container">
          <Typography variant="h2" className="section-title">
            Vision, Mission & Valeurs
          </Typography>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card card-custom h-100">
                <div className="card-body text-center p-4">
                  <div className="card-icon">
                    <i className="bi bi-eye" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <Typography variant="h4" className="card-title mb-3">Vision</Typography>
                  <Typography variant="p" className="card-text">
                    Devenir le leader africain des solutions technologiques innovantes, 
                    en transformant la RD Congo en hub technologique continental.
                  </Typography>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 mb-4">
              <div className="card card-custom h-100">
                <div className="card-body text-center p-4">
                  <div className="card-icon">
                    <i className="bi bi-target" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <Typography variant="h4" className="card-title mb-3">Mission</Typography>
                  <Typography variant="p" className="card-text">
                    Fournir des solutions technologiques robustes et sécurisées qui 
                    permettent à nos clients de prospérer dans l'économie numérique.
                  </Typography>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 mb-4">
              <div className="card card-custom h-100">
                <div className="card-body text-center p-4">
                  <div className="card-icon">
                    <i className="bi bi-heart" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <Typography variant="h4" className="card-title mb-3">Valeurs</Typography>
                  <Typography variant="p" className="card-text">
                    Excellence, Innovation, Intégrité, Collaboration et Engagement 
                    envers la transformation digitale de l'Afrique.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </Layout>
  );
};

export default About;
