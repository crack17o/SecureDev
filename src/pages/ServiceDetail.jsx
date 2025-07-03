import { useParams, Navigate } from 'react-router-dom';
import Layout from '../components/templates/Layout';
import Typography from '../components/atoms/Typography';
import Button from '../components/atoms/Button';
import Icon from '../components/atoms/Icon';

const ServiceDetail = () => {
  const { slug } = useParams();

  const servicesData = {
    'developpement-web': {
      title: 'Développement Web',
      icon: 'code-slash',
      description: 'Applications web modernes, responsive et performantes utilisant les dernières technologies.',
      longDescription: 'Nous créons des applications web sur mesure qui répondent parfaitement aux besoins de votre entreprise. Notre équipe maîtrise les technologies modernes pour vous offrir des solutions robustes, sécurisées et évolutives.',
      features: [
        {
          icon: 'layout-text-window-reverse',
          title: 'Design Responsive',
          description: 'Interface adaptée à tous les appareils (desktop, tablette, mobile)'
        },
        {
          icon: 'speedometer2',
          title: 'Performance Optimisée',
          description: 'Chargement rapide et expérience utilisateur fluide'
        },
        {
          icon: 'shield-check',
          title: 'Sécurité Renforcée',
          description: 'Protection contre les vulnérabilités web courantes'
        },
        {
          icon: 'search',
          title: 'SEO Optimisé',
          description: 'Référencement naturel pour améliorer votre visibilité'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Analyse des Besoins',
          description: 'Étude détaillée de vos objectifs et contraintes'
        },
        {
          step: 2,
          title: 'Conception & Design',
          description: 'Création des maquettes et de l\'architecture'
        },
        {
          step: 3,
          title: 'Développement',
          description: 'Codage et intégration des fonctionnalités'
        },
        {
          step: 4,
          title: 'Tests & Livraison',
          description: 'Validation complète et mise en production'
        }
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      pricing: {
        starting: '500',
        currency: 'USD',
        duration: 'À partir de'
      }
    },
    'applications-mobile': {
      title: 'Applications Mobile',
      icon: 'phone',
      description: 'Solutions mobiles natives et cross-platform pour iOS et Android.',
      longDescription: 'Développement d\'applications mobiles performantes et intuitives qui offrent une expérience utilisateur exceptionnelle sur tous les appareils mobiles.',
      features: [
        {
          icon: 'phone',
          title: 'Cross-Platform',
          description: 'Une seule base de code pour iOS et Android'
        },
        {
          icon: 'ui-checks',
          title: 'UX/UI Native',
          description: 'Interface utilisateur adaptée à chaque plateforme'
        },
        {
          icon: 'cloud-arrow-up',
          title: 'Synchronisation Cloud',
          description: 'Données synchronisées en temps réel'
        },
        {
          icon: 'bell',
          title: 'Notifications Push',
          description: 'Engagement utilisateur via notifications ciblées'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Étude de Marché',
          description: 'Analyse de la concurrence et des utilisateurs cibles'
        },
        {
          step: 2,
          title: 'Prototypage',
          description: 'Création de prototypes interactifs'
        },
        {
          step: 3,
          title: 'Développement',
          description: 'Codage natif ou cross-platform selon les besoins'
        },
        {
          step: 4,
          title: 'Publication',
          description: 'Déploiement sur les stores Apple et Google'
        }
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'API REST', 'Push Notifications'],
      pricing: {
        starting: '1,200',
        currency: 'USD',
        duration: 'À partir de'
      }
    },
    'securite-informatique': {
      title: 'Sécurité Informatique',
      icon: 'shield-check',
      description: 'Audit de sécurité, tests de pénétration et protection contre les cybermenaces.',
      longDescription: 'Protection complète de votre infrastructure informatique contre les cybermenaces. Nos experts en sécurité vous accompagnent dans la sécurisation de vos systèmes et données.',
      features: [
        {
          icon: 'bug',
          title: 'Tests de Pénétration',
          description: 'Identification des vulnérabilités avant les attaquants'
        },
        {
          icon: 'file-earmark-text',
          title: 'Audit Sécurité',
          description: 'Évaluation complète de votre infrastructure'
        },
        {
          icon: 'shield-lock',
          title: 'Chiffrement',
          description: 'Protection des données sensibles'
        },
        {
          icon: 'eye',
          title: 'Monitoring',
          description: 'Surveillance continue des menaces'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Évaluation',
          description: 'Analyse de l\'infrastructure existante'
        },
        {
          step: 2,
          title: 'Audit',
          description: 'Tests de sécurité approfondis'
        },
        {
          step: 3,
          title: 'Correction',
          description: 'Mise en place des mesures correctives'
        },
        {
          step: 4,
          title: 'Suivi',
          description: 'Monitoring et maintenance continue'
        }
      ],
      technologies: ['Nmap', 'Metasploit', 'Wireshark', 'OWASP', 'SSL/TLS', 'Firewall', 'VPN', 'Antivirus'],
      pricing: {
        starting: '300',
        currency: 'USD',
        duration: 'À partir de'
      }
    },
    'solutions-cloud': {
      title: 'Solutions Cloud',
      icon: 'cloud-arrow-up',
      description: 'Migration et déploiement d\'applications dans le cloud avec haute disponibilité.',
      longDescription: 'Accompagnement dans votre transition vers le cloud avec des solutions scalables, sécurisées et économiques adaptées à vos besoins business.',
      features: [
        {
          icon: 'arrows-move',
          title: 'Migration Sécurisée',
          description: 'Transition en douceur vers le cloud'
        },
        {
          icon: 'arrow-up-right-circle',
          title: 'Scalabilité',
          description: 'Adaptation automatique à la charge'
        },
        {
          icon: 'piggy-bank',
          title: 'Optimisation Coûts',
          description: 'Réduction des coûts d\'infrastructure'
        },
        {
          icon: 'clock-history',
          title: 'Sauvegarde Auto',
          description: 'Backup automatique et récupération'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Audit Infrastructure',
          description: 'Évaluation de l\'existant et des besoins'
        },
        {
          step: 2,
          title: 'Stratégie Cloud',
          description: 'Définition de l\'architecture cible'
        },
        {
          step: 3,
          title: 'Migration',
          description: 'Déploiement progressif vers le cloud'
        },
        {
          step: 4,
          title: 'Optimisation',
          description: 'Monitoring et ajustements continus'
        }
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring'],
      pricing: {
        starting: '800',
        currency: 'USD',
        duration: 'À partir de'
      }
    },
    'maintenance-support': {
      title: 'Maintenance & Support',
      icon: 'gear',
      description: 'Support technique continu et maintenance préventive de vos systèmes.',
      longDescription: 'Service de maintenance proactive et support technique réactif pour assurer la continuité de vos systèmes informatiques et maximiser leur performance.',
      features: [
        {
          icon: 'clock',
          title: 'Support 24/7',
          description: 'Assistance technique disponible en continu'
        },
        {
          icon: 'arrow-clockwise',
          title: 'Mises à jour',
          description: 'Maintien à jour de vos systèmes'
        },
        {
          icon: 'graph-up',
          title: 'Monitoring',
          description: 'Surveillance proactive des performances'
        },
        {
          icon: 'tools',
          title: 'Maintenance',
          description: 'Intervention préventive et corrective'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Diagnostic',
          description: 'Évaluation de l\'état de vos systèmes'
        },
        {
          step: 2,
          title: 'Planification',
          description: 'Définition du plan de maintenance'
        },
        {
          step: 3,
          title: 'Exécution',
          description: 'Mise en œuvre des actions préventives'
        },
        {
          step: 4,
          title: 'Reporting',
          description: 'Suivi et rapports réguliers'
        }
      ],
      technologies: ['Monitoring Tools', 'Ticketing System', 'Remote Access', 'Backup Solutions', 'Performance Tools'],
      pricing: {
        starting: '200',
        currency: 'USD',
        duration: 'Par mois'
      }
    },
    'consulting-it': {
      title: 'Consulting IT',
      icon: 'people',
      description: 'Conseil stratégique en technologies de l\'information pour votre transformation digitale.',
      longDescription: 'Accompagnement stratégique dans votre transformation digitale avec des conseils d\'experts pour optimiser votre infrastructure et vos processus IT.',
      features: [
        {
          icon: 'lightbulb',
          title: 'Stratégie IT',
          description: 'Définition de votre feuille de route digitale'
        },
        {
          icon: 'diagram-3',
          title: 'Architecture',
          description: 'Conception d\'architectures évolutives'
        },
        {
          icon: 'person-check',
          title: 'Formation',
          description: 'Montée en compétences de vos équipes'
        },
        {
          icon: 'graph-up-arrow',
          title: 'Optimisation',
          description: 'Amélioration continue des processus'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Audit',
          description: 'Analyse de l\'existant et des enjeux'
        },
        {
          step: 2,
          title: 'Stratégie',
          description: 'Définition de la roadmap IT'
        },
        {
          step: 3,
          title: 'Accompagnement',
          description: 'Mise en œuvre et suivi des projets'
        },
        {
          step: 4,
          title: 'Évaluation',
          description: 'Mesure des résultats et ajustements'
        }
      ],
      technologies: ['ITIL', 'Agile', 'DevOps', 'Cloud Strategy', 'Digital Transformation', 'Project Management'],
      pricing: {
        starting: '100',
        currency: 'USD',
        duration: 'Par heure'
      }
    }
  };

  const service = servicesData[slug];

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="service-detail-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <div className="service-hero-icon mb-4">
                <Icon name={service.icon} size="4rem" />
              </div>
              <Typography variant="h1" className="hero-title mb-4">
                {service.title}
              </Typography>
              <Typography variant="p" className="hero-subtitle lead mb-5">
                {service.longDescription}
              </Typography>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Button variant="primary" size="lg" to="/contact">
                  Demander un devis
                </Button>
                <Button variant="outline" size="lg" to="/pricing">
                  Voir les tarifs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container">
          <Typography variant="h2" className="section-title">
            Fonctionnalités Clés
          </Typography>
          <div className="row">
            {service.features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div className="service-feature-card text-center">
                  <div className="card-icon mb-3">
                    <Icon name={feature.icon} size="2rem" />
                  </div>
                  <h5 className="mb-3">{feature.title}</h5>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <Typography variant="h2" className="section-title">
            Notre Processus
          </Typography>
          <div className="row">
            {service.process.map((step, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div className="service-process-step text-center">
                  <div className="process-step-number">
                    {step.step}
                  </div>
                  <h5 className="mb-3">{step.title}</h5>
                  <p className="text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding">
        <div className="container">
          <Typography variant="h2" className="section-title">
            Technologies Utilisées
          </Typography>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="mb-4">
                {service.technologies.map((tech, index) => (
                  <span key={index} className="service-tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <Typography variant="p" className="text-muted">
                Nous utilisons les technologies les plus récentes et les mieux adaptées à vos besoins 
                pour garantir des solutions performantes et durables.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="card card-custom text-center p-5">
                <div className="pricing-icon mb-4">
                  <Icon name={service.icon} size="3rem" className="text-primary-custom" />
                </div>
                <Typography variant="h3" className="mb-3">
                  {service.title}
                </Typography>
                <div className="pricing-amount mb-4">
                  <span className="duration text-muted">{service.pricing.duration}</span>
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">{service.pricing.starting}</span>
                    <span className="currency-label"> {service.pricing.currency}</span>
                  </div>
                </div>
                <Typography variant="p" className="text-muted mb-4">
                  Tarif indicatif variable selon la complexité du projet. 
                  Contactez-nous pour un devis personnalisé.
                </Typography>
                <Button variant="primary" size="lg" className="w-100" to="/contact">
                  Demander un devis gratuit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <Typography variant="h2" className="mb-4">
                Prêt à Commencer Votre Projet ?
              </Typography>
              <Typography variant="p" className="lead mb-5">
                Nos experts sont là pour vous accompagner dans la réalisation de votre projet {service.title.toLowerCase()}.
                Contactez-nous pour une consultation gratuite.
              </Typography>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Button variant="primary" size="lg" to="/contact">
                  <Icon name="envelope" className="me-2" />
                  Nous contacter
                </Button>
                <Button variant="outline" size="lg" to="/about">
                  <Icon name="people" className="me-2" />
                  Rencontrer l'équipe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
