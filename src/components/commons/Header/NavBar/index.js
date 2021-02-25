import Text from "../../../foundations/Text"

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
)

export default NavBar