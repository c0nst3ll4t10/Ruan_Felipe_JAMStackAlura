/* eslint-disable eol-last */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Cover from '../src/components/commons/Cover';
import Footer from '../src/components/commons/Footer';
import Header from '../src/components/commons/Header';
import Projects from '../src/components/commons/Projects';
import { Box } from '../src/components/layout/Box';

const Home = () => (
  <Box
    flex="1"
    display="flex"
    flexWrap="wrap"
    flexDirection="column"
  >
    <Cover />
    <Header />
    <Projects />
    <Footer />
  </Box>
);

export default Home;