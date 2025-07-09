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
            Bem-vindos à Igreja Dunamys
          </HeroTitle>
          <HeroSubtitle>
            Transformando vidas através do amor de Cristo
          </HeroSubtitle>
          <HeroText>
            Somos uma comunidade de fé comprometida em viver e compartilhar o evangelho,
            cultivando relacionamentos autênticos e impactando nossa cidade com o amor de Deus.
          </HeroText>
          <HeroActions>
            <Button
              variant="primary"
              size="large"
              onClick={() => scrollToSection('#about')}
            >
              Conheça nossa história
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => scrollToSection('#schedule')}
            >
              Ver programação
            </Button>
          </HeroActions>
        </HeroContent>
      </Container>
    </HeroContainer>
  );
};