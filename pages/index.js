/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Content } from '../components/common'
import Header from './header'
import Sider from './sider'
import Navigator from '../components/nav/navigator'

import ColorToggle from '../components/color-mode-toggle'

export default () => (
  <Flex sx={{ height: '100vh' }}>
    <Header />
    <Sider />
    <Content>
      <ColorToggle/>
      <Navigator />
    </Content>
  </Flex>
)