/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Spinner } from '@theme-ui/components'

const LoadingArea = ({
  ...rest
}) => {
  return (
    <Flex sx={{
      justifyContent: 'center',
      alignContent: ''
    }}>
      <Spinner strokeWidth={3} />
    </Flex>
  )
}

export default LoadingArea