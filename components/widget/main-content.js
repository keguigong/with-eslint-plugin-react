/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Content } from '../common'
export default ({
  flex,
  ...rest
}) => <div {...rest} sx={{
  minHeight: '100vh',
  flex: 1,
  flexGrow: 1,
  overflow: 'auto',
  p: 30,
  pb: 0,
  backgroundColor: 'background',
  ...(flex && {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  })
}} />