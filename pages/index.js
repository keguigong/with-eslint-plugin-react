/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Content } from '../components/common'
import Header from './header'
import Sider from './sider'
import Navigator from '../components/nav/navigator'

export default () => (
  <Flex sx={{ height: '100vh' }}>
    <Header />
    <Sider />
    <Content>
      <Navigator />
    </Content>
  </Flex>
)