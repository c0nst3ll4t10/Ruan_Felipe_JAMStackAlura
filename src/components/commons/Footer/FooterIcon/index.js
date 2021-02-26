/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
import PropTypes from 'prop-types';

export const FooterIcon = ({ icon, user }) => (
  <a href={`https://${icon}.com/${icon === 'linkedIn' ? 'in/' : ''}${user}`} target="_blank">
    <img src={`/images/${icon}Icon.svg`} />
  </a>
);

FooterIcon.propType = {
  icon: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};