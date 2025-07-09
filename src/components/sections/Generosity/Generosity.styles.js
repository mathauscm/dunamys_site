import styled from 'styled-components';

export const GenerosityContainer = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.black} 100%);
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '💝';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 400px;
    opacity: 0.02;
    z-index: 0;
  }
`;

export const GenerosityHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  position: relative;
  z-index: 1;
`;

export const GenerosityTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const GenerositySubtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.accent};
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const GenerosityVerse = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
`;

export const GenerosityContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const GenerosityDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  strong {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const QRCodeContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: ${({ theme }) => theme.spacing.xl} auto;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

export const QRCodePlaceholder = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const QRCodeText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
  line-height: 1.4;
`;

export const PixInfo = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

export const PixLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const PixCode = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: monospace;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(255, 107, 53, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const PixTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;