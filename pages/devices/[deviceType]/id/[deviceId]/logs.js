/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { Flex } from '../../../../../components/common'
import { MainContent } from '../../../../../components/widget'
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
      <Styled.h1>日志信息</Styled.h1>
    </MainContent>
  </Flex>
}

Home.getInitialProps = ({ query: { deviceType, deviceId } }) => {
  const currentPage = 'logs'
  return { deviceType, deviceId, currentPage}
}

export default Home