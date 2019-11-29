/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Button } from '../common'
import { Filter } from '../icon/general'

export default ({
  white,
  height,
  icon,
  overrideCSS,
  children,
  ...rest
}) => {
  const props = {
    icon: icon || <Filter />
  }
  return <Button
    {...rest}
    icon={props.icon}
    overrideCSS={{
      ...{
        p: 0,
        height: 36,
        width: 36,
        justifyContent: 'center'
      },
      ...(height && {
        width: height,
        height: height
      }),
      ...overrideCSS,
      ...(white && {
        backgroundColor: 'bright',
        border: 0
      })
    }} />
}