/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ${normalize}
  
  html,
  body {
    display: flex;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;