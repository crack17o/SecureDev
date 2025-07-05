import Layout from '../components/templates/Layout';
import Typography from '../components/atoms/Typography';
import Button from '../components/atoms/Button';
import Icon from '../components/atoms/Icon';
import { Helmet } from "react-helmet";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    alert('Message envoyé avec succès ! Nous vous répondrons bientôt.');
  };

  return (
    <Layout>
      <Helmet>
  <title>Contactez SecureDev | Devis projet cybersécurité</title>
  <meta name="description" content="Soumettez votre besoin en sécurité informatique ou développement logiciel. Recevez une estimation personnalisée." />
</Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-10 mx-auto text-center">
              <Typography variant="h1" className="hero-title">
                Contactez-nous
              </Typography>
              <Typography variant="p" className="hero-subtitle">
                Une question ? Un projet ? Notre équipe est là pour vous accompagner dans votre transformation digitale.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="card card-custom p-5">
                <Typography variant="h3" className="mb-4">
                  Envoyez-nous un message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="firstName" className="form-label fw-bold">
                        Prénom <span className="text-danger">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="form-control form-control-lg" 
                        id="firstName" 
                        placeholder="Votre prénom" 
                        required 
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="lastName" className="form-label fw-bold">
                        Nom <span className="text-danger">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="form-control form-control-lg" 
                        id="lastName" 
                        placeholder="Votre nom" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="email" className="form-label fw-bold">
                        Adresse e-mail <span className="text-danger">*</span>
                      </label>
                      <input 
                        type="email" 
                        className="form-control form-control-lg" 
                        id="email" 
                        placeholder="votre@email.com" 
                        required 
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="phone" className="form-label fw-bold">
                        Téléphone
                      </label>
                      <input 
                        type="tel" 
                        className="form-control form-control-lg" 
                        id="phone" 
                        placeholder="+243 000 000 000" 
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="form-label fw-bold">
                      Sujet <span className="text-danger">*</span>
                    </label>
                    <select className="form-select form-select-lg" id="subject" required>
                      <option value="">Sélectionnez un sujet</option>
                      <option value="web-dev">Développement Web</option>
                      <option value="mobile-dev">Application Mobile</option>
                      <option value="security">Sécurité Informatique</option>
                      <option value="cloud">Solutions Cloud</option>
                      <option value="consulting">Consulting IT</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-bold">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      rows="6" 
                      placeholder="Décrivez votre projet ou votre besoin..." 
                      required 
                    />
                  </div>
                  <Button variant="primary" size="lg" className="w-100">
                    <Icon name="send" className="me-2" />
                    Envoyer le message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4">
              <div className="h-100 d-flex flex-column">
                {/* Contact Information Card */}
                <div className="card card-custom p-4 mb-4">
                  <Typography variant="h4" className="mb-4">
                    Informations de contact
                  </Typography>
                  
                  <div className="contact-info-item d-flex align-items-start mb-4">
                    <div className="contact-icon">
                      <Icon name="envelope" size="1.2rem" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-1">Email</h6>
                      <a href="mailto:contact@securedev.com" className="text-primary-custom text-decoration-none">
                        contact@securedev.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item d-flex align-items-start mb-4">
                    <div className="contact-icon">
                      <Icon name="telephone" size="1.2rem" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-1">Téléphone</h6>
                      <a href="tel:+243000000000" className="text-primary-custom text-decoration-none">
                        +243 000 000 000
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item d-flex align-items-start mb-4">
                    <div className="contact-icon">
                      <Icon name="geo-alt" size="1.2rem" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-1">Adresse</h6>
                      <p className="mb-0 text-muted">
                        Université Protestante au Congo<br />
                        Kinshasa, RDC
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-item d-flex align-items-start">
                    <div className="contact-icon">
                      <Icon name="clock" size="1.2rem" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-1">Horaires</h6>
                      <p className="mb-0 text-muted">
                        Lun - Ven: 8h00 - 18h00<br />
                        Sam: 9h00 - 15h00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call to Action Card */}
                <div className="card card-custom p-4 bg-light">
                  <Typography variant="h5" className="mb-3">
                    Besoin d'une réponse rapide ?
                  </Typography>
                  <Typography variant="p" className="mb-4 text-muted">
                    Planifiez un appel avec notre équipe pour discuter de vos besoins spécifiques.
                  </Typography>
                  <Button variant="outline" className="w-100">
                    <Icon name="calendar-event" className="me-2" />
                    Planifier un appel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
