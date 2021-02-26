/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable eol-last */
import Text from '../../../foundations/Text';

const NavBar = () => (
  <div>
    <Text
      tag="a"
      margin="0 10px"
      href="/about"
    >
      Sobre mim
    </Text>
    <Text
      tag="a"
      margin="0 10px"
      textDecoration="none"
      href="/contact"
    >
      Contato
    </Text>
  </div>
);

export default NavBar;