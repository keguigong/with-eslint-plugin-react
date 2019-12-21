/** @jsx jsx */
import { jsx } from 'theme-ui'
import { connect } from 'react-redux'

import { Button } from '../../common'
import { textOverflow } from '../../../styles'
import { Icon } from '../../icon/icon-wrapper'

const SiderItem = ({
  href,
  icon = '',
  type = 'default',
  tag,
  short,
  children,
  isSelected,
  isDisabled,
  isCollapsed,
  overrideCSS,
  reverse,
  ...rest
}) => {
  const props = {
    href: href,
    isDisabled: isDisabled || false,
    tag: isDisabled ? 'button' : tag || 'link',
    ...rest
  }

  const iconName = icon || (typeof itemMap[type] !== 'undefined' ? itemMap[type].icon : '')
  const title = children || (itemMap[type] ? itemMap[type].title : itemMap['default'].title)

  return (
    <div sx={{
      p: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Button
        {...props}
        aCSS={{
          display: 'inline-block',
          width: '100%',
        }}
        overrideCSS={{
          '&&': {
            ...defaultStyles,
            ...textOverflow,
            ...(reverse && {
              flexDirection: 'row-reverse',
              paddingLeft: 0,
              paddingRight: '1em',
              ...(isCollapsed && { paddingRight: 0 })
            }),
            ...(isSelected && {
              backgroundColor: 'highlight',
              color: 'primary',
              ':hover:enabled, :focus:enabled': {
                backgroundColor: 'highlight',
                color: 'primary',
                backgroundImage: 'none'
              }
            }),
            ...(isCollapsed && {
              paddingLeft: 0,
              justifyContent: 'center',
            }),
            ...overrideCSS,
          }
        }}
      >
        {iconName && <Icon name={iconName}/>}
        {!isCollapsed && (
          <span sx={{
            marginLeft: icon ? '1em' : 2
          }}>
            {title}
          </span>
        )}
      </Button>
    </div>
  )
}

const mapStateToProps = state => ({
  isCollapsed: state.isSiderCollapsed
})

export default connect(mapStateToProps)(SiderItem)

export const itemMap = {
  default: {
    icon: 'Function',
    title: ''
  },
  back: {
    icon: 'ArrowLeft',
    title: '返回'
  },
  serviceInfos: {
    icon: 'Activity',
    title: '服务信息'
  },
  overview: {
    icon: 'Overview',
    title: '总览'
  },
  list: {
    icon: 'List',
    title: '设备列表'
  },
  realtime: {
    icon: 'Monitor',
    title: '实时信息'
  },
  history: {
    icon: 'History',
    title: '历史信息'
  },
  logs: {
    icon: 'Log',
    title: '日志信息'
  },
  alarms: {
    icon: 'Alarm',
    title: '告警信息'
  },
  worksheets: {
    icon: 'Ticket',
    title: '工单管理'
  },
  analysis: {
    icon: 'Analysis',
    title: '数据分析'
  },
  config: {
    icon: 'Config',
    title: '参数配置'
  },
  ota: {
    icon: 'Ota',
    title: '远程升级'
  },
  favorite: {
    icon: 'Favorite',
    title: '我的收藏'
  },
  watch: {
    icon: 'Watch',
    title: '我的关注'
  },
  recent: {
    icon: 'Recent',
    title: '最近访问'
  },
  account: {
    icon: 'Account',
    title: '账户详情'
  },
  configInfos:{
    icon:'Config',
    title:'配置信息'
  },
  authConfig:{
    icon:'Admin',
    title:'权限配置'
  },
  batteryHistory:{
    icon:'History',
    title:'电池历史'
  },
  csv:{
    icon:'Function',
    title:'csv导出'
  }
}


const defaultStyles = {
  flex: 1,
  height: 40,
  width: '100%',
  fontSize: [0, 1],
  color: 'text',
  padding: 0,
  paddingLeft: '1em',
  border: 'none',
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  ':hover:enabled, :focus:enabled': {
    color: 'text',
    backgroundColor: 'hover',
    backgroundImage: 'none'
  },
  ':disabled': {
    color: 'disabled'
  }
}