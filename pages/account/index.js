/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { connect } from 'react-redux'

import { Flex } from '../../components/common'
import { MainContent } from '../../components/widget'
import { Header } from '../../components/header'
import { LeftSiderWrapper, SiderItem, Sider, accountSiderMap } from '../../components/sider'
import { AccountDetail } from '../../components/account'

const AccountPage = ({
  currentPage
}) => {
  return <Flex>
    <LeftSider {...{ currentPage }} />
    <MainContent>
      <Styled.h1>账户详情</Styled.h1>
      <AccountDetail />
    </MainContent>
  </Flex>
}

AccountPage.getInitialProps = () => {
  const currentPage = 'account'
  return { currentPage }
}

export default AccountPage

const InnerLeftSider = ({
  auth = [],
  currentPage,
  deviceType,
  deviceId
}) => {

  const checkPermission = (perms = [], currentItem) => {
    let isDisabled = true
    perms.map(item => {
      if (item === currentItem) {
        isDisabled = false
      }
    })
    return isDisabled
  }

  const perms = ['account']

  return <LeftSiderWrapper>
    <Header route='/account' />
    <Sider type='Account' bottomLink={false}>
      {accountSiderMap.map((item, index) => {
        console.log(item.pageName, currentPage)
        return <SiderItem
          key={index}
          isSelected={item.pageName === currentPage}
          isDisabled={checkPermission(perms, item.pageName)}
          type={item.pageName}
          href={`/account/${item.href}`}
          as={`/account/${item.href}`}
        />
      }
      )}
    </Sider>
  </LeftSiderWrapper>
}

const mapStateToProps = ({ signin: { auth } }) => ({
  auth
})

const LeftSider = connect(mapStateToProps)(InnerLeftSider)

export { LeftSider }


