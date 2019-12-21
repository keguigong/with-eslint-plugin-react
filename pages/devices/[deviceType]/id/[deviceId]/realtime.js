/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { connect } from 'react-redux'

import { Flex } from '../../../../../components/common'
import { MainContent } from '../../../../../components/widget'

import PowerChargerRealtime from '../../../../../components/realtime/power-charger'
import PowerSwapRealtime from '../../../../../components/realtime/power-swap'
import { LeftSider } from '.'

const Home = ({
  gunId,
  deviceType,
  deviceId,
  currentPage,
  ...rest
}) => {
  return <Flex>
    <LeftSider {...{ deviceType, deviceId, currentPage }} />
    <MainContent flex>
      <Styled.h1>实时信息</Styled.h1>
      {deviceType === 'PowerCharger' && <PowerChargerRealtime deviceId={deviceId} gunId={gunId} />}
      {deviceType === 'PowerSwap' && <PowerSwapRealtime deviceId={deviceId}/>}
    </MainContent>
  </Flex>
}

Home.getInitialProps = async ({ query: { deviceType, deviceId } }) => {
  const gunId = await fetch(`http://10.110.93.35:8081/powerCharger/gunList?device_id=${deviceId}`)
    .then(res => res.json())
    .then(res => res.data.gun_list)
  const currentPage = 'realtime'
  return { deviceType, deviceId, gunId, currentPage }
}

export default connect(state => state)(Home)