import styled from 'styled-components';

export const SuperClassContainer = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.black} 100%);
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;

  &::before {
    content: '📖';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 400px;
    opacity: 0.02;
    z-index: 0;
  }
`;

export const SuperClassHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
  z-index: 1;
`;

export const SuperClassIcon = styled.div`
  font-size: 3rem;
`;

export const SuperClassBadge = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: 2px;
`;

export const SuperClassContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const SuperClassTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const SuperClassSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const SuperClassDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  strong {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SuperClassHighlight = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;