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
            <FooterTitle>Igreja Dunamys</FooterTitle>
            <FooterText>
              Uma igreja comprometida com a transformação de vidas através do amor de Cristo.
            </FooterText>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Contato</FooterTitle>
            <FooterText>
              <FooterLink href="mailto:contato@dunamys.com">
                contato@dunamys.com
              </FooterLink>
            </FooterText>
            <FooterText>
              <FooterLink href="tel:+5511999999999">
                (11) 99999-9999
              </FooterLink>
            </FooterText>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Endereço</FooterTitle>
            <FooterText>
              Rua das Flores, 123<br />
              Bairro Centro<br />
              São Paulo - SP
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
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <FooterText>
            © 2024 Igreja Dunamys. Todos os direitos reservados.
          </FooterText>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};