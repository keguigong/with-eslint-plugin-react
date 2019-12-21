/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Motion, spring } from 'react-motion'

export default () => <Motion
  defaultStyle={{
    x: 0
  }}
  style={{
    x: spring(10)
  }}
>
  {value => <div
    sx={{
      width: value.x * 100,
      backgroundColor: 'primary'
    }}
  >{Math.floor(value.x)}</div>}
</Motion>