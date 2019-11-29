/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useContext } from 'react'
import { Flex, Box, Container } from '@theme-ui/components'

import { Favorite, Watch, Recent } from '../components/icon/general'
import { Overview, List, History, Log, Alarm, Ticket, Analysis, Config, Ota } from '../components/icon/sider'
import { ArrowRight, ArrowLeft } from '../components/icon/general'
import SiderItem from '../components/sider/sider-item'
import BottomLink from '../components/sider/bottom-link'
import SiderTitle from '../components/sider/sider-title'
import UserContext from '../components/user-context'

export default () => {
  const { isSiderCollapsed, toggleSiderCollapse } = useContext(UserContext)

  const isCollapsed = isSiderCollapsed

  return <aside sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'bright',
    width: isCollapsed ? 64 : 200,
    p: 1,
  }}>
    <SiderTitle isCollpased={isCollapsed} more type='SmartBatteryModule' />
    <Container sx={{
      position: 'relative',
      flexGrow: 1,
      overflow: 'auto',
      '&::-webkit-scrollbar': {
        // position: 'absolute',
        display: 'none'
      }
    }}>
      <SiderItem isCollapsed={isCollapsed} icon={<Overview />}>总览</SiderItem>
      <SiderItem isCollapsed={isCollapsed} icon={<List />}>设备列表</SiderItem>
      <SiderItem isCollapsed={isCollapsed} icon={<History />}>历史信息</SiderItem>
      <SiderItem isCollapsed={isCollapsed} isDisabled icon={<Log />}>日志信息</SiderItem>
      <SiderItem isCollapsed={isCollapsed} icon={<Alarm />}>故障信息</SiderItem>
      <SiderItem isCollapsed={isCollapsed} isDisabled icon={<Ticket />}>工单管理</SiderItem>
      <SiderItem isCollapsed={isCollapsed} icon={<Analysis />}>数据分析</SiderItem>
      <SiderItem isCollapsed={isCollapsed} isDisabled icon={<Config />}>参数配置</SiderItem>
      <SiderItem isCollapsed={isCollapsed} isDisabled icon={<Ota />}>远程升级</SiderItem>
    </Container>
    <SiderItem
      reverse
      isCollapsed={isCollapsed}
      icon={!isCollapsed ? <ArrowLeft /> : <ArrowRight />}
      onClick={() => toggleSiderCollapse()}
    />
    <BottomLink>
      <SiderItem isCollapsed={isCollapsed} icon={<Favorite />} short>我的收藏</SiderItem>
      <SiderItem isCollapsed={isCollapsed} icon={<Watch />} short>我的关注</SiderItem>
      <SiderItem isCollapsed={isCollapsed} icon={<Recent />} short>最近访问</SiderItem>
    </BottomLink>
  </aside>
}