/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { propToStyle } from '../../../../theme/utils/propToStyle';

export const WrapperProjects = styled.div`
  background-color: ${({ theme }) => theme.palette.projects.main.color};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${propToStyle('backgroundSize')}
  ${propToStyle('backgroundImage')}
`;