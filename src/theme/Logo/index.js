import styled from 'styled-components'

const LogoImage = styled.div`
  flex: 1;  
  display: "flex";
  flex-wrap: "wrap";
  flex-direction: "row";
  justify-content: "center";
  align-items: center;
`

export const Logo = () => {
  return <LogoImage>
    &lt;C0nst3ll4t10/&gt;
  </LogoImage>
}