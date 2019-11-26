/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Box } from './index'

export default ({
  column,
  center,
  ...rest
}) => {
  const props = {
    ...rest
  }

  return (
    <Box
      {...props}
      sx={{
        ...{ display: 'flex' },
        ...(column && { flexDirection: 'column' }),
        ...(center && { alignItems: 'center' }),
        ...props.sx
      }}
    />
  )
}