/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Box } from '.'

export default ({
  column,
  center,
  centerAlign,
  centerJustify,
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
        ...(centerAlign && { alignItems: 'center' }),
        ...(centerJustify && { justifyContent: 'center' }),
        ...(center && { alignItems: 'center', justifyContent: 'center' }),
        ...props.sx
      }}
    />
  )
}