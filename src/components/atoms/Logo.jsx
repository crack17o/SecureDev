import PropTypes from 'prop-types';

const Logo = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'navbar-brand-sm',
    md: 'navbar-brand-custom',
    lg: 'display-4'
  };

  return (
    <span className={`${sizeClasses[size]} ${className}`}>
      <span className="text-primary-custom">Secure</span>
      <span className="text-dark-custom">Dev</span>
    </span>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
};

export default Logo;
