import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const SignalData = 'M3,21H6V18H3M8,21H11V14H8M13,21H16V9H13M18,21H21V3H18V21Z'
export default createSvgIcon(
  SignalData,
  'Signal',
  true
)