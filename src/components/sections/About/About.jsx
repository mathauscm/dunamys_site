import React from 'react';
import { Container, Card } from '../../common';
import { AboutContainer, AboutContent, AboutTitle, AboutText } from './About.styles';

export const About = () => {
  return (
    <AboutContainer id="about">
      <Container>
        <AboutContent>
          <AboutTitle>Nossa História</AboutTitle>
          <AboutText>
            A Igreja Dunamys nasceu do coração de Deus com o propósito de transformar vidas
            através do amor de Cristo. Desde nossa fundação, temos sido uma comunidade
            comprometida em viver e compartilhar o evangelho.
          </AboutText>
          <Card>
            <AboutText>
              Nossa missão é ser uma família de fé que impacta nossa cidade e nação
              através do poder transformador do evangelho de Jesus Cristo.
            </AboutText>
          </Card>
        </AboutContent>
      </Container>
    </AboutContainer>
  );
};