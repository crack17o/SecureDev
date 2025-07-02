import TeamCard from '../molecules/TeamCard';
import Typography from '../atoms/Typography';

const TeamSection = () => {
  const team = [
    {
      name: 'Jelly Maweja',
      role: 'Ingénieur Logiciel',
      initials: 'JM',
      description: 'Spécialiste en développement full-stack, base de données et architecture logicielle.'
    },
    {
      name: 'Joël Stone Lumpungu',
      role: 'Ingénieur Logiciel',
      initials: 'JSL',
      description: 'Spécialiste en développement Backend et en Base de Données.'
    },
    {
      name: 'José Hemedi',
      role: 'Ingénieur Logiciel',
      initials: 'JH',
      description: 'Développeur senior spécialisé en...'
    },
    {
      name: 'Léa Botoko',
      role: 'Experte en Sécurité',
      initials: 'LB',
      description: 'Spécialiste en cybersécurité et audit de sécurité.'
    },
    {
      name: 'Sidonie Tshiambila',
      role: 'Experte en Sécurité',
      initials: 'ST',
      description: 'Consultante en sécurité informatique et gestion des risques.'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <Typography variant="h2" className="section-title">
          Notre Équipe
        </Typography>
        <div className="row">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              initials={member.initials}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
