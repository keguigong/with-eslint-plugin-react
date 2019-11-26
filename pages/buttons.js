/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import ThemeProviderWrapper from '../components/theme-provider-wrapper'
import { Button, Box, Flex } from '../components/common'
import { PowerSwap, PowerMobile } from '../components/icon/devices'

const deviceTypeArr = ['全部', '换电站', '超充桩', '移动充电车', '储能站', '家充桩']

export default () => (
  <ThemeProviderWrapper>
    <Box sx={{
      p: '30px',
      bg: 'background',
      minHeight: '100vh'
    }}>
      <Flex my={3}>
        <Button link tag='link' href='/'>主页</Button>
      </Flex>
      <Flex my={3}>
        {deviceTypeArr.map((item, index) => (
          <Button
            arrow
            key={index}
            sx={{ mr: 2 }}
            isSelected={index === 1}
            isDisabled={index === 3}
          >{item}</Button>
        ))}
      </Flex>
      <Flex my={3}>
        <Button>default</Button>
        <Button isDisabled>default</Button>
        <Button primary>Primary</Button>
        <Button primary isDisabled>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button secondary isDisabled>secondary</Button>
        <Button link>link</Button>
        <Button link isDisabled>link</Button>
        <Button isSelected>isSelected</Button>
        <Button isSelected isDisabled>isSelected</Button>
      </Flex>
      <Flex my={3}>
        <Button xlarge primary tag='link' icon={<PowerSwap />}></Button>
        <Button href='input' tag='link'>Go to input</Button>
        <Button secondary icon={<PowerMobile />}>Power Mobile</Button>
      </Flex>
    </Box>
  </ThemeProviderWrapper>
)