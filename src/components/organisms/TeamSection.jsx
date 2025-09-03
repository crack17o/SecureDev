import TeamCard from '../molecules/TeamCard';
import Typography from '../atoms/Typography';

const TeamSection = () => {
  const team = [
    {
      name: 'Jelly Maweja',
      role: 'Ingénieur Logiciel',
      initials: 'JM',
      description: 'Spécialiste en développement full-stack, base de données et architecture logicielle.',
      email: 'jellymaweja7@gmail.com',
      phone: '+243 828 026 729',
      github: 'https://github.com/JellyMnavita'
    },
    {
      name: 'Joël Stone Lumpungu',
      role: 'Ingénieur Logiciel',
      initials: 'JSL',
      description: 'Spécialiste en développement Backend et en Base de Données.',
      email: 'joelstonelumpungu09@gmail.com',
      phone: '+243 899 967 287',
      github: 'https://github.com/crack17o'
    },
    {
      name: 'José Hemedi',
      role: 'Ingénieur Logiciel',
      initials: 'JH',
      description: 'Spécialiste en développement Frontend et en intégration d\'API.',
      email: 'emedisiku@gmail.com',
      phone: '+243 850 377 919',
      github: 'https://github.com/josehemedi'
    },
    {
      name: 'Léa Botoko',
      role: 'Experte en Sécurité',
      initials: 'LB',
      description: 'Spécialiste en cybersécurité et audit de sécurité.',
      email: 'leahopebotoko@gmail.com',
      phone: '+243 832 568 228',
      github: null
    },
    {
      name: 'Sidonie Tshiambila',
      role: 'Experte en Sécurité',
      initials: 'ST',
      description: 'Consultante en sécurité informatique et gestion des risques.',
      email: 'tshiambilamulanga@gmail.com',
      phone: '+243 973 447 868',
      github: null
    },
    {
      name: 'El-Rohi Mukendi',
      role: 'Expert en Sécurité',
      initials: 'EM',
      description: 'Consultant en sécurité informatique et audit des risques.',
      email: 'juanitoelroy14@gmail.com',
      phone: '+243 859 889 302',
      github: 'https://github.com/14juanito'
    },
    {
      name: 'Elie Ntwari',
      role: 'Data Scientist',
      initials: 'EN',
      description: 'Expert en science des données et apprentissage automatique.',
      email: 'elientwari@gmail.com',
      phone: '+243 857 034 316',
      github: 'https://github.com/Elie-Ntwari'
    },
    {
      name: 'Daniel Lukali',
      role: 'Data Scientist',
      initials: 'DL',
      description: 'Expert en visualisation de données.',
      email: 'danielukali@gmail.com',
      phone: '+243 998 555 066',
      github: null
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
              email={member.email}
              phone={member.phone}
              github={member.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
