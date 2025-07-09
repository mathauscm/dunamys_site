import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #1a1a1a;
  color: white;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const SimpleHeader = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo>Dunamys</Logo>
        <Nav>
          <NavLink href="#home">Início</NavLink>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </Nav>
      </Container>
    </HeaderContainer>
  );
};