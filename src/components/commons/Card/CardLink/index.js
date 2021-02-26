/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { propToStyle } from '../../../../theme/utils/propToStyle';

export const CardLink = styled.a`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('backgroundAttachment')}
  ${propToStyle('backgroundSize')}
  ${propToStyle('maxHeight')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('boxShadow')}
  ${propToStyle('transition')}
  ${propToStyle('borderRadius')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('target')}
  ${propToStyle('textDecoration')}
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,1);
  }
`;