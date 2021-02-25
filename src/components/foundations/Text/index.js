import PropTypes from 'prop-types'
import styled  from 'styled-components'
import get from 'lodash/get';
import { propToStyle } from '../../../theme/utils/propToStyle'

const TextBase = styled.span`
  ${(props) => props.theme.typographyVariants[props.variant]}
  color: ${(props) => get(props.theme, `palette.${props.color}`)};
  ${propToStyle('textAlign')}
  ${propToStyle('margin')}
`

const Text = ({
  tag, variant, children, ...props
}) => (
  <TextBase
    as={tag}
    variant={variant}
    {...props}
  >
    {children}
  </TextBase>
)

Text.propType = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
}

export default Text
