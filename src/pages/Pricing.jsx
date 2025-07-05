import { useState } from 'react';
import Layout from '../components/templates/Layout';
import Typography from '../components/atoms/Typography';
import Button from '../components/atoms/Button';
import Icon from '../components/atoms/Icon';
import Toggle from '../components/molecules/Toggle';
import { Helmet } from "react-helmet";
const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('development');
  // Données organisées par catégorie
  const categories = {
    development: {
      title: "Développement",
      icon: "code-slash",
      plans: [
        {
          name: "Site Vitrine",
          price: "500",
          duration: "À partir de",
          currency: "USD",
          description: "Site web professionnel pour présenter votre entreprise",
          features: [
            "Design responsive adaptatif",
            "5-8 pages optimisées",
            "Formulaire de contact",
            "Optimisation SEO de base",
            "Hébergement 1 an inclus",
            "Formation à la gestion",
            "Support technique 3 mois"
          ],
          popular: false,
          icon: "globe"
        },
        {
          name: "E-commerce",
          price: "1,200",
          duration: "À partir de",
          currency: "USD",
          description: "Boutique en ligne complète avec gestion des commandes",
          features: [
            "Catalogue produits illimité",
            "Système de paiement intégré",
            "Gestion des stocks",
            "Tableau de bord admin",
            "Optimisation SEO avancée",
            "Intégration réseaux sociaux",
            "Support technique 6 mois",
            "Formation complète"
          ],
          popular: true,
          icon: "cart"
        },
        {
          name: "Application Web",
          price: "2,500",
          duration: "À partir de",
          currency: "USD",
          description: "Application web sur mesure selon vos besoins",
          features: [
            "Développement sur mesure",
            "Base de données personnalisée",
            "Interface utilisateur avancée",
            "API et intégrations tierces",
            "Sécurité renforcée",
            "Tests et déploiement",
            "Documentation complète",
            "Support technique 12 mois"
          ],
          popular: false,
          icon: "laptop"
        }
      ]
    },
    security: {
      title: "Sécurité",
      icon: "shield-check",
      plans: [
        {
          name: "Audit Basique",
          price: "300",
          duration: "Par audit",
          currency: "USD",
          description: "Évaluation de sécurité de votre système",
          features: [
            "Analyse des vulnérabilités",
            "Test de pénétration basique",
            "Rapport détaillé",
            "Recommandations",
            "Suivi des corrections"
          ],
          popular: false,
          icon: "search"
        },
        {
          name: "Sécurité Avancée",
          price: "800",
          duration: "Par projet",
          currency: "USD",
          description: "Système de sécurité complet et monitoring",
          features: [
            "Audit approfondi",
            "Tests de pénétration avancés",
            "Mise en place de pare-feu",
            "Chiffrement des données",
            "Formation de l'équipe",
            "Monitoring continu 3 mois"
          ],
          popular: true,
          icon: "shield-lock"
        },
        {
          name: "Consulting Sécurité",
          price: "100",
          duration: "Par heure",
          currency: "USD",
          description: "Conseils experts en cybersécurité",
          features: [
            "Analyse des risques",
            "Stratégie de sécurité",
            "Formation du personnel",
            "Politique de sécurité",
            "Support prioritaire"
          ],
          popular: false,
          icon: "chat-dots"
        }
      ]
    }
  };

  const toggleOptions = [
    { value: 'development', label: 'Développement', icon: 'code-slash' },
    { value: 'security', label: 'Sécurité', icon: 'shield-check' }
  ];

  const CategoryToggle = () => (
    <Toggle 
      options={toggleOptions}
      activeOption={activeCategory}
      onToggle={setActiveCategory}
    />
  );

  const PricingCard = ({ plan }) => (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className={`card pricing-card h-100 ${plan.popular ? 'popular-plan' : ''}`}>
        {plan.popular && (
          <div className="popular-badge">
            <span>Plus populaire</span>
          </div>
        )}
        <div className="card-body text-center p-4">
          <div className="pricing-icon mb-3">
            <Icon name={plan.icon} size="2.5rem" />
          </div>
          <h4 className="plan-name mb-2">{plan.name}</h4>
          <p className="plan-category text-primary-custom mb-3">{plan.category}</p>
          <div className="pricing-amount mb-3">
            <span className="duration text-muted">{plan.duration}</span>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">{plan.price}</span>
              <span className="currency-label"> {plan.currency}</span>
            </div>
          </div>
          <p className="plan-description text-muted mb-4">{plan.description}</p>
          <ul className="features-list list-unstyled mb-4">
            {plan.features.map((feature, index) => (
              <li key={index} className="mb-2">
                <Icon name="check-circle-fill" className="text-success me-2" size="1rem" />
                {feature}
              </li>
            ))}
          </ul>
          <Button variant="primary" className="w-100" to="/contact">
            Nous contacter
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <Helmet>
  <title>Nos Tarifs | Nos differentes tarifications</title>
  <meta name="description" content="Soumettez votre besoin en sécurité informatique ou développement logiciel. Recevez une estimation personnalisée." />
</Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-10 mx-auto text-center">
              <Typography variant="h1" className="hero-title mb-4">
                Grille <span className="text-primary-custom">Tarifaire</span>
              </Typography>
              <Typography variant="p" className="hero-subtitle lead mb-5">
                Des solutions technologiques transparentes et adaptées au marché congolais. 
                Découvrez nos offres de développement et de sécurité informatique.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="container">
          {/* Category Toggle */}
          <CategoryToggle />
          
          <div className="category-content">
            <div className="text-center mb-5">
              <Typography variant="h2" className="category-title">
                <Icon name={categories[activeCategory].icon} className="me-3" />
                {categories[activeCategory].title}
              </Typography>
              <p className="text-muted lead">
                {activeCategory === 'development' 
                  ? 'Solutions de développement adaptées à vos besoins'
                  : 'Protection et sécurisation de vos systèmes informatiques'
                }
              </p>
            </div>
            
            <div className="row pricing-cards-container">
              {categories[activeCategory].plans.map((plan, index) => (
                <PricingCard key={`${activeCategory}-${index}`} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card card-custom p-5">
                <div className="text-center mb-4">
                  <Typography variant="h3" className="mb-3">
                    Pourquoi Choisir SecureDev ?
                  </Typography>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-4 text-center">
                    <Icon name="award" size="3rem" className="text-primary-custom mb-3" />
                    <h5>Expertise Locale</h5>
                    <p className="text-muted">
                      Équipe formée aux standards internationaux avec une connaissance approfondie du marché congolais.
                    </p>
                  </div>
                  <div className="col-md-4 mb-4 text-center">
                    <Icon name="clock-history" size="3rem" className="text-primary-custom mb-3" />
                    <h5>Livraison Rapide</h5>
                    <p className="text-muted">
                      Méthodologie agile pour des livraisons dans les délais avec un suivi transparent du projet.
                    </p>
                  </div>
                  <div className="col-md-4 mb-4 text-center">
                    <Icon name="headset" size="3rem" className="text-primary-custom mb-3" />
                    <h5>Support Continu</h5>
                    <p className="text-muted">
                      Accompagnement post-livraison avec formation et support technique adapté à vos besoins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <Typography variant="h2" className="section-title">
                Prêt à Démarrer ?
              </Typography>
              <Typography variant="p" className="lead mb-5">
                Contactez-nous pour discuter de votre projet. Nous vous accompagnons dans le choix de la solution adaptée à vos besoins.
              </Typography>
              
              <div className="pricing-cta">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-10">
                    <div className="cta-card featured text-center">
                      <div className="position-relative">
                        <Icon name="chat-dots" size="4rem" className="text-white mb-4" />
                        <h3 className="text-white mb-3 fw-bold">Contactez-nous pour votre projet</h3>
                        <p className="text-white mb-4 fs-5" style={{ opacity: 0.9 }}>
                          <strong>Consultation gratuite</strong> • <strong>Devis personnalisé</strong> • <strong>Accompagnement complet</strong>
                        </p>
                        <Button variant="primary" size="lg" to="/contact" className="px-5 py-3">
                          <Icon name="envelope" className="me-2" />
                          Envoyer un message
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pricing-info">
                <div className="text-center">
                  <Icon name="info-circle" className="text-primary-custom me-2" size="1.5rem" />
                  <strong className="fs-5">Paiement flexible</strong>
                  <p className="mt-3 mb-0">
                    Nous acceptons les paiements en <strong>USD et francs congolais</strong>, 
                    avec possibilité d'<strong>échelonnement selon le projet</strong>. 
                    Devis détaillé fourni après analyse de vos besoins spécifiques.
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

export default Pricing;
