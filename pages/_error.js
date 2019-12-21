/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { withRouter } from 'next/router'

import { Flex, Button } from '../components/common'
import { MainContent } from '../components/widget'
import { Icon } from '../components/icon/icon-wrapper'

const Error = ({ statusCode, router }) => {
  return <Flex>
    <MainContent sx={{
      p: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Flex column centerAlign sx={{ flex: 1, flexGrow: 1, width: '100%', pt: 4 }}>
        {statusCode && <React.Fragment>
          <Styled.h1 sx={{ fontSize: 6 }}>{`${statusCode}`}</Styled.h1>
          <Styled.p sx={{ variant: 'text.url' }}>{router.asPath}</Styled.p>
          <Styled.h1 sx={{ mb: 1 }}>
            {statusCode === 404 ?
              'Page Not Found' :
              statusCode === 500 ?
                'Internal Server Error' :
                'An Error Occured'}
          </Styled.h1>
          <Styled.h1>
            {statusCode === 404 ?
              '找不到页面' :
              statusCode === 500 ?
                '内部服务器错误' :
                '发生了一个错误'}
          </Styled.h1>
        </React.Fragment>}
        {!statusCode && <React.Fragment>
          <Styled.h1>{'ERROR'}</Styled.h1>
          <Styled.h1>{'An Error Occured'}</Styled.h1>
          <Styled.h1>{'发生了一个错误'}</Styled.h1>
        </React.Fragment>}
        <div sx={{ mt: 2 }}>
          <Button overrideCSS={{ mr: 2 }} primary onClick={() => router.back()}>返回上一页</Button>
          <Button link tag='link' href='/'>返回首页</Button>
        </div>
      </Flex>
      <Flex sx={{ mb: 4, color: 'disabled' }}>
        <Icon name='Logotype' />
      </Flex>
    </MainContent>
  </Flex>
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default withRouter(Error)