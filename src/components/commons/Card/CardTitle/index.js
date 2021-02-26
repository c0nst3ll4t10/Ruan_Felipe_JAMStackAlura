/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable eol-last */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';
import Text from '../../../foundations/Text';

export const CardTitle = ({ title }) => (
  <Text
    variant="cardTitle"
    tag="p"
    margin="0"
    color="tertiary.main.contrastText"
  >
    {title}
  </Text>
);

CardTitle.propType = {
  title: PropTypes.string.isRequired,
};