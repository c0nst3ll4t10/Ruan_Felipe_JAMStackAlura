/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable eol-last */
import { Logo } from '../../../theme/Logo';
import NavBar from './NavBar';
import { HeaderWrapper } from './style/HeaderWrapper';

const Header = () => (
  <HeaderWrapper>
    <HeaderWrapper.LeftSide>
      <Logo />
    </HeaderWrapper.LeftSide>
    <HeaderWrapper.RightSide>
      <NavBar />
    </HeaderWrapper.RightSide>
  </HeaderWrapper>
);

export default Header;