/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box } from '@theme-ui/components'

export default ({
  ...rest
}) => <Box {...rest} sx={defaultStyles} />

const defaultStyles = {
  backgroundColor: 'background', 
  flex: 1,
  overflow: 'auto'
}