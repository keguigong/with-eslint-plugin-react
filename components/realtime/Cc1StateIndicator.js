/** @jsx jsx */
import { jsx } from '@emotion/core'
import PluginsDisconnected from './icons/PluginsDisconnected'
import PluginsConnected from './icons/PluginsConnected'

const StatusIndicator = props => (
  <div css={{
    height: 'auto',
    display: props.isVisible ? 'flex' : 'none',
    alignItems: 'center',
    paddingLeft: 16,
    fontSize: 20,
  }}>
    {props.isConnected ? <PluginsConnected /> : <PluginsDisconnected />}
  </div>
)

export default StatusIndicator