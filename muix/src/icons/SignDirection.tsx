import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const SignDirectionData = 'M11,12H3.5L6,9.5L3.5,7H11V3L12,2L13,3V7H18L20.5,9.5L18,12H13V20C14.1,20 15,20.9 15,22H9C9,20.9 9.9,20 11,20V12Z'
export default createSvgIcon(
  SignDirectionData,
  'SignDirection',
  true
)