import ServiceCard from '../molecules/ServiceCard';
import Typography from '../atoms/Typography';

const ServicesSection = () => {
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
    <section className="services-section section-padding">
      <div className="container">
        <Typography variant="h2" className="section-title">
          Nos Services
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
  );
};

export default ServicesSection;
