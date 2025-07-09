import styled from 'styled-components';

export const AboutContainer = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const AboutTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`;

export const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
`;