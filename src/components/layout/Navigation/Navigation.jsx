import React from 'react';
import { Button } from '../../common';
import { NavigationContainer, NavigationList, NavigationItem, NavigationLink } from './Navigation.styles';

const navigationItems = [
  { label: 'Início', href: '#home' },
  { label: 'Somos', href: '#about' },
  { label: 'Reuniões', href: '#meetings' },
  { label: 'SuperClasse', href: '#superclass' },
  { label: 'Generosidade', href: '#generosity' },
  { label: 'Contato', href: '#contact' },
];

export const Navigation = ({ isOpen }) => {
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavigationContainer isOpen={isOpen}>
      <NavigationList>
        {navigationItems.map((item) => (
          <NavigationItem key={item.href}>
            <NavigationLink
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </NavigationLink>
          </NavigationItem>
        ))}
        <NavigationItem>
          <Button variant="primary" size="small">
            Visite-nos
          </Button>
        </NavigationItem>
      </NavigationList>
    </NavigationContainer>
  );
};