/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '@theme-ui/components'

import { Favorite, Watch, Recent } from '../components/icon/general'
import ThemeProviderWrapper from '../components/theme-provider-wrapper'
import Item from '../components/sider/sider-item'
import BottomLink from '../components/sider/bottom-link'

var isCollapsed = false

export default () => (
  <ThemeProviderWrapper>
    <Flex sx={{
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'bright',
      width: isCollapsed ? 64 : 200,
      height: '100vh',
      pt: 40,
      pb: 20
    }}>
      <Flex
        sx={{
          flexDirection: 'column'
        }}
      >
        <Item isCollapsed={isCollapsed} isSelected icon={<Favorite />}>我的收藏</Item>
        <Item isCollapsed={isCollapsed} icon={<Watch />}>我的关注</Item>
        <Item isCollapsed={isCollapsed} isDisabled icon={<Recent />}>最近访问</Item>
        <Item isCollapsed={isCollapsed}>无图标标题</Item>
      </Flex>
      <BottomLink isCollapsed={isCollapsed}>
        <Item icon={<Favorite />} short>我的收藏</Item>
        <Item onClick={() => console.log('asdasd')} icon={<Watch />} short>我的关注</Item>
        <Item icon={<Recent />} short>我的关注</Item>
      </BottomLink>
    </Flex>
  </ThemeProviderWrapper>
)