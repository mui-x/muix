import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const BeakerData = 'M3,3H21V5C19.9,5 19,5.9 19,7V19C19,20.1 18.1,21 17,21H7C5.9,21 5,20.1 5,19V7C5,5.9 4.1,5 3,5V3M7,5V7H12V8H7V9H10V10H7V11H10V12H7V13H12V14H7V15H10V16H7V19H17V5H7Z'
export default createSvgIcon(
  BeakerData,
  'Beaker',
  true
)