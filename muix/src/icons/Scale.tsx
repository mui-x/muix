import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const ScaleData = 'M8.46,15.06L7.05,16.47L5.68,15.1C4.82,16.21 4.24,17.54 4.06,19H6V21H2V20C2,15.16 5.44,11.13 10,10.2V8.2L2,5V3H22V5L14,8.2V10.2C18.56,11.13 22,15.16 22,20V21H18V19H19.94C19.76,17.54 19.18,16.21 18.32,15.1L16.95,16.47L15.54,15.06L16.91,13.68C15.8,12.82 14.46,12.24 13,12.06V14H11V12.06C9.54,12.24 8.2,12.82 7.09,13.68L8.46,15.06M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C11.68,22 11.38,21.93 11.12,21.79L7.27,20L11.12,18.21C11.38,18.07 11.68,18 12,18Z'
export default createSvgIcon(
  ScaleData,
  'Scale',
  true
)