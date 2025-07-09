import React from 'react';
import { ButtonContainer } from './Button.styles';

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  type = 'button',
  className,
}) => {
  return (
    <ButtonContainer
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}
    >
      {children}
    </ButtonContainer>
  );
};