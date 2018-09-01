import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const FlattrData = 'M21,12C21,16.97 16.97,21 12,21H4.5L9.74,15.76L11.16,17.17L9.33,19H12C15.87,19 19,15.87 19,12V7L21,5V12M3,12C3,7.03 7.03,3 12,3H19.5L14.26,8.24L12.84,6.83L14.67,5H12C8.13,5 5,8.13 5,12V17L3,19V12Z'
export default createSvgIcon(
  FlattrData,
  'Flattr',
  true
)