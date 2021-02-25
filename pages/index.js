import Cover from '../src/components/commons/Cover';
import Footer from '../src/components/commons/Footer';
import Header from '../src/components/commons/Header';
import { Box } from '../src/components/layout/Box';

const Home = () => {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Cover />
      <Header />
      <Footer />
    </Box>
  )
}

export default Home