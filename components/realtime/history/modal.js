/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import hex2rgba from 'hex2rgba'
import { Flex } from '../../common'
import { Icon } from '../../icon/icon-wrapper'
import { connect } from 'react-redux'
import { searchModalDisappear } from './actions'

const Modal = (props) => {
  const { isModalVisible, overrideCSS, modalInvisible } = props
  return isModalVisible && (
    <React.Fragment>
      <div
        onClick={() => modalInvisible()}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: hex2rgba('#3C455D', 0.5),
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}>
        <div>
          <a sx={{
            position: 'absolute',
            top: 4,
            right: 4,
            color: 'bright',
            ':hover': {
              color: 'primary'
            }
          }}>
            <Icon onClick={() => modalInvisible()} name={'Close'} />
          </a>
        </div>
        <div
          onClick={e => e.stopPropagation()}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            flex: 1,
            maxWidth: 1200,
            width: 1200,
            minWidth: 600,
            borderRadius: 5,
            my: 4,
            mx: 4,
            position: 'relative',
            ...overrideCSS,
          }}>
          <div sx={{
            minHeight: 0,
            borderRadius: 5,
          }}>
            <div sx={{ backgroundColor: 'bright', p: 4 }}>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  isModalVisible: state.history.isModalVisible
})

const mapDispatchToProps = dispatch => ({
  modalInvisible() {
    dispatch(searchModalDisappear())
  },
})


export default connect(mapStateToProps, mapDispatchToProps)(Modal)

