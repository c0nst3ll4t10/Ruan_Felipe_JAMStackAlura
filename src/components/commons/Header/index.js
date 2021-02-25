import { Logo } from "../../../theme/Logo"
import NavBar from "./NavBar"
import { HeaderWrapper } from "./style/HeaderWrapper"

const Header = () => (
  <HeaderWrapper>
    <HeaderWrapper.LeftSide>
      <Logo />
    </HeaderWrapper.LeftSide>
    <HeaderWrapper.RightSide>
      <NavBar />
    </HeaderWrapper.RightSide>
  </HeaderWrapper>
)

export default Header