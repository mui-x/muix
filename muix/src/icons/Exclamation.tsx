import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const ExclamationData = 'M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z'
export default createSvgIcon(
  ExclamationData,
  'Exclamation',
  true
)