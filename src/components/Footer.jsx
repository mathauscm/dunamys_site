import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  padding: 3rem 0 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const FooterText = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.8;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

export function Footer() {
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
              <SocialLink href="#" aria-label="Instagram">📷</SocialLink>
              <SocialLink href="#" aria-label="Facebook">📘</SocialLink>
              <SocialLink href="#" aria-label="YouTube">📹</SocialLink>
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
}