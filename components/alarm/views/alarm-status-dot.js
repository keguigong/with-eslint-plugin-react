/** @jsx jsx */
import { jsx } from 'theme-ui'

const AlarmStateDot = ({
  height = 8,
  color = 'red',
  isOn = false,
  ...rest
}) => {
  return <div
    {...rest}
    sx={{
      backgroundColor: isOn ? `icon.${color}` : '',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: isOn ? `icon.${color}` : 'icon.disabled',
      height: height,
      width: height,
      borderRadius: height / 2,
      margin: '0 auto'
    }}
  />
}

export default AlarmStateDot