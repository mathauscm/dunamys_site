import React from 'react';
import { Container } from '../../common';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterText,
  FooterLink,
  FooterBottom,
  SocialLinks,
  SocialLink,
} from './Footer.styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <FooterTitle>Comunidade Cristã Dunamys</FooterTitle>
            <FooterText>
              Uma comunidade de fé comprometida em servir a Deus e as pessoas através dos ensinamentos de Cristo, 
              treinando líderes para propagar o poderoso Evangelho.
            </FooterText>
            <FooterText>
              <strong>DUNAMYS</strong> - Palavra grega que significa <strong>PODER</strong>
            </FooterText>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Localização</FooterTitle>
            <FooterText>
              <strong>Tianguá - CE</strong><br />
              Serra da Ibiapaba
            </FooterText>
            <FooterText>
              <strong>Ubajara - CE</strong><br />
              Serra da Ibiapaba
            </FooterText>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Horários dos Cultos</FooterTitle>
            <FooterText>
              <strong>Domingos</strong>
            </FooterText>
            <FooterText>
              9h30 - Tianguá<br />
              19h - Ubajara
            </FooterText>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Siga-nos</FooterTitle>
            <SocialLinks>
              <SocialLink href="#" aria-label="Instagram">
                📷
              </SocialLink>
              <SocialLink href="#" aria-label="Facebook">
                📘
              </SocialLink>
              <SocialLink href="#" aria-label="YouTube">
                📹
              </SocialLink>
            </SocialLinks>
            <FooterText style={{textAlign: 'center', marginTop: '1rem'}}>
              @dunamysubajara
            </FooterText>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <FooterText>
            © 2024 Comunidade Cristã Dunamys. Todos os direitos reservados.
          </FooterText>
          <FooterText>
            Desenvolvido com ❤️ para o Reino de Deus
          </FooterText>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};