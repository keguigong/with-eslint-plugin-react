/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { connect } from 'react-redux'

import { IconButton } from '../../widget'
import getFavButton from '../get-favorite-button'
import getWatchButton from '../get-watch-button'

class FavoriteButton extends React.Component {
  componentDidMount = () => {
    const { getFavButton, getWatchButton, deviceType, deviceId } = this.props
    getFavButton('seek', deviceType, deviceId)
    getWatchButton('seek', deviceType, deviceId)
  }

  render() {
    const { isFavorited, isWatched, getFavButton, getWatchButton, deviceType, deviceId } = this.props
    return <div sx={{
      // width: 130,
      display: 'flex',
      justifyContent: 'space-between',
      position: 'absolute',
      right: 10,
      top: 10
    }}>
      <Styled.p sx={{fontSize: 8}}>测试中，可使用，但不会更新，刷新可见</Styled.p>
      <IconButton
        onClick={() => {
          isFavorited ?
            getFavButton('remove', deviceType, deviceId) :
            getFavButton('add', deviceType, deviceId)
        }}
        overrideCSS={{ ml: 2 }}
        icon={isFavorited ? 'FavoriteAdded' : 'Favorite'}
        isSelected={isFavorited ? true : false}
      />
      <IconButton
        onClick={() => {
          isWatched ?
            getWatchButton('remove', deviceType, deviceId) :
            getWatchButton('add', deviceType, deviceId)
        }}
        overrideCSS={{ ml: 2 }}
        icon={isWatched ? 'WatchAdded' : 'Watch'}
        isSelected={isWatched ? true : false}
      />
      <IconButton
        overrideCSS={{ ml: 2 }}
        isDisabled
        icon='Edit'
      />
    </div>
  }
}

const mapStateToProps = ({ favoriteButton: { payload: favPayload }, watchButton: { payload: watchPayload } }) => ({
  isFavorited: favPayload.length === 0 ? false : true,
  isWatched: watchPayload.length === 0 ? false : true
})

const mapDispatchToProps = {
  getFavButton: getFavButton,
  getWatchButton: getWatchButton
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton)

