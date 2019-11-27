/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box } from '@theme-ui/components'

import { PowerCharger, PowerHome, PowerSwap, PowerStorage, SmartBatteryModule, PowerMobile } from '../components/icon/devices'
import { Home, ScaleExpand, Account } from '../components/icon/nav'
import { Welkin } from '../components/icon/logo'

import NavItem from '../components/nav/nav-item'

export default () => (
  <header sx={styles.header}>
    <nav sx={styles.nav}>
      <NavItem
        overrideCSS={styles.logo}
        icon={<Welkin />}
        href='/'
      />
      <Box sx={styles.box}>
        <NavItem icon={<Home />} href='/' />
        <NavItem isSelected icon={<PowerSwap />} />
        <NavItem icon={<PowerMobile />} />
        <NavItem icon={<PowerStorage />} />
        <NavItem icon={<PowerCharger />} />
        <NavItem icon={<PowerHome />} />
        <NavItem icon={<SmartBatteryModule />} />
      </Box>
      <NavItem href='' icon={<Account />} />
      <NavItem icon={<ScaleExpand />} />
    </nav>
  </header>
)

const styles = {
  header: {
    // transition: 'height eas-in .5s',
    // flexDirection: 'column',
    // height: '100vh',
    width: 84,
    display: 'flex',
    backgroundColor: 'bright',
    padding: '10px 0 10px 10px',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'primary',
    alignItems: 'stretch',
    borderRadius: 10,
    width: 64,
    m: 1,
  },
  box: {
    flexGrow: 99,
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  logo: {
    p: 0,
    mt: 26,
    mb: 16,
    '& svg': {
      height: 44,
      width: 44
    },
    ':hover:enabled, :focus:enabled': {
      color: 'highlight',
      backgroundColor: 'transparent'
    }
  }
}