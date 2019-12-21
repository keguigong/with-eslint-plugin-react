/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { connect } from 'react-redux'

import { Flex } from '../../../components/common'
import { MainContent } from '../../../components/widget'
import { Devices } from '../../../components/device-list'
import { LeftSider } from '.'

const Home = ({
  currentPage,
  deviceType,
  ...rest
}) => {
  return <Flex>
    <LeftSider {...{ deviceType, currentPage }} />
    <MainContent flex>
      <Styled.h1>设备列表</Styled.h1>
      <Devices deviceType={deviceType} />
    </MainContent>
  </Flex>
}

Home.getInitialProps = ({ query: { deviceType } }) => {
  const currentPage = 'list'
  return { deviceType, currentPage }
}

export default Home