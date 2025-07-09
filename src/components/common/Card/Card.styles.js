import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  
  ${({ elevated }) =>
    elevated &&
    css`
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    `}
  
  ${({ hoverable }) =>
    hoverable &&
    css`
      cursor: pointer;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px -8px rgba(0, 0, 0, 0.2);
      }
    `}
`;

export const CardHeader = styled.div`
  padding: 1.5rem 1.5rem 0;
`;

export const CardTitle = styled.h3`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
`;