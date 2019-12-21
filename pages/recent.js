/** @jsx jsx */
import { jsx, Styled} from 'theme-ui'

import { Flex } from '../components/common'
import { MainContent } from '../components/widget'
import { Header } from '../components/header'
import { LeftSiderWrapper, SiderItem, Sider } from '../components/sider'
import { Favorite } from '../components/favorite'

const RecentPage = () => {
  return <Flex>
    <LeftSiderWrapper>
      <Header route='/' />
      <Sider bottomLink={false}>
        <SiderItem href='/' type='favorite' />
        <SiderItem href='/watch' type='watch' />
        <SiderItem isSelected href='/recent' type='recent' />
      </Sider>
    </LeftSiderWrapper>
    <MainContent flex>
      <Styled.h1>最近访问</Styled.h1>
      <Favorite suffix='favorite'/>
    </MainContent>
  </Flex>
}

export default RecentPage