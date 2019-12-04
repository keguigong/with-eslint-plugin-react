/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Flex, Box, Button } from '../common'
import { IconButton } from '../widget'
import { PeekInfo, StateIndicator } from '.'
import { Avatar } from '../widget'
import { Map, Location, LocationPin, Registration, Hardware, Software, Rom, Close } from '../icon'

const Peek = ({
  data = {
    deviceType: '',
    deviceId: '',
    deviceName: '',
    alarmState: 255,
    networkState: 255,
    workState: 255,
    region: '',
    address: '',
    ipAddress: '',
    registrationCode: '',
    hardwareVersion: '',
    firmwareVersion: '',
    softwareVersion: ''
  },
  ...rest
}) => {
  const props = {
    deviceType: data.deviceType || 'PowerSwap',
    deviceId: data.deviceId || 'NPC-NIO-a1b2c3d4-d5f6g7h8',
    deviceName: data.deviceName || '上海市嘉定区安拓56弄 汽车创新港 设备站点',
    alarmState: data.alarmState || 255,
    networkState: data.networkState || 255,
    workState: data.workState || 255,
    basicInfoArr: [
      {
        withTitle: false,
        title: '',
        text: data.region || '上海市嘉定区',
        icon: <Map />
      },
      {
        withTitle: false,
        title: '',
        text: data.address || '上海市嘉定区安亭镇安拓路56弄汽车创新港20号楼',
        icon: <LocationPin />
      },
      {
        withTitle: true,
        title: 'IP地址',
        text: data.ipAddress || '10.110.93.35',
        icon: <Location />
      },
      {
        withTitle: true,
        title: '注册码',
        text: data.registrationCode || 'P001234567890001AA',
        icon: <Registration />
      },
      {
        withTitle: true,
        title: '硬件版本',
        text: data.hardwareVersion || '1.4',
        icon: <Hardware />
      },
      {
        withTitle: true,
        title: '固件版本',
        text: data.firmwareVersion || 'V1.2.9r06',
        icon: <Rom />
      },
      {
        withTitle: true,
        title: '软件版本',
        text: data.softwareVersion || '021401.2.1.7',
        icon: <Software />
      },
    ]
  }

  return <Flex sx={{
    position: 'relative',
    width: 300,
    flex: '0 0 300px',
    padding: '1.5em',
    backgroundColor: 'bright',
    flexDirection: 'column'
  }}>
    <IconButton
      action
      icon={<Close />}
      overrideCSS={{
        position: 'absolute',
        top: 2,
        left: 2
      }} />
    <Avatar large sx={{ mb: 2, mt: 5 }} type={props.deviceType} />
    <Box>
      <h1 sx={{ variant: 'text.h1_inner' }}>{props.deviceName}</h1>
      <p sx={{ variant: 'text.p_disabled' }}>{props.deviceId}</p>
    </Box>
    <Flex centerJustify sx={{ mt: 3 }}>
      <StateIndicator type='network' state={props.networkState}/>
      <StateIndicator type='alarm' state={props.alarmState}/>
      <StateIndicator type='work' state={props.workState}/>
    </Flex>
    <Box sx={{ mt: 3 }}>
      {props.basicInfoArr.map((item, index) => (
        <PeekInfo
          key={index}
          withTitle={item.withTitle}
          icon={item.icon}
          title={item.title}
          text={item.text}
        />
      ))}
    </Box>
    <Button large arrow tag='link' primary
      aCSS={{
        mt: 4
      }}
      overrideCSS={{
        width: '100%',
        justifyContent: 'center'
      }}>查看详情</Button>
  </Flex>
}

export default Peek

Peek.propTypes = {
  data: PropTypes.object.isRequired
}