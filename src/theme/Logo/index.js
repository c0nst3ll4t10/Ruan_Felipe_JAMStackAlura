/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */
import styled from 'styled-components';

const LogoImage = styled.div`
  flex: 1;  
  display: "flex";
  flex-wrap: "wrap";
  flex-direction: "row";
  justify-content: "center";
  align-items: center;
`;

export const Logo = () => (
  <LogoImage>
    &lt;C0nst3ll4t10/&gt;
  </LogoImage>
);