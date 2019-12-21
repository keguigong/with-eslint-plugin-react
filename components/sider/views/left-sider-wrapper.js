/** @jsx jsx */
import { jsx } from 'theme-ui'
import { connect } from 'react-redux'

import { Flex } from '../../common'

const LeftSiderWrapper = ({
  overrideCSS,
  isCollapsed,
  header,
  children,
  ...rest
}) => {
  return <div sx={{
    position: 'relative',
    // width: 284,
    flexBasis: 284,
    flexShrink: 0,
    ...(isCollapsed && { flexBasis: 148 }),
    ...(header && { flexBasis: 94, backgroundColor: 'background'})
  }}>
    <Flex sx={{
      height: '100vh',
      position: 'fixed',
      ...overrideCSS
    }}>
      {children}
    </Flex>
  </div>
}

const mapStateToProps = state => ({
  isCollapsed: state.isSiderCollapsed
})

export default connect(mapStateToProps)(LeftSiderWrapper)