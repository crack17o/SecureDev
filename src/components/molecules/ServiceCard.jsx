import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../atoms/Icon';

const ServiceCard = ({ icon, title, description, slug }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <Link to={`/services/${slug}`} className="text-decoration-none">
        <div className="card card-custom h-100 service-card-hover">
          <div className="card-body text-center p-4">
            <div className="card-icon">
              <Icon name={icon} size="2rem" />
            </div>
            <h4 className="card-title mb-3">{title}</h4>
            <p className="card-text">{description}</p>
            <div className="service-card-action mt-3">
              <span className="btn btn-outline-custom btn-sm">
                En savoir plus
                <Icon name="arrow-right" className="ms-2" size="0.9rem" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

export default ServiceCard;
