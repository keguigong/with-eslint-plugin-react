/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { connect } from 'react-redux'

import { Flex } from '../../../components/common'
import { MainContent } from '../../../components/widget'
import { Header } from '../../../components/header'
import { Sider, LeftSiderWrapper, SiderItem, getDeviceTypeSiderArr } from '../../../components/sider'

const Home = ({
  currentPage,
  deviceType,
  ...rest
}) => {
  return <Flex>
    <LeftSider {...{ deviceType, currentPage }} />
    <MainContent>
      <Styled.h1>{deviceNameMap[deviceType] || '未知设备'}总览</Styled.h1>
    </MainContent>
  </Flex>
}

Home.getInitialProps = ({ query: { deviceType } }) => {
  const currentPage = 'overview'
  return { deviceType, currentPage }
}

export default Home

const InnerLeftSider = ({
  auth = [],
  currentPage,
  deviceType,
  deviceId
}) => {

  const checkPermission = (perms = [], currentItem) => {
    let isDisabled = true
    perms.map(item => {
      if (item === currentItem) {
        isDisabled = false
      }
    })
    return isDisabled  
  }

  const getCurrentPerms = (auth = [], deviceType) => {
    let perms = []
    auth.map(item => {
      if (item.deviceType === deviceType) {
        perms = [...perms, ...item.payload]
      }
    })
    return perms
  }

  const perms = ['list', 'batteryHistory', 'csv', ...getCurrentPerms(auth, deviceType)]

  return <LeftSiderWrapper>
    <Header route={deviceType} />
    <Sider type={deviceType} bottomLink={false}>
      {getDeviceTypeSiderArr(deviceType).map((item, index) => (
        <SiderItem
          tag={item.pageName === 'csv' ? 'href' : 'link'}
          key={index}
          isSelected={item.pageName === currentPage}
          isDisabled={checkPermission(perms, item.pageName)}
          type={item.pageName}
          href={item.pageName === 'csv' ? 'http://welkin-stg.nioint.com:8000/history/' : `/devices/[deviceType]/${item.href}`}
          as={`/devices/${deviceType}/${item.href}`}
        />
      )
      )}
    </Sider>
  </LeftSiderWrapper>
}

const mapStateToProps = ({ signin: { auth } }) => ({
  auth
})

const LeftSider = connect(mapStateToProps)(InnerLeftSider)

export { LeftSider }

const deviceNameMap = {
  'PowerSwap': '换电站',
  'PowerCharger': '超充桩',
  'PowerStorage': '储能站',
  'PowerMobile': '移动充电车',
  'PowerHome': '家充桩',
  'SmartBatteryModule': '智能模组',
}