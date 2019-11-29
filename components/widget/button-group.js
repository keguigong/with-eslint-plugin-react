/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '../common'

export default ({
  children,
  ...rest
}) => {
  return <Flex sx={{
    width: 'auto',
    backgroundColor: 'bright',
    borderRadius: 5
  }}>
    {children}
  </Flex>
}