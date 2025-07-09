import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    padding: 8px 16px;
    font-size: 0.875rem;
    border-radius: 4px;
  `,
  medium: css`
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 6px;
  `,
  large: css`
    padding: 16px 32px;
    font-size: 1.125rem;
    border-radius: 8px;
  `,
};

const variants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primaryDark};
      border-color: ${({ theme }) => theme.colors.primaryDark};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.secondaryDark};
      border-color: ${({ theme }) => theme.colors.secondaryDark};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  `,
};

export const ButtonContainer = styled.button`
  font-family: 'Avenir', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  outline: none;
  
  ${({ size }) => sizes[size]}
  ${({ variant }) => variants[variant]}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:focus {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }
`;