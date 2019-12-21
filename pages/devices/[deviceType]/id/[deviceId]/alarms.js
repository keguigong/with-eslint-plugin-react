/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { Flex } from '../../../../../components/common'
import { MainContent } from '../../../../../components/widget'
import { Alarms } from '../../../../../components/alarm'
import { LeftSider } from '.'

const Home = ({
  deviceType,
  deviceId,
  currentPage,
  ...rest
}) => {
  return <Flex>
    <LeftSider {...{ deviceType, deviceId, currentPage }} />
    <MainContent flex>
      <Styled.h1>告警信息</Styled.h1>
      <Alarms deviceId={deviceId} />
    </MainContent>
  </Flex>
}

Home.getInitialProps = ({ query: { deviceType, deviceId } }) => {
  const currentPage = 'alarms'
  return { deviceType, deviceId, currentPage}
}

export default Home