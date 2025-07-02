import PropTypes from 'prop-types';

const Typography = ({ variant = 'p', children, className = '', ...props }) => {
  const Component = variant;
  
  const getTypographyClass = () => {
    const baseClasses = {
      h1: 'display-1',
      h2: 'section-title',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
      p: '',
      span: ''
    };
    
    return `${baseClasses[variant] || ''} ${className}`.trim();
  };

  return (
    <Component className={getTypographyClass()} {...props}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Typography;
