/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import hex2rgba from 'hex2rgba'
import Link from 'next/link'

import { Flex } from '../components/common'
import { MainContent } from '../components/widget'
import { Icon } from '../components/icon/icon-wrapper'
import { SigninForm } from '../components/signin'

const SigninPage = ({
  unsplashImage,
  ...rest
}) => {
  return <MainContent sx={{
    display: 'flex',
    p: 0,
    backgroundSize: 'cover',
    backgroundImage: `url(${unsplashImage})`
  }}>
    <Flex column centerAlign sx={{
      flex: 3,
      flexGrow: 3,
      p: 4,
      backgroundColor: t => hex2rgba(t.colors.primary.split('').reverse().join('').substring(1, 8).split('').reverse().join(''), 0.8),
    }}>
      <Flex column sx={{
        minWidth: 300,
        maxWidth: 600,
        flex: 1,
        justifyContent: 'space-between'
      }}>
        <Flex centerAlign sx={{ color: 'bright' }}>
          <Icon name='Welkin' sx={{ height: 40, width: 40, mr: 2 }} />
          <Icon name='Logotype' />
        </Flex>
        <div sx={{ mb: 5 }}>
          <Styled.h1 sx={{ color: 'reverse', fontSize: 5, fontFamily: 'Zilla Slab' }}>Welcome to Welkin</Styled.h1>
          <Styled.h1 sx={{ color: 'reverse', fontSize: 5 }}>欢迎来到天宫</Styled.h1>
          <Styled.p sx={{ color: 'bright', lineHeight: 1.5, mt: 3 }}>秋天，无论在什么地方的秋天，总是好的；可是啊，北国的秋，却特别地来得清，来得静，来得悲凉。我的不远千里，要从杭州赶上青岛，更要从青岛赶上北平来的理由，也不过想饱尝一尝这“秋”，这故都的秋味。</Styled.p>
        </div>
        <Styled.h1></Styled.h1>
      </Flex>
    </Flex>
    <Flex column sx={{
      backgroundColor: 'bright',
      justifyContent: 'space-between',
      flex: '0 0 360px',
      flexGrow: 1,
      p: '40px'
    }}>
      <Flex sx={{
        justifyContent: 'flex-end',
        ...commonWidth
      }}>
        <Styled.p><Link href='/'>
          <Styled.a href='#'>关于天宫</Styled.a>
        </Link></Styled.p>
      </Flex>
      <Flex column sx={{
        ...commonWidth
      }}>
        <Styled.h1 sx={{ variant: 'text.h1Inline' }}>登陆到天宫</Styled.h1>
        <Styled.p sx={{ mb: 4 }}>还没有权限？<Styled.a href='#'>申请权限</Styled.a>。</Styled.p>
        <SigninForm />
      </Flex>
      <Flex sx={{
        justifyContent: 'flex-end',
        ...commonWidth
      }}>
        <Styled.p>遇到问题，请<Styled.a href='#'>联系我们</Styled.a>。</Styled.p>
      </Flex>
    </Flex>
  </MainContent>
}

SigninPage.getInitialProps = () => {
  const unsplashImage = 'https://images.unsplash.com/photo-1526112562240-f3c31a27a110?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80'
  return { unsplashImage }
}

export default SigninPage

const commonWidth = {
  minWidth: 300,
  maxWidth: 360
}