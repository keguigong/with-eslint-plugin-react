/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box } from '@theme-ui/components'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { connect } from 'react-redux'

import { NavItem, navItemArr } from '../'

const Header = ({
  auth = [],
  route,
  ...rest
}) => {
  const { deviceType } = useRouter().query
  const selectedRoute = route || deviceType

  const [isCollapsed, setIsCollapsed] = useState(true)

  const checkPermission = (auth = [], currentItem) => {
    let isHidden = true
    auth.map(item => {
      if (item.deviceType === currentItem) {
        isHidden = false
      }
    })
    return isHidden
  }

  return <header sx={{
    width: 84,
    display: 'flex',
    padding: '10px 0 10px 10px',
  }}>
    <nav
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'primary',
        borderRadius: 10,
        width: 64,
        m: 1,
        pt: 20,
        ...(!isCollapsed && {
          position: 'absolute',
          zIndex: 99,
          width: 200,
          height: 'calc(100vh - 30px)'
        })
      }}
    >
      <NavItem
        overrideCSS={{
          p: 0,
          mb: 16,
          '& svg': {
            height: 44,
            width: 44
          },
          ':hover:enabled, :focus:enabled': {
            color: 'highlight',
            backgroundColor: 'transparent'
          }
        }}
        icon='Welkin'
        href='/'
      />
      <Box sx={{
        flexGrow: 99,
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}>
        <NavItem
          icon='Home'
          href='/'
          isSelected={selectedRoute === '/'}
        />
        {navItemArr.map((item, index) => <NavItem
          key={index}
          icon={item.icon}
          href={item.href}
          as={item.as}
          isSelected={item.deviceType === selectedRoute}
          isHidden={checkPermission(auth, item.deviceType)}
        />)}
      </Box>
      <NavItem href='/account' icon='Account' isSelected={selectedRoute === '/account'} />
    </nav>
  </header>
}

const mapStateToProps = ({ signin: { auth } }) => ({
  auth
})

export default connect(mapStateToProps)(Header)