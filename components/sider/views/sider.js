/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box } from '@theme-ui/components'

import SiderItem from './sider-item'
// import BottomLink from './bottom-link'
import SiderTitle from './sider-title'
import { connect } from 'react-redux'
import { toggleSiderCollapse } from '..'

const Sider = ({
  type = 'Home',
  bottomLink = false,
  isCollapsed,
  toggleSiderCollapse,
  children
}) => {
  return <aside sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    width: 200,
    p: 1,
    ...(isCollapsed && { width: 64 })
  }}>
    <SiderTitle type={type} />
    <Box sx={{
      position: 'relative',
      flexGrow: 1,
      overflow: 'overlay'
    }}>
      {children}
    </Box>
    <SiderItem
      tag='button'
      reverse
      icon={!isCollapsed ? 'ArrowCollapse' : 'ArrowExpand'}
      onClick={(e) => {
        e.preventDefault()
        toggleSiderCollapse(!isCollapsed)
      }}
    />
    {/* <BottomLink isHidde>
      <SiderItem href='/favorite' type='favorite'/>
      <SiderItem href='/watch' type='watch'/>
      <SiderItem href='/recent' type='recent'/>
    </BottomLink> */}
  </aside>
}

const mapStateToProps = state => ({
  isCollapsed: state.isSiderCollapsed
})

const mapDispatchToProps = {
  toggleSiderCollapse: toggleSiderCollapse
}

export default connect(mapStateToProps, mapDispatchToProps)(Sider)
