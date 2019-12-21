/** @jsx jsx */
import { jsx } from '@emotion/core'
import Colors from './styles/Color'

const Devider = props => (
  <hr css={{
    border: 0,
    height: 1,
    backgroundColor: props.isHidden ? null : Colors.background.devider,
    margin: '10px 15px 5px 15px'
  }} />
)

export default Devider