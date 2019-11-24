/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import { Button } from './common'
const modes = [
  'light',
  'dark',
  'pink',
]

export default props => {
  const [ mode, setMode ] = useColorMode()
  return (
    <Button
      primary
      {...props}
      onClick={e => {
        const index = modes.indexOf(mode)
        const next = modes[(index + 1) % modes.length]
        setMode(next)
      }}
    >{mode.toUpperCase()}</Button>
  )
}