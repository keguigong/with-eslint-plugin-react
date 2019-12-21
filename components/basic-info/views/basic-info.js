/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { connect } from 'react-redux'

import { Flex, Button, Note } from '../../common'
import { StateIndicator, PeekInfo } from '../../peek'
import getBasicInfo from '../get-basic-info'
import { FavoriteButton } from '../../favorite'


class BasicInfo extends React.Component {
  componentDidMount = () => {
    const { getBasicInfo, deviceId } = this.props
    getBasicInfo(deviceId)
  }

  render() {
    const {
      deviceType,
      deviceId,
      basicInfo = {},
    } = this.props
    console.log(deviceType, deviceId)
    return <div sx={{ position: 'relative' }}>
      <FavoriteButton {...{ deviceType, deviceId }} />
      <Styled.h1 sx={{ variant: 'text.h1Inline' }}>{basicInfo.deviceName || '未命名'}</Styled.h1>
      <Styled.p sx={{ variant: 'text.pDisabled' }}>{basicInfo.deviceId}</Styled.p>
      <Flex sx={{ justifyContent: 'flex-start', width: 'min-content', my: 3 }}>
        <StateIndicator type='network' state={basicInfo.networkState} />
        <StateIndicator type='alarm' state={basicInfo.alarmState} />
        <StateIndicator type='work' state={basicInfo.workState} />
      </Flex>
      {process.env.WELKIN_ENV !== 'pro' && <Note sx={{ my: 2 }}>
        {`当前为${process.env.WELKIN_ENV}环境，实时数据可能无法获取，历史数据可能不完整。`}
      </Note>}
      <Flex column>
        <PeekInfo
          title='设备名称'
          text={basicInfo.deviceName || '未命名'}
        />
        <PeekInfo
          title='设备ID'
          text={basicInfo.deviceId}
        />
        <PeekInfo
          title='地址'
          text={basicInfo.address}
        />
        <PeekInfo
          title='区域'
          text={basicInfo.region}
        />
        <PeekInfo
          title='注册码'
          text={basicInfo.registrationCode}
        />
        <PeekInfo
          title='IP地址'
          text={basicInfo.ipAddress}
        />
        <PeekInfo
          title='软件版本'
          text={basicInfo.softwareVersion}
        />
        <PeekInfo
          title='硬件版本'
          text={basicInfo.hardwareVersion}
        />
        <PeekInfo
          title='固件版本'
          text={basicInfo.firmwareVersion}
        />
      </Flex>
    </div>
  }
}

const mapStateToProps = ({ basicInfo: { payload: basicInfo } }) => ({
  basicInfo
})

const mapDispatchToProps = {
  getBasicInfo: getBasicInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfo)