import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, to, ...props }) => {
  const getButtonClass = () => {
    const baseClass = 'btn';
    const variantClass = variant === 'primary' ? 'btn-primary-custom' : 'btn-outline-custom';
    const sizeClass = size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : '';
    
    return `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();
  };

  // Si 'to' est fourni, utiliser Link de React Router
  if (to) {
    return (
      <Link 
        to={to}
        className={getButtonClass()} 
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={getButtonClass()} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string
};

export default Button;
