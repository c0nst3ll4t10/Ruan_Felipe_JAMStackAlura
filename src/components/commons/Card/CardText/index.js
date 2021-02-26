/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable eol-last */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unneeded-ternary */
import PropTypes from 'prop-types';
import Text from '../../../foundations/Text';

export const CardText = ({ text, color }) => (
  <Text
    variant="cardText"
    tag="span"
    margin="0"
    color={color ? color : 'tertiary.main.contrastText'}
  >
    {text}
  </Text>
);

CardText.propType = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};