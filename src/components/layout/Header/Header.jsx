import React, { useState } from 'react';
import { Container } from '../../common';
import { Navigation } from '../Navigation';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  MenuToggle,
  MenuIcon,
} from './Header.styles';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Container>
        <HeaderContent>
          <Logo>
            <h1>Dunamys</h1>
          </Logo>
          
          <Navigation isOpen={isMenuOpen} />
          
          <MenuToggle onClick={toggleMenu}>
            <MenuIcon isOpen={isMenuOpen} />
          </MenuToggle>
        </HeaderContent>
      </Container>
    </HeaderContainer>
  );
};