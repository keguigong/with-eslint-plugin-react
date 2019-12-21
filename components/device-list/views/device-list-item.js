/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Flex, Box } from '../../common'
import { Avatar } from '../../widget'
import { StateButton } from '..'
import { textOverflow } from '../../../styles'

const Item = ({
  wide,
  data,
  ...rest
}) => {
  const props = {
    dataObj: {
      deviceType: data.deviceType || '',
      deviceName: data.deviceName || '未命名',
      deviceId: data.deviceId || 'missing deviceId',
      networkState: data.networkState,
      alarmState: data.alarmState,
      workState: data.workState,
    }
  }

  const href = '/devices/[deviceType]/id/[deviceId]'
  const as = `/devices/${props.dataObj.deviceType}/id/${props.dataObj.deviceId}`

  return <Flex {...rest} centerAlign sx={{
    transition: 'height ease-in .5s',
    height: wide ? 100 : 70,
    px: 2
  }}>
    <Avatar type={props.dataObj.deviceType} />
    <Box sx={{
      ml: [2, 3],
      flex: 1,
    }}>
      <Link {...{ href, as }}>
        <a sx={{
          color: 'text',
          transition: 'all ease-in .15s',
          ':hover': {
            color: 'text',
            cursor: 'pointer',
            textDecoration: 'underline'
          }
        }}>
          <p sx={{
            my: 0,
            fontFamily: 'heading',
            fontSize: [0, 1],
            ...textOverflow
          }}>
            {props.dataObj.deviceName}
          </p>
        </a>
      </Link>
      <p sx={{
        m: 0,
        mt: 0,
        fontSize: 0,
        fontFamily: 'heading',
        color: 'disabled',
        ...textOverflow
      }}>
        {props.dataObj.deviceId}
      </p>
    </Box>
    <StateButton type='network' state={props.dataObj.networkState} />
    <StateButton type='alarm' state={props.dataObj.alarmState} />
    <StateButton type='work' state={props.dataObj.workState} />
  </Flex>
}

export default Item

Item.propTypes = {
  wide: PropTypes.bool,
  data: PropTypes.object
}