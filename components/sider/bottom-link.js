/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Flex } from '@theme-ui/components'

const defaultStyles = {
  flexDirection: 'column',
  backgroundColor: 'background',
  borderRadius: 10,
  pt: 10,
  pb: 10,
  width: 180
}

const BottomLink = ({
  children,
  overrideCSS,
  ...rest
}) => {
  const props = {
    ...rest
  }

  return (
    <Flex
      {...props}
      sx={{
        '&&': {
          ...defaultStyles,
          ...overrideCSS,
        }
      }}>
      {children}
    </Flex>
  )
}

export default BottomLink