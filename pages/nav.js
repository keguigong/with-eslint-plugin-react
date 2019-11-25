/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Flex, Container } from '@theme-ui/components'

import ThemeProviderWrapper from '../components/theme-provider-wrapper'
import { PowerCharger, PowerHome, PowerSwap, PowerStorage, SmartBatteryModule, PowerMobile } from '../components/icon/devices'
import { Home, ScaleExpand, Account } from '../components/icon/nav'
import { Welkin } from '../components/icon/logo'
import Sider from './sider'

import NavItem from '../components/nav/nav-item'

export default () => (
  <ThemeProviderWrapper>
    <Box sx={{
      bg: 'background',
    }}>
      <Flex sx={{
        float: 'left',
        backgroundColor: 'white',
        flexDirection: 'column',
        height: '100vh',
        width: 84,
      }}>
        <Flex sx={{
          mt: 15,
          mb: 15,
          ml: 15,
          width: 64,
          flexGrow: 1,
          borderRadius: 10,
          flexDirection: 'column',
          backgroundColor: 'primary',
          justifyContent: 'stretch',
          alignItems: 'stretch'
        }}>
          <Flex sx={{
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'flex-start'
          }}>
            <NavItem
              overrideCSS={{
                p: 0,
                mt: 26,
                mb: 16,
                '& svg': {
                  height: 44,
                  width: 44
                }
              }}
              icon={<Welkin />}
              href='/'
            />
            <NavItem isSelected icon={<Home />} href='/' />
            <NavItem icon={<PowerSwap />} />
            <NavItem icon={<PowerMobile />} />
            <NavItem icon={<PowerStorage />} />
            <NavItem icon={<PowerCharger />} />
            <NavItem icon={<PowerHome />} />
            <NavItem icon={<SmartBatteryModule />} />
          </Flex>
          <Flex sx={{
            mb: 15,
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'flex-end'
          }}>
            <NavItem href='' icon={<Account />} />
            <NavItem icon={<ScaleExpand />} />
          </Flex>
        </Flex>
      </Flex>
      <Container sx={{
        minHeight: '100vh'
      }}>
        <Sider />
      </Container>
    </Box>
  </ThemeProviderWrapper>
)