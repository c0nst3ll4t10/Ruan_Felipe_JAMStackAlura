/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.img`
  width: 250px;
  height: 165px;
`;

export const CardImage = ({ img }) => (
  <Image src={`/images/${img}.png`} />
);

CardImage.propType = {
  img: PropTypes.string.isRequired,
};