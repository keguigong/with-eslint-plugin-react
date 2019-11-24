/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props => (
  <select
    id={props.name}
    {...props}
    sx={{
      fontFamily: 'heading',
      fontSize: [0, 1, 2],
      backgroundColor: 'white',
      borderRadius: 5,
      border: '1px solid #C6C9D3',
      height: 36,
      p: 2,
    }}
  />
)
