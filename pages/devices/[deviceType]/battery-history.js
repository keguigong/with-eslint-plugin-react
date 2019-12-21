/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { Flex } from '../../../components/common'
import { MainContent } from '../../../components/widget'
import BatterySearch from '../../../components/realtime/history/battery-search'
import { LeftSider } from '.'

const Home = ({
  currentPage,
  deviceType,
  ...rest
}) => {
  return <Flex>
    <LeftSider {...{ deviceType, currentPage }} />
    <MainContent>
      <Styled.h1>电池历史信息</Styled.h1>
      <BatterySearch deviceType={deviceType} />
    </MainContent>

  </Flex>
}

Home.getInitialProps = ({ query: { deviceType } }) => {
  const currentPage = 'batteryHistory'
  return { deviceType, currentPage }
}

export default Home