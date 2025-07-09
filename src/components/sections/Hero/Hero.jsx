import React from 'react';
import { Container, Button } from '../../common';
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroText,
  HeroActions,
  HeroBackground,
} from './Hero.styles';

export const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer id="home">
      <HeroBackground />
      <Container>
        <HeroContent>
          <HeroTitle>
            Seja Bem-Vindo à sua Família!
          </HeroTitle>
          <HeroSubtitle>
            Comunidade Cristã Dunamys
          </HeroSubtitle>
          <HeroText>
            Somos uma Comunidade Cristã que cremos! Impossibilidades se tornam possibilidades pela Fé.
            É fato: tudo é possível para aquele que crê!
          </HeroText>
          <HeroActions>
            <Button
              variant="primary"
              size="large"
              onClick={() => scrollToSection('#about')}
            >
              Conheça nossa missão
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => scrollToSection('#meetings')}
            >
              Ver reuniões
            </Button>
          </HeroActions>
        </HeroContent>
      </Container>
    </HeroContainer>
  );
};