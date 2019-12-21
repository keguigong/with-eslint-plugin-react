/** @jsx jsx */
import { jsx } from 'theme-ui'
import { connect } from 'react-redux'

import { Flex } from '../../../../../components/common'
import { MainContent } from '../../../../../components/widget'
import { Header } from '../../../../../components/header'
import { Sider, LeftSiderWrapper, SiderItem, getDeviceDetailSiderArr } from '../../../../../components/sider'
import { BasicInfo } from '../../../../../components/basic-info'

const Home = ({
  deviceType,
  deviceId,
  currentPage,
  ...rest
}) => {
  console.log(deviceType)
  return <Flex>
    <LeftSider {...{ deviceType, deviceId, currentPage }} />
    <MainContent flex>
      <BasicInfo {...{ deviceType, deviceId }} />
    </MainContent>
  </Flex>
}

Home.getInitialProps = ({ query: { deviceType, deviceId } }) => {
  const currentPage = 'overview'
  return { deviceType, deviceId, currentPage }
}

export default Home

export const InnerLeftSider = ({
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

  const perms = ['configInfos', 'serviceInfos', 'alarms', ...getCurrentPerms(auth, deviceType)]

  return <LeftSiderWrapper>
    <Header route={deviceType} />
    <Sider type={deviceType} bottomLink={false}>
      <SiderItem href='/devices/[deviceType]/list' as={`/devices/${deviceType}/list`} type='back' />
      {getDeviceDetailSiderArr(deviceType).map((item, index) => (
        <SiderItem
          key={index}
          isSelected={item.pageName === currentPage}
          isDisabled={checkPermission(perms, item.pageName)}
          type={item.pageName}
          href={`/devices/[deviceType]/id/[deviceId]/${item.href}`}
          as={`/devices/${deviceType}/id/${deviceId}/${item.href}`}
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