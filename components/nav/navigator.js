/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Button, Box } from '../common'

export default () => <Box>
  <Button link tag='link' href='/'>主页</Button>
  <Button link tag='link' href='input'>查看mdx</Button>
  <Button link tag='link' href='icons'>查看图标</Button>
  <Button link tag='link' href='buttons'>查看按钮</Button>
  <Button link tag='link' href='text'>查看文本</Button>
</Box>