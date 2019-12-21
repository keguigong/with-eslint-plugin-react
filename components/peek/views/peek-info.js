/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '../../common'
import { Icon } from '../../icon/icon-wrapper'

export default ({
  withTitle,
  title,
  icon = '',
  text,
  ...rest
}) => {
  const props = {
    icon: icon,
    title: title || ' ',
    text: text || ' '
  }

  return <Flex
    sx={{
      mt: 1,
      minHeight: 24,
      fontFamily: 'heading',
      color: 'text',
      lineHeight: '24px',
      flex: 1,
      flexGrow: 1,
      fontSize: [0, 1]
    }}>
    {props.icon && <Icon name={props.icon} />}
    {title && <span sx={{
      ml: 2,
      flex: '0 0 70px',
      color: 'disabled',
      ...textOverflow
    }}>
      {props.title}
    </span>}
    <span sx={{
      flex: 1,
      flexGrow: 1,
      ml: 1,
      wordBreak: 'break-all'
    }}>
      {props.text}
    </span>
  </Flex>
}

const textOverflow = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
}