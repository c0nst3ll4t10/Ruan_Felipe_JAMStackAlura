import styled from 'styled-components'
import { propToStyle } from '../../../theme/utils/propToStyle'

export const Box = styled.div`
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
`