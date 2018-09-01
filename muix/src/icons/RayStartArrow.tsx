import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const RayStartArrowData = 'M23,12L19,16V13H6.83C6.42,14.17 5.31,15 4,15C2.34,15 1,13.66 1,12C1,10.34 2.34,9 4,9C5.31,9 6.42,9.83 6.83,11H19V8L23,12Z'
export default createSvgIcon(
  RayStartArrowData,
  'RayStartArrow',
  true
)