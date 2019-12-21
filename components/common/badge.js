/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Badge } from '@theme-ui/components'

export default ({
  secondary,
  ...rest
}) => <Badge sx={{
  ...(secondary && {
    backgroundColor: 'secondary'
  })
}} {...rest} />