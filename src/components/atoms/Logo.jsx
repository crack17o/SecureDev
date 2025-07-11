import PropTypes from 'prop-types';
import pngLogoBlack from '/LogoBlack.png';
import pngLogo from '/Logo.png';
const Logo = ({ size = 'md', className = '', partie = 'header' }) => {
  const sizeClasses = {
    sm: 'navbar-brand-sm',
    md: 'navbar-brand-custom',
    lg: 'display-4'
  };

  return (
    <span className={`${sizeClasses[size]} ${className}`}>
      <img src={partie=='header' ?pngLogo:pngLogoBlack} alt="SecureDev Logo" width={150}/>
    </span>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
};

export default Logo;
