/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { connect } from 'react-redux'

import { Flex } from '../../../../../components/common'
import { MainContent } from '../../../../../components/widget'
import { ServiceInfos } from '../../../../../components/service-info'
import { LeftSider } from '.'

const Home = ({
  deviceType,
  deviceId,
  currentPage,
  ...rest
}) => {
  return <Flex>
    <LeftSider {...{ deviceType, deviceId, currentPage }}/>
    <MainContent flex>
      <Styled.h1>服务信息</Styled.h1>
      <ServiceInfos deviceId={deviceId} deviceType={deviceType} />
    </MainContent>
  </Flex>
}

Home.getInitialProps = ({ query: { deviceType, deviceId } }) => {
  const currentPage = 'serviceInfos'
  return { deviceType, deviceId, currentPage }
}

export default connect(state => state)(Home)