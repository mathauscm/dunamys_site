import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card Component
 * Reusable card component with different variants
 */
const Card = ({ 
  children, 
  variant = 'default', 
  padding = 'medium',
  shadow = 'medium',
  hover = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-lg transition-all duration-200';
  
  const variants = {
    default: 'border border-gray-200',
    elevated: 'border-0',
    outlined: 'border-2 border-gray-200',
    primary: 'border border-primary-200 bg-primary-50',
    secondary: 'border border-secondary-200 bg-secondary-50'
  };

  const paddings = {
    none: 'p-0',
    small: 'p-3',
    medium: 'p-4',
    large: 'p-6',
    xlarge: 'p-8'
  };

  const shadows = {
    none: 'shadow-none',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
    xlarge: 'shadow-xl'
  };

  const hoverEffect = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';

  const classes = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${shadows[shadow]} ${hoverEffect} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'elevated', 'outlined', 'primary', 'secondary']),
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge']),
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge']),
  hover: PropTypes.bool,
  className: PropTypes.string
};

export default Card;