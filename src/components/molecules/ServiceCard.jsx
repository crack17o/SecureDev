import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card card-custom h-100">
        <div className="card-body text-center p-4">
          <div className="card-icon">
            <Icon name={icon} size="2rem" />
          </div>
          <h4 className="card-title mb-3">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ServiceCard;
