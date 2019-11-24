/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Box, Heading, Flex } from '@theme-ui/components'

import ThemeProviderWrapper from '../components/theme-provider-wrapper'
import ColorToggleButton from '../components/color-mode-toggle'
import { Button, Note } from '../components/common'
import { PowerCharger, PowerHome, PowerSwap, PowerStorage, SmartBatteryModule, PowerMobile } from '../components/icon/devices'
import { Home, ScaleCollapse, ScaleExpand, Account, Search } from '../components/icon/nav'
import { Welkin } from '../components/icon/logo'

import Item from '../components/nav/item'

export default () => (
  <ThemeProviderWrapper>
    <Box sx={{
      bg: 'background',
    }}>
      <Flex sx={{
        backgroundColor: 'white',
        flexDirection: 'column',
        height: '100vh',
        width: 100,
      }}>
        <Flex sx={{
          mt: 15,
          mb: 15,
          ml: 20,
          flexGrow: 1,
          borderRadius: 10,
          width: 64,
          flexDirection: 'column',
          backgroundColor: 'primary',
          justifyContent: 'stretch',
          alignItems: 'flex-start'
        }}>
          <Flex sx={{
            mt: 85,
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'flex-start'
          }}>
            <Item icon={<Home />} />
            <Item isSelected icon={<PowerSwap />} />
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
            <Item icon={<Search />} />
            <Item icon={<Account />} />
            <Item icon={<ScaleExpand />} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  </ThemeProviderWrapper>
)