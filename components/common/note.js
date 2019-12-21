/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props => (
  <aside
    {...props}
    sx={{
      fontFamily: 'heading',
      fontSize: 1,
      color: 'text',
      padding: 3,
      bg: 'highlight',
      borderRadius: 5,
      wordBreak:'break-word',
      borderLeft: t => `8px solid ${t.colors.primary}`,
      p: {
        m: 0,
      },
      variant: 'block.default'
    }}
  />
)