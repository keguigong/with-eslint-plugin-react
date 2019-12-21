/** @jsx jsx */
import { jsx } from 'theme-ui'
import { connect } from 'react-redux'

import { Box, Flex } from '../../common'
import Avatar from '../../widget/avatar'
import { Icon } from '../../icon/icon-wrapper'

const SiderTitle = ({
  more,
  type,
  title,
  isCollapsed,
  ...rest
}) => {
  const props = {
    more: more || false,
    title: title || typeMap[type] || '主页',
    ...rest
  }

  return <Box {...rest} sx={{ width: '100%' }}>
    <Flex centerAlign center sx={{
      height: 90,
      width: '100%',
      pl: 10,
      color: 'text',
      ...(props.more && { cursor: 'pointer' }),
      ...(isCollapsed && { justifyContent: 'center', pl: 0 })
    }}>
      <Avatar large type={type} />
      <Box column sx={{
        ...{ ml: 2, flex: 1 },
        ...(isCollapsed && { display: 'none' })
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
      {props.more && !isCollapsed && <Icon name='ArrowDown' sx={{ mx: 2 }} />}
    </Flex>
  </Box>
}

const mapStateToProps = state => ({
  isCollapsed: state.isSiderCollapsed
})

export default connect(mapStateToProps)(SiderTitle)

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
  Account: '账户'
}