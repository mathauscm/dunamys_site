import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    background-color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    line-height: 1.3;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  h6 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  p {
    margin-bottom: 1rem;
  }

  ul, ol {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    padding-left: 1rem;
    margin: 1rem 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  code {
    background-color: ${({ theme }) => theme.colors.lightGray};
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
  }

  pre {
    background-color: ${({ theme }) => theme.colors.lightGray};
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1rem 0;
    
    code {
      background: none;
      padding: 0;
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    h1 {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }

    h4 {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }
`;