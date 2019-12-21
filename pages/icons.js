/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Flex, Content } from '../components/common'

import * as arrow from '../components/icon/arrow'
import * as devices from '../components/icon/devices'
import * as general from '../components/icon/general'
import * as logo from '../components/icon/logo'
import * as nav from '../components/icon/nav'
import * as peek from '../components/icon/peek'
import * as sider from '../components/icon/sider'
import * as status from '../components/icon/status'
import WelkinLototype from '../components/icon/welkin-logotype'

export default () => <Content>
  <HeadingTitle>Lototype</HeadingTitle>
  <IconBox title='logotype' overrideCSS={{
    width: 200,
    'svg': {
      transition: 'all .3s',
    },
  }}><WelkinLototype /></IconBox>
  <HeadingTitle>Logo</HeadingTitle>
  {Object.keys(logo).map((item, index) => <IconBox key={index} title={item}>{logo[item]()}</IconBox>)}
  <HeadingTitle>Arrow</HeadingTitle>
  {Object.keys(arrow).map((item, index) => <IconBox key={index} title={item}>{arrow[item]()}</IconBox>)}
  <HeadingTitle>Devices</HeadingTitle>
  {Object.keys(devices).map((item, index) => <IconBox key={index} title={item}>{devices[item]()}</IconBox>)}
  <HeadingTitle>General</HeadingTitle>
  {Object.keys(general).map((item, index) => <IconBox key={index} title={item}>{general[item]()}</IconBox>)}
  <HeadingTitle>Nav</HeadingTitle>
  {Object.keys(nav).map((item, index) => <IconBox key={index} title={item}>{nav[item]()}</IconBox>)}
  <HeadingTitle>Peek</HeadingTitle>
  {Object.keys(peek).map((item, index) => <IconBox key={index} title={item}>{peek[item]()}</IconBox>)}
  <HeadingTitle>Sider</HeadingTitle>
  {Object.keys(sider).map((item, index) => <IconBox key={index} title={item}>{sider[item]()}</IconBox>)}
  <HeadingTitle>Status</HeadingTitle>
  {Object.keys(status).map((item, index) => <IconBox key={index} title={item}>{status[item]()}</IconBox>)}
</Content>

const IconBox = ({ children, title, overrideCSS }) => (
  <Flex sx={{
    height: 100,
    width: 100,
    color: 'text',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    'svg': {
      height: 40,
      width: 40,
      transition: 'all .3s',
    },
    ':hover, :focus': {
      color: 'primary',
      backgroundColor: 'highlight',
      cursor: 'pointer',
      svg: {
        transform: 'scale(1.15)'
      }
    },
    '::after': {
      content: `'${camel2normal(title)}'`,
      fontSize: 10,
      position: 'absolute',
      fontFamily: 'body',
      bottom: 1,
      textAlign: 'center',
      color: 'disabled',
      wordBreak: 'break-word'
    },
    ':hover::after': {
      color: 'primary'
    },
    ...overrideCSS
  }}>
    {children}
  </Flex>
)

const HeadingTitle = ({ children }) => (
  <h1 sx={{
    display: 'block',
    fontFamily: 'heading',
    color: 'text',
    p: 4,
    ml: 16,
    mt: 80,
    mb: 1
  }}>{children}</h1>
)

function camel2normal(str) {
  let resStr = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      if (i === 0) {
        resStr = resStr + str[i].toLowerCase()
      } else {
        resStr = resStr + ' ' + str[i].toLowerCase()
      }
    } else {
      resStr = resStr + str[i]
    }
  }
  return resStr
}