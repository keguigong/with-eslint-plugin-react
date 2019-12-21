import React from 'react'
import * as iconMap from '.'

export const Icon = ({
  name,
  ...rest
}) => {
  const Icon = iconMap[name] || iconMap['Function']
  return <React.Fragment>
    <Icon {...rest} />
  </React.Fragment>
}