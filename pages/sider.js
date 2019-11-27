/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Box, Container } from '@theme-ui/components'

import { Favorite, Watch, Recent } from '../components/icon/general'
import { Overview, List, History, Log, Alarm, Ticket, Analysis, Config, Ota } from '../components/icon/sider'
import SiderItem from '../components/sider/sider-item'
import BottomLink from '../components/sider/bottom-link'
import SiderTitle from '../components/sider/sider-title'

var isCollapsed = false

export default () => <aside sx={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'bright',
  width: 200,
  p: 1,
}}>
  <SiderTitle more type='SmartBatteryModule' />
  <Container sx={{
    position: 'relative',
    flexGrow: 1,
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      // position: 'absolute',
      display: 'none'
    }
  }}>
    <SiderItem isSelected icon={<Overview />}>总览</SiderItem>
    <SiderItem icon={<List />}>设备列表</SiderItem>
    <SiderItem icon={<History />}>历史信息</SiderItem>
    <SiderItem isDisabled icon={<Log />}>日志信息</SiderItem>
    <SiderItem icon={<Alarm />}>故障信息</SiderItem>
    <SiderItem isDisabled icon={<Ticket />}>工单管理</SiderItem>
    <SiderItem icon={<Analysis />}>数据分析</SiderItem>
    <SiderItem isDisabled icon={<Config />}>参数配置</SiderItem>
    <SiderItem isDisabled icon={<Ota />}>远程升级</SiderItem>
  </Container>
  <BottomLink isCollapsed={isCollapsed}>
    <SiderItem icon={<Favorite />} short>我的收藏</SiderItem>
    <SiderItem isDisabled icon={<Watch />} short>我的关注</SiderItem>
    <SiderItem icon={<Recent />} short>最近访问</SiderItem>
  </BottomLink>
</aside>