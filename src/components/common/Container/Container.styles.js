import styled, { css } from 'styled-components';

const maxWidths = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  full: '100%',
};

export const ContainerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  
  ${({ maxWidth }) => css`
    max-width: ${maxWidths[maxWidth]};
  `}
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 2rem;
  }
`;