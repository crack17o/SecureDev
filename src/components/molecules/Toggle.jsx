import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

const Toggle = ({ options, activeOption, onToggle, className = '' }) => {
  const handleToggle = (value) => {
    // Petite animation avant de changer
    const container = document.querySelector('.category-content');
    if (container) {
      container.classList.add('fade-out');
      setTimeout(() => {
        onToggle(value);
        container.classList.remove('fade-out');
        container.classList.add('fade-in');
        setTimeout(() => {
          container.classList.remove('fade-in');
        }, 400);
      }, 200);
    } else {
      onToggle(value);
    }
  };

  return (
    <div className={`category-toggle-container ${className}`}>
      <div className="category-toggle">
        {options.map((option) => (
          <button
            key={option.value}
            className={`toggle-option ${activeOption === option.value ? 'active' : ''}`}
            onClick={() => handleToggle(option.value)}
            aria-label={`Sélectionner ${option.label}`}
          >
            <Icon name={option.icon} className="me-2" />
            {option.label}
          </button>
        ))}
        <div className={`toggle-slider ${activeOption === options[1]?.value ? 'slide-right' : ''}`}></div>
      </div>
    </div>
  );
};

Toggle.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ).isRequired,
  activeOption: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Toggle;
