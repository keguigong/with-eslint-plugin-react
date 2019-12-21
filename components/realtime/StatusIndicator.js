/** @jsx jsx */
import { jsx } from '@emotion/core'
import Colors from './styles/Color'

const StatusIndicator = props => (
  <div css={{
    height: '18px',
    width: 'fit-content',
    minWidth: '75px',
    marginLeft: '20px',
    backgroundColor: props.backgroundColor ? props.backgroundColor : null,
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color ease-in .2s',
    ...props.css
  }}>
    <span css={{
      color: Colors.text.titleWhite,
      fontSize: '10px',
      lineHeight: '10px'
    }}>{props.status}</span>
  </div>
)

export default StatusIndicator
