import React, { useState } from 'react';
import Layout from '../components/templates/Layout';
import Typography from '../components/atoms/Typography';
import Button from '../components/atoms/Button';
import Icon from '../components/atoms/Icon';
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet";
// Loader pleine page
const FullPageLoader = () => (
  <div style={{
    position: 'fixed',
    zIndex: 2001,
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(255,255,255,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <span className="spinner-border text-primary" style={{width: '4rem', height: '4rem'}} role="status" />
      <div className="mt-3 text-primary fw-bold fs-5">Envoi en cours...</div>
    </div>
  </div>
);

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      budget: e.target.budget.value,
      timeline: e.target.timeline.value,
      message: e.target.message.value
    };

    try {
      const response = await fetch(' https://securedev-backend.onrender.com/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'https://secure-dev.vercel.app'
        },
        body: JSON.stringify(formData),

      });
      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message envoyé !',
          text: data.message || 'Votre message a bien été envoyé. Nous vous répondrons rapidement.',
          confirmButtonColor: '#3ca7e5'
        });
        e.target.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: data.message || 'Une erreur est survenue lors de l\'envoi.',
          confirmButtonColor: '#3ca7e5'
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur réseau',
        text: error.message,
        confirmButtonColor: '#3ca7e5'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Helmet>
  <title>Contactez SecureDev | Devis projet cybersécurité</title>
  <meta name="description" content="Soumettez votre besoin en sécurité informatique ou développement logiciel. Recevez une estimation personnalisée." />
</Helmet>

      {loading && <FullPageLoader />}
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
                      Type de service <span className="text-danger">*</span>
                    </label>
                    <select className="form-select form-select-lg" id="subject" required>
                      <option value="">Sélectionnez un service</option>
                      <option value="web-dev">Développement Web</option>
                      <option value="mobile-dev">Application Mobile</option>
                      <option value="security">Sécurité Informatique</option>
                      <option value="cloud">Solutions Cloud</option>
                      <option value="consulting">Consulting IT</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="budget" className="form-label fw-bold">
                      Budget estimé
                    </label>
                    <select className="form-select form-select-lg" id="budget">
                      <option value="">Sélectionnez votre budget</option>
                      <option value="500-1000">500$ - 1 000$</option>
                      <option value="1000-2500">1 000$ - 2 500$</option>
                      <option value="2500-5000">2 500$ - 5 000$</option>
                      <option value="5000+">Plus de 5 000$</option>
                      <option value="discussion">À discuter</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="timeline" className="form-label fw-bold">
                      Délai souhaité
                    </label>
                    <select className="form-select form-select-lg" id="timeline">
                      <option value="">Sélectionnez un délai</option>
                      <option value="urgent">Urgent (moins de 2 semaines)</option>
                      <option value="1-month">1 mois</option>
                      <option value="2-3-months">2-3 mois</option>
                      <option value="flexible">Flexible</option>
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
                  <Button variant="primary" size="lg" className="w-100" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Icon name="send" className="me-2" />
                        Envoyer le message
                      </>
                    )}
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
                      <h6 className="mb-1">Email principal</h6>
                      <a href="mailto:securedevsolutions280@gmail.com" className="text-primary-custom text-decoration-none">
                      securedevsolutions280@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item d-flex align-items-start mb-4">
                    <div className="contact-icon">
                      <Icon name="whatsapp" size="1.2rem" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-1">WhatsApp</h6>
                      <a href="https://wa.me/+243991293713" className="text-primary-custom text-decoration-none" target="_blank" rel="noopener noreferrer">
                      +243 991 293 713
                      </a>
                      <br />
                      <small className="text-muted">Contact principal - Jelly Maweja</small>
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
                      <h6 className="mb-1">Disponibilité</h6>
                      <p className="mb-0 text-muted">
                        Lun - Ven: 8h00 - 17h00<br />
                        Sam: 9h00 - 14h00<br />
                        <small className="text-primary-custom">Réponse 24h/7j par email</small>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="card card-custom p-4 bg-light">
                  <Typography variant="h5" className="mb-3">
                    Temps de réponse
                  </Typography>
                  <div className="d-flex align-items-center mb-3">
                    <Icon name="clock-history" className="text-primary-custom me-2" />
                    <span className="fw-bold">Moins de 24h</span>
                  </div>
                  <Typography variant="p" className="mb-4 text-muted">
                    Nous nous engageons à répondre à votre message dans les plus brefs délais.
                  </Typography>
                  <div className="text-center">
                    <Icon name="check-circle" className="text-success" size="3rem" />
                    <p className="mt-2 mb-0 text-muted small">
                      Réponse garantie sous 24h
                    </p>
                  </div>
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
