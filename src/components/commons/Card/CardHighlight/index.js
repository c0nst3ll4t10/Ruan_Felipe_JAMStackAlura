/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable eol-last */
import PropTypes from 'prop-types';
import { Box } from '../../../layout/Box';
import { Grid } from '../../../layout/Grid';
import { CardLink } from '../CardLink';
import { CardImage } from '../CardImage';
import { CardTitle } from '../CardTitle';
import { CardText } from '../CardText';

const CardHighlight = ({ img, title, url, text }) => (
  <Box>
    <CardLink
      flex="1"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      width={{ xs: '288px', md: '600px' }}
      height="240px"
      boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
      transition="0.3s"
      borderRadius="5px"
      backgroundColor="#3203b3"
      target="_blank"
      textDecoration="none"
      href={url}
      display={{ xs: 'none', md: 'block' }}
    >
      <Grid.Row
        paddingTop="10px"
        justifyContent="center"
        alignItems="center"
      >
        <CardText text="Destaque" color="primary.main.color" />
      </Grid.Row>
      <Grid.Row
        flex="1"
        width="100%"
        height="100%"
      >
        <Grid.Col
          width="50%"
          height="100%"
          margin="16px"
        >
          <Grid.Row
            height="100%"
          >
            <CardImage img={img} />
          </Grid.Row>
        </Grid.Col>
        <Grid.Col
          width="50%"
          height="100%"
        >
          <Grid.Row
            margin={{ xs: '0', md: '30px' }}
            textAlign={{ xs: 'center', md: 'initial' }}
          >
            <CardTitle title={title} />
          </Grid.Row>
          <Grid.Row
            margin="30px"
            textAlign="initial"
          >
            <CardText text={text} />
          </Grid.Row>
        </Grid.Col>
      </Grid.Row>
    </CardLink>
    <Box
      display={{ xs: 'flex', md: 'none' }}
    >
      <CardText text="Destaque" color="primary.main.color" />
    </Box>
    <CardLink
      flex="1"
      display={{ xs: 'flex', md: 'none' }}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      width="288px"
      height="250px"
      boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
      transition="0.3s"
      borderRadius="5px"
      backgroundColor="#3203b3"
      target="_blank"
      textDecoration="none"
      href={url}
    >
      <Grid.Row
        height="25px"
        paddingTop="15px"
      >
        <CardImage img={img} />
      </Grid.Row>
      <Grid.Row
        paddingTop="150px"
      >
        <Grid.Col
          display="flex"
          flexFlow="column"
        >
          <CardTitle title={title} />
        </Grid.Col>
      </Grid.Row>
    </CardLink>
  </Box>
);

CardHighlight.propType = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardHighlight;