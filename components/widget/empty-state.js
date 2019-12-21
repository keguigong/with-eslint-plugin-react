/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { Icon } from '../icon/icon-wrapper'
import { Flex } from '../common'

const EmptyState = ({
  text = '0条结果'
}) => {
  return <Flex column centerAlign sx={{
    color: 'disabled',
    pt: 3,
    minHeight: 100,
    justifyContent: 'space-between',
    borderTop: t => `0.5px solid ${t.colors.disabled}`
  }}>
    <Styled.p sx={{ color: 'inherit', fontFamily: 'heading' }}>{text}</Styled.p>
    <Icon name='Logotype' />
  </Flex>
}

export default EmptyState