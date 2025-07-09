import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const Logo = styled.div`
  h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export const MenuIcon = styled.div`
  width: 24px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease;
  }
  
  &::before {
    top: -8px;
  }
  
  &::after {
    top: 8px;
  }
  
  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: transparent;
      
      &::before {
        transform: rotate(45deg);
        top: 0;
      }
      
      &::after {
        transform: rotate(-45deg);
        top: 0;
      }
    `}
`;