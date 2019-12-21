/** @jsx jsx */
import { jsx } from 'theme-ui'
import { TransitionMotion, spring } from 'react-motion'

import { Spinner, Flex } from '../common'

const LoadingOverllay = ({
  isLoading,
  ...rest
}) => {
  const willEnter = () => ({
    opacity: 0
  })

  const willLeave = () => ({
    opacity: spring(0)
  })

  const getStyle = (arr) => arr.map((item, index) => ({
    key: index.toString(),
    data: item,
    style: {
      opacity: spring(0.8)
    }
  }))

  const getDefaultStyle = (arr) => arr.map((item, index) => ({
    key: index.toString(),
    data: item,
    style: {
      opacity: 0
    }
  }))

  const arr = isLoading ? [
    {
      key: 0
    }
  ] : []

  return <TransitionMotion
    defaultStyles={getDefaultStyle(arr)}
    styles={getStyle(arr)}
    willEnter={willEnter}
    willLeave={willLeave}
  >
    {interpolatedSyles => <div>
      {interpolatedSyles.map(config => {
        const { data, style, key } = config
        return <Flex
          key={key}
          center
          sx={{
            backgroundColor: 'background',
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: `1px solid ${t => t.colors.primary}`,
            top: 0,
            left: 0,
            ...style
          }}
          {...rest}
        >
          <Spinner strokeWidth={3} />
        </Flex>
      })}
    </div>}
  </TransitionMotion>
}

const LoadingOverlay = ({
  opacity = 0.8,
  normal,
  ...rest
}) => {
  return <Flex {...rest} center sx={{
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: opacity,
    backgroundColor: 'background',
    ...(normal && { position: 'normal' })
  }}>
    <Spinner strokeWidth={3} />
  </Flex>
}

export { LoadingOverlay, LoadingOverllay }