/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components';
import theme from '../index';

export const breakpointsMedia = (cssByBreakpoints) => {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  return breakpointsNames.map((breakpointName) => css`
      @media screen and (min-width: ${theme.breakpoints[breakpointName]}px) {
        ${cssByBreakpoints[breakpointName]}
      }
    `);
};