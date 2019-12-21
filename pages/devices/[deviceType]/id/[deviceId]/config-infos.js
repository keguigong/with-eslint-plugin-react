/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { connect } from 'react-redux'

import { Flex } from '../../../../../components/common'
import { MainContent } from '../../../../../components/widget'

import { LeftSider } from '.'
import PowerSwapConfig from '../../../../../components/realtime/power-swap-config'

const Home = ({
  deviceType,
  deviceId,
  currentPage,
  ...rest
}) => {
  return <Flex>
    <LeftSider {...{deviceType, deviceId, currentPage}}/>
    <MainContent flex>
      <Styled.h1>配置信息</Styled.h1>
      {deviceType === 'PowerSwap' && <PowerSwapConfig deviceId={deviceId}/>}
    </MainContent>
  </Flex>
}

Home.getInitialProps = ({ query: { deviceType, deviceId } }) => {
  const currentPage = 'configInfos'
  return { deviceType, deviceId, currentPage }
}

export default connect(state => state)(Home)