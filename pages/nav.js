/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Box, Flex, Container } from '@theme-ui/components'

import ThemeProviderWrapper from '../components/theme-provider-wrapper'
import { PowerCharger, PowerHome, PowerSwap, PowerStorage, SmartBatteryModule, PowerMobile } from '../components/icon/devices'
import { Home, ScaleExpand, Account } from '../components/icon/nav'
import { Welkin, Welkin1, Docker, Nio } from '../components/icon/logo'
import Sider from './sider'

import Item from '../components/nav/nav-item'

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
            <Item
              overrideCSS={{p: 0, mt: 26, mb: 16}}
              icon={<Welkin1 sx={{ height: 44, width: 44 }} />}
              href='/'
            />
            <Item isSelected icon={<Home />} href='/' />
            <Item icon={<PowerSwap />} />
            <Item icon={<PowerMobile />} />
            <Item icon={<PowerStorage />} />
            <Item icon={<PowerCharger />} />
            <Item icon={<PowerHome />} />
            <Item icon={<SmartBatteryModule />} />
          </Flex>
          <Flex sx={{
            mb: 15,
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'flex-end'
          }}>
            <Item href='' icon={<Account />} />
            <Item icon={<ScaleExpand />} />
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