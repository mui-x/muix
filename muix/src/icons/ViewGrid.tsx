import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const ViewGridData = 'M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3'
export default createSvgIcon(
  ViewGridData,
  'ViewGrid',
  true
)