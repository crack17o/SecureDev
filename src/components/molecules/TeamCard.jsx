import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

const TeamCard = ({ name, role, initials, description, email, phone, github }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="team-card">
        <div className="team-avatar">
          {initials}
        </div>
        <h4 className="mb-2">{name}</h4>
        <p className="text-primary-custom fw-bold mb-3">{role}</p>
        <p className="text-muted mb-3">{description}</p>
        
        {/* Contact Information */}
        <div className="team-contact">
          {email && (
            <div className="contact-item mb-2">
              <Icon name="envelope" size="1rem" className="text-primary-custom me-2" />
              <a href={`mailto:${email}`} className="text-decoration-none text-muted">
                {email}
              </a>
            </div>
          )}
          {phone && (
            <div className="contact-item mb-2">
              <Icon name="telephone" size="1rem" className="text-primary-custom me-2" />
              <a href={`tel:${phone}`} className="text-decoration-none text-muted">
                {phone}
              </a>
            </div>
          )}
          {github && (
            <div className="contact-item mb-2">
              <Icon name="github" size="1rem" className="text-primary-custom me-2" />
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">
                GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  github: PropTypes.string
};

export default TeamCard;
