/** @jsx jsx */
import { jsx } from 'theme-ui'

import ThemeProviderWrapper from '../components/theme-provider-wrapper'
import { Flex, Content } from '../components/common'
import Header from './header'
import Sider from './sider'
import Navigator from '../components/nav/navigator'
import { Avatar } from '../components/widget'

export default () => (
  <ThemeProviderWrapper>
    <Flex sx={{ height: '100vh' }}>
      <Header />
      <Sider />
      <Content>
        <Navigator />
      </Content>
    </Flex>
  </ThemeProviderWrapper>
)