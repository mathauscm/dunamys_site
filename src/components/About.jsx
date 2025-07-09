import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.light};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

export function About() {
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
}