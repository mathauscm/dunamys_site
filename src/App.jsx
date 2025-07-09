import styled from 'styled-components';

// Definindo o tema inline para evitar problemas
const theme = {
  colors: {
    primary: '#1a1a1a',
    white: '#ffffff',
    light: '#f8f9fa',
    text: '#212529',
    textSecondary: '#6c757d',
  },
  fonts: {
    primary: "'Cormorant Garamond', serif",
    secondary: "'Arial', sans-serif",
  }
};

const GlobalStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${theme.fonts.secondary};
    line-height: 1.6;
    color: ${theme.colors.text};
  }
`;

const Header = styled.header`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-family: ${theme.fonts.primary};
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, #000 100%);
  color: ${theme.colors.white};
  text-align: center;
  padding: 2rem;
  margin-top: 80px;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.primary};
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 1rem 0;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0 0 1.5rem 0;
  opacity: 0.9;
`;

const HeroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0 0 2rem 0;
  opacity: 0.8;
`;

const Button = styled.button`
  font-weight: 600;
  padding: 16px 32px;
  font-size: 1.125rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 2px solid ${theme.colors.white};
  margin: 0 0.5rem;
  
  background-color: ${props => props.primary ? theme.colors.white : 'transparent'};
  color: ${props => props.primary ? theme.colors.primary : theme.colors.white};
  
  &:hover {
    background-color: ${props => props.primary ? 'transparent' : theme.colors.white};
    color: ${props => props.primary ? theme.colors.white : theme.colors.primary};
  }
`;

const About = styled.section`
  padding: 5rem 0;
  background-color: ${theme.colors.light};
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-family: ${theme.fonts.primary};
  font-size: 2.5rem;
  color: ${theme.colors.text};
  margin-bottom: 2rem;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const Footer = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 2rem 0;
  text-align: center;
`;

function App() {
  return (
    <GlobalStyle>
      <Header>
        <Container>
          <Logo>Dunamys</Logo>
          <Nav>
            <NavLink href="#home">Início</NavLink>
            <NavLink href="#about">Sobre</NavLink>
            <NavLink href="#services">Ministérios</NavLink>
            <NavLink href="#contact">Contato</NavLink>
          </Nav>
        </Container>
      </Header>
      
      <Hero id="home">
        <HeroContent>
          <HeroTitle>Bem-vindos à Igreja Dunamys</HeroTitle>
          <HeroSubtitle>Transformando vidas através do amor de Cristo</HeroSubtitle>
          <HeroText>
            Somos uma comunidade de fé comprometida em viver e compartilhar o evangelho,
            cultivando relacionamentos autênticos e impactando nossa cidade com o amor de Deus.
          </HeroText>
          <Button primary>Conheça nossa história</Button>
          <Button>Ver programação</Button>
        </HeroContent>
      </Hero>
      
      <About id="about">
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
      </About>
      
      <Footer>
        <Container>
          <p>© 2024 Igreja Dunamys. Todos os direitos reservados.</p>
          <p>Rua das Flores, 123 - Centro - São Paulo/SP</p>
          <p>contato@dunamys.com | (11) 99999-9999</p>
        </Container>
      </Footer>
    </GlobalStyle>
  );
}

export default App;