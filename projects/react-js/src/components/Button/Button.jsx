import PropTypes from 'prop-types';
import { useState } from 'react';
import './Button.css';

/**
 * Button component with hover effects and variants
 */
export function Button({ variant = 'primary', children, onClick, ...props }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button 
      className={`button button-${variant} ${isHovered ? 'hovered' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid="button"
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  /** The style variant of the button */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** The content of the button */
  children: PropTypes.node.isRequired,
  /** Function called when the button is clicked */
  onClick: PropTypes.func
};
