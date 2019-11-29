/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Button, Box, Flex } from '../common'
import Avatar from '../widget/avatar'
import { ArrowDown } from '../icon/arrow'

export default ({
  more,
  type,
  title,
  isCollpased,
  ...rest
}) => {

  const props = {
    isCollpased: isCollpased || false,
    more: more || false,
    title: title || typeMap[type] || '主页',
    ...rest
  }

  return <Box {...rest} sx={{ width: '100%' }}>
    <Flex centerAlign center sx={{
      height: 90,
      width: '100%',
      pl: 20,
      color: 'text',
      // backgroundColor: 'bright',
      ...(props.more && { cursor: 'pointer' }),
      ...(props.isCollpased && {
        justifyContent: 'center',
        p: 0
      })
    }}>
      <Avatar large type={type} />
      <Box column sx={{
        ...{ ml: 2, flex: 1 },
        ...(props.isCollpased && {
          display: 'none'
        })
      }}>
        <h1 sx={{ variant: 'text.h1', margin: 0, ...textOverflow }}>{props.title}</h1>
        <p sx={{
          ...{ display: 'none' },
          ...textOverflow,
          ...(props.more && {
            fontFamily: 'heading',
            fontSize: [0],
            color: 'text',
            margin: 0,
            display: 'block',
          })
        }}>快速切换项目</p>
      </Box>
      {props.more && !props.isCollpased && <ArrowDown sx={{ mx: 2 }} />}
    </Flex>
  </Box>
}

const textOverflow = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
}

const typeMap = {
  Home: '主页',
  PowerSwap: '换电站',
  PowerMobile: '移动充电车',
  PowerStorage: '储能站',
  PowerCharger: '超充桩',
  PowerHome: '家充桩',
  SmartBatteryModule: '智能模组',
}