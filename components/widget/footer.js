/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Content } from '../common'
export default ({
  sx,
  ...rest
}) => <Content {...rest} sx={{
  minHeight: '100vh',
  ...sx
}} />