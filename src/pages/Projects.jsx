import Layout from '../components/templates/Layout';
import Typography from '../components/atoms/Typography';

const projects = [
  {
    title: "Plateforme E-commerce sécurisée",
    description: "Développement d'une boutique en ligne avec paiement sécurisé, gestion des stocks et interface d'administration.",
    image: "/images/ecommerce.jpg",
    badge: "Web & Sécurité"
  },
  {
    title: "Application de gestion RH",
    description: "Solution web pour la gestion des employés, des congés et de la paie, avec authentification forte.",
    image: "/images/rh.jpg",
    badge: "Application métier"
  },
  {
    title: "Audit de sécurité pour une banque",
    description: "Analyse complète des systèmes d'information et recommandations pour renforcer la cybersécurité.",
    image: "/images/audit.jpg",
    badge: "Audit & Conseil"
  }
];

const Projects = () => (
  <Layout>
    <section className="section" style={{ background: "var(--light-gray)" }}>
      <div className="" >
        <section className='hero-section' style={{padding:"100px"}}> 
           <Typography variant="h1" className="section-title mb-2 fade-in-up">
          Nos Réalisations
        </Typography>
          <Typography variant="p" className="lead mb-5 text-center fade-in-up" style={{ animationDelay: "0.2s" }}>
            Découvrez quelques-uns de nos projets réalisés pour nos clients, alliant innovation, sécurité et performance.
          </Typography>
          </section>

        <div className="row" style={{padding:"20px"}}>
          {projects.map((project, idx) => (
            <div className="col-md-4 mb-4 d-flex" key={idx}>
              <div className="card card-custom shadow-sm w-100 fade-in-up" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                <div style={{ position: "relative" }}>
                 
                  <span className="badge bg-primary position-absolute top-0 end-0 m-3" style={{ fontSize: "1rem", background: "var(--primary-blue)" }}>
                    {project.badge}
                  </span>
                </div>
                <div className="card-body d-flex flex-column">
                  <Typography variant="h4" className="card-title mb-2 text-primary-custom">
                    {project.title}
                  </Typography>
                  <Typography variant="p" className="card-text mb-3">
                    {project.description}
                  </Typography>
                  <div className="mt-auto">
                    <button className="btn btn-outline-custom w-100" disabled>
                      Voir le projet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Typography variant="p" className="text-center mt-5 text-muted">
          Vous souhaitez en savoir plus sur nos réalisations ou discuter de votre projet ? <a href="/contact" className="text-primary-custom">Contactez-nous</a> !
        </Typography>
      </div>
    </section>
  </Layout>
);

export default Projects;