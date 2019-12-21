/** @jsx jsx */
import { jsx } from 'theme-ui'

import { DeviceListItem } from '..'
import { LoadingOverlay, EmptyState } from '../../widget'
import { LoadingOverllay } from '../../widget/loading-overlay'
import { Flex } from '../../common'

const DeviceList = ({
  devices = [],
  error = '',
  pending = false,
  ...rest
}) => {
  return <Flex column sx={{
    flex: 1,
    position: 'relative',
    overflow: 'auto'
  }}>
    {pending && <LoadingOverllay />}
    {true && <div sx={{ minHeight: 0 }}>
      {devices.length !== 0 && devices.map((item, index) => <DeviceListItem
        key={index}
        data={item}
      />)}
      {devices.length === 0 && <EmptyState />}
    </div>}
  </Flex>
}

export default DeviceList