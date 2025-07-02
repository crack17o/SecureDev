import PropTypes from 'prop-types';

const Icon = ({ name, size = '1.5rem', color = 'currentColor', className = '' }) => {
  return (
    <i 
      className={`bi bi-${name} ${className}`}
      style={{ 
        fontSize: size, 
        color: color 
      }}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
};

export default Icon;
