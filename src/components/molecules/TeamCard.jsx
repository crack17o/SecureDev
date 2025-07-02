import PropTypes from 'prop-types';

const TeamCard = ({ name, role, initials, description }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="team-card">
        <div className="team-avatar">
          {initials}
        </div>
        <h4 className="mb-2">{name}</h4>
        <p className="text-primary-custom fw-bold mb-3">{role}</p>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default TeamCard;
