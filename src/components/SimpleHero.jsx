import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #000 100%);
  color: white;
  text-align: center;
  padding: 2rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: 'Cormorant Garamond', serif;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
  opacity: 0.9;
`;

const HeroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const Button = styled.button`
  background-color: #1a1a1a;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
    color: #1a1a1a;
  }
`;

export const SimpleHero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Bem-vindos à Igreja Dunamys</HeroTitle>
        <HeroSubtitle>Transformando vidas através do amor de Cristo</HeroSubtitle>
        <HeroText>
          Somos uma comunidade de fé comprometida em viver e compartilhar o evangelho,
          cultivando relacionamentos autênticos e impactando nossa cidade com o amor de Deus.
        </HeroText>
        <Button>Conheça nossa história</Button>
        <Button>Ver programação</Button>
      </HeroContent>
    </HeroContainer>
  );
};