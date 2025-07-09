import styled from 'styled-components';

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryDark} 100%);
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:rgba(255,255,255,0.1);stop-opacity:1" /><stop offset="100%" style="stop-color:rgba(255,255,255,0);stop-opacity:1" /></radialGradient></defs><circle cx="200" cy="200" r="100" fill="url(%23a)" /><circle cx="800" cy="300" r="150" fill="url(%23a)" /><circle cx="400" cy="700" r="80" fill="url(%23a)" /></svg>');
  background-size: cover;
  background-position: center;
  opacity: 0.1;
`;

export const HeroContent = styled.div`
  max-width: 600px;
  z-index: 1;
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 1rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.h2`
  font-family: 'Avenir', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.lightGray};
  margin: 0 0 1.5rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

export const HeroText = styled.p`
  font-family: 'Avenir', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.lightGray};
  margin: 0 0 2rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
    flex-direction: column;
  }
`;