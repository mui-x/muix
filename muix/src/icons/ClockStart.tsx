import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const ClockStartData = 'M12,1C8.14,1 5,4.14 5,8C5,11.87 8.13,15 12,15C15.86,15 19,11.87 19,8C19,4.14 15.86,1 12,1M12,3.15C14.67,3.15 16.85,5.32 16.85,8C16.85,10.68 14.67,12.85 12,12.85C9.32,12.85 7.15,10.68 7.15,8C7.15,5.32 9.32,3.15 12,3.15M11,5V8.69L14.19,10.53L14.94,9.23L12.5,7.82V5M4,16V24H6V21H18V24L22,20L18,16V19H6V16'
export default createSvgIcon(
  ClockStartData,
  'ClockStart',
  true
)