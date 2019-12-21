/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { Flex } from '../components/common'
import { MainContent } from '../components/widget'
import { Header } from '../components/header'
import { LeftSiderWrapper, SiderItem, Sider } from '../components/sider'
import { Favorite } from '../components/favorite'

const HomePage = () => {
  return <Flex>
    <LeftSiderWrapper>
      <Header route='/' />
      <Sider bottomLink={false}>
        <SiderItem isSelected href='/' type='favorite' />
        <SiderItem href='/watch' type='watch' />
        <SiderItem href='/recent' type='recent' />
      </Sider>
    </LeftSiderWrapper>
    <MainContent flex>
      <Styled.h1>我的收藏</Styled.h1>
      <Favorite />
    </MainContent>
  </Flex>
}

export default HomePage