import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Logo>Dunamys</Logo>
        <Nav>
          <NavLink href="#home">Início</NavLink>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#services">Ministérios</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </Nav>
      </Container>
    </HeaderContainer>
  );
}