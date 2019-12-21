/** @jsx jsx */
import { jsx, Styled} from 'theme-ui'

import { Flex } from '../components/common'
import { MainContent } from '../components/widget'
import { Header } from '../components/header'
import { LeftSiderWrapper, SiderItem, Sider } from '../components/sider'
import { Favorite } from '../components/favorite'

const WatchPage = () => {
  return <Flex>
    <LeftSiderWrapper>
      <Header route='/' />
      <Sider bottomLink={false}>
        <SiderItem href='/' type='favorite' />
        <SiderItem isSelected href='/watch' type='watch' />
        <SiderItem href='/recent' type='recent' />
      </Sider>
    </LeftSiderWrapper>
    <MainContent flex>
      <Styled.h1>我的关注</Styled.h1>
      <Favorite suffix='watch'/>
    </MainContent>
  </Flex>
}

export default WatchPage