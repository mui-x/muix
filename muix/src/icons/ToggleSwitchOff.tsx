import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const ToggleSwitchOffData = 'M17,7H7C4.24,7 2,9.24 2,12C2,14.76 4.24,17 7,17H17C19.76,17 22,14.76 22,12C22,9.24 19.76,7 17,7M7,15C5.34,15 4,13.66 4,12C4,10.34 5.34,9 7,9C8.66,9 10,10.34 10,12C10,13.66 8.66,15 7,15Z'
export default createSvgIcon(
  ToggleSwitchOffData,
  'ToggleSwitchOff',
  true
)