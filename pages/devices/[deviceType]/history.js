/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { connect } from 'react-redux'

import { Flex } from '../../../components/common'
import { MainContent } from '../../../components/widget'
import PowerSwapSearch from '../../../components/realtime/history/power-swap-search'
import { LeftSider } from '.'

const Home = ({
  currentPage,
  deviceType,
  ...rest
}) => {
  return <Flex>
    <LeftSider {...{ deviceType, currentPage }} />
    <MainContent>
      <Styled.h1>历史信息</Styled.h1>
      {deviceType === 'PowerSwap' && <PowerSwapSearch deviceType={deviceType} />}
    </MainContent>
  </Flex>
}

Home.getInitialProps = ({ query: { deviceType } }) => {
  const currentPage = 'history'
  return { deviceType, currentPage }
}

export default Home