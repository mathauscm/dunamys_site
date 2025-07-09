import styled from 'styled-components';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryDark} 100%);
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 2rem;
  margin-top: 80px;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 1rem 0;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0 0 1.5rem 0;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0 0 2rem 0;
  opacity: 0.8;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 600;
  padding: 16px 32px;
  font-size: 1.125rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 2px solid ${({ theme }) => theme.colors.white};
  
  ${({ variant }) => variant === 'primary' ? `
    background-color: white;
    color: #1a1a1a;
    
    &:hover {
      background-color: transparent;
      color: white;
    }
  ` : `
    background-color: transparent;
    color: white;
    
    &:hover {
      background-color: white;
      color: #1a1a1a;
    }
  `}
`;

export function Hero() {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroTitle>Bem-vindos à Igreja Dunamys</HeroTitle>
        <HeroSubtitle>Transformando vidas através do amor de Cristo</HeroSubtitle>
        <HeroText>
          Somos uma comunidade de fé comprometida em viver e compartilhar o evangelho,
          cultivando relacionamentos autênticos e impactando nossa cidade com o amor de Deus.
        </HeroText>
        <ButtonGroup>
          <Button variant="primary">Conheça nossa história</Button>
          <Button variant="outline">Ver programação</Button>
        </ButtonGroup>
      </HeroContent>
    </HeroContainer>
  );
}