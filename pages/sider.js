/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Box, Flex, Container } from '@theme-ui/components'

import ThemeProviderWrapper from '../components/theme-provider-wrapper'
import ColorToggleButton from '../components/color-mode-toggle'
import { Favorite, Watch, Recent } from '../components/icon/general'

import Item from '../components/sider/sider-item'
import BottomLink from '../components/sider/bottom-link'

export default () => (
  <ThemeProviderWrapper>
    <Box sx={{
      bg: 'background',
    }}>
      <Flex sx={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        width: 200,
        height: '100vh',
        pt: 40,
        pb: 20
      }}>
        <Flex
          sx={{
            flexDirection: 'column'
          }}
        >
          <Item isSelected icon={<Favorite />}>我的收藏</Item>
          <Item icon={<Watch />}>我的关注</Item>
          <Item icon={<Recent />}>最近访问</Item>
          <Item>无图标标题</Item>
        </Flex>
        <BottomLink>
          <Item icon={<Favorite />} short>我的收藏</Item>
          <Item icon={<Watch />} short>我的关注</Item>
          <Item icon={<Recent />} short>我的关注</Item>
        </BottomLink>
      </Flex>
    </Box>
  </ThemeProviderWrapper>
)