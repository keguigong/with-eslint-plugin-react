/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import { Button } from './common'
import { Light, Dark } from './icon/theme'

const modes = [
  'light',
  'dark',
]

export default props => {
  const [mode, setMode] = useColorMode()
  return (
    <Button
      overrideCSS={{
        position: 'fixed',
        bottom: 20,
        right: 50,
        width: 44,
        height: 44,
        padding: 0,
        borderRadius: 22,
        justifyContent: 'center'
      }}
      icon={mode === 'light' ? <Dark /> : <Light />}
      primary
      {...props}
      onClick={e => {
        const index = modes.indexOf(mode)
        const next = modes[(index + 1) % modes.length]
        setMode(next)
      }}
    />
  )
}