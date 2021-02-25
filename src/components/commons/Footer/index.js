import styled from 'styled-components'
import { FooterIcon } from './FooterIcon'

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.footer.main.color};

  img {
    width: 25px;
  }

  a {
    color: ${({ theme }) => theme.palette.primary.main.contrastText};
    text-decoration: none;
    padding: 5px;
    background-color: ${({ theme }) => theme.palette.footer.icon.color};
  }
`

const Footer = (props) => {
  return (
    <FooterWrapper {...props}>
      <FooterIcon user="c0nst3ll4t10" icon="github" />
      <FooterIcon user="c0nst3ll4t10" icon="linkedIn" />
      <FooterIcon user="c0nst3ll4t10" icon="instagram" />
    </FooterWrapper>
  )
}

export default Footer