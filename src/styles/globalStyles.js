import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  input {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  small {
    display: block;
  }

  button {
    display: block;
  }
  
  a {
    color: ${({ theme }) => theme.text};
  }
`;
