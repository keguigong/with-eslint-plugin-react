/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Flex, Box } from '../common'
import { Avatar, AlarmStateButton, NetworkStateButton, WorkStateButton } from '.'

const Item = ({
  wide,
  state,
  ...rest
}) => {
  const props = {
    state: state || {
      deviceType: 'PowerSwap',
      description: 'NIO Power 换电站 G4高速耒阳服务区（广州方向）',
      deviceId: 'PS-NIO-072b0796-0f02deb0',
      networkState: 255,
      alarmState: 255,
      workState: 255
    }
  }

  return <Flex centerAlign sx={{
    transition: 'height ease-in .5s',
    height: wide ? 100 : 70,
    px: 2
  }}>
    <Avatar type={props.state.deviceType} />
    <Box sx={{
      ml: [2, 3],
      flex: 1,
    }}>
      <Link href={'#'}>
        <a sx={{
          color: 'text',
          transition: 'all ease-in .15s',
          ':hover': {
            color: 'primary',
            cursor: 'pointer',
          }
        }}>
          <p sx={{
            my: 0,
            fontFamily: 'heading',
            fontSize: [0, 1],
            ...textOverflow
          }}>
            {props.state.description}
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
        {props.state.deviceId}
      </p>
    </Box>
    <NetworkStateButton state={props.state.networkState} />
    <AlarmStateButton state={props.state.alarmState} />
    <WorkStateButton state={props.state.workState} />
  </Flex>
}

export default Item

Item.propTypes = {
  state: PropTypes.object
}

const textOverflow = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
}