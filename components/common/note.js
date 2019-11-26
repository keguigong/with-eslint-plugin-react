/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props => (
  <aside
    {...props}
    sx={{
      // fontWeight: 'bold',
      fontFamily: 'heading',
      padding: 3,
      bg: 'highlight',
      borderRadius: 5,
      borderLeft: t => `8px solid ${t.colors.primary}`,
      p: {
        m: 0,
      },
      variant: 'block.default'
    }}
  />
)