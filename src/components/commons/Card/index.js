/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import { Grid } from '../../layout/Grid';
import { CardImage } from './CardImage';
import { CardTitle } from './CardTitle';
import { CardLink } from './CardLink';

const Card = ({ img, title, url }) => (
  <CardLink
    flex="1"
    display="flex"
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
);

Card.propType = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;