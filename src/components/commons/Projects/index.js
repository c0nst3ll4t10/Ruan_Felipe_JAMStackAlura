/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Card from '../Card';
import SectionTitle from '../SectionTitle';
import { WrapperProjects } from './style/WrapperProjects';
import { Grid } from '../../layout/Grid';

const Projects = () => (
  <WrapperProjects
    backgroundImage="url(/images/blueWaves.png)"
    backgroundSize="cover"
  >
    <Grid.Container
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      width="288px"
      height="350px"
    >
      <Grid.Col
        justifyContent="center"
        alignItems="center"
      >
        <Grid.Row
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <SectionTitle />
        </Grid.Row>
        <Grid.Row
          display="block"
          textAlign="-webkit-center"
          margin={{ xs: '0', md: '0 0 64px' }}
        >
          <Grid.Col
            margin={{ xs: '0 0 64px', md: '0' }}
          >
            <Card img="instalura" title="instalura" url="https://instalura-base-c0nst3ll4t10.vercel.app/" />
          </Grid.Col>
        </Grid.Row>
      </Grid.Col>
    </Grid.Container>
  </WrapperProjects>
);

export default Projects;