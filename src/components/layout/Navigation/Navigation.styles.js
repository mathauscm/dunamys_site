import styled, { css } from 'styled-components';

export const NavigationContainer = styled.nav`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    
    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      `}
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }
`;

export const NavigationItem = styled.li`
  margin: 0;
`;

export const NavigationLink = styled.button`
  background: none;
  border: none;
  font-family: 'Avenir', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 0.5rem 0;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;