/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box } from '@theme-ui/components'

export default ({
  sx,
  ...rest
}) => <Box {...rest} sx={{
  backgroundColor: 'background',
  flex: 1,
  flexGrow: 1,
  p: 30,
  ...sx
}} />