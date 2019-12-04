/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '../common'
import { Function } from '../icon/nav'

export default ({
  withTitle,
  title,
  icon,
  text,
  ...rest
}) => {
  const props = {
    icon: icon || <Function />,
    title: title || 'title',
    text: text || 'text'
  }

  return <Flex
    sx={{
      mt: 1,
      minHeight: 24,
      fontFamily: 'heading',
      color: 'text',
      lineHeight: '24px',
      fontSize: [0, 1]
    }}>
    {props.icon}
    {withTitle && <span sx={{
      ml: 2,
      flex: '0 0 70px',
      color: 'disabled',
      ...textOverflow
    }}>
      {props.title}
    </span>}
    <span sx={{
      flex: 1,
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