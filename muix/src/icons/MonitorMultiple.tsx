import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const MonitorMultipleData = 'M22,17V7H6V17H22M22,5C23.1,5 24,5.9 24,7V17C24,18.11 23.1,19 22,19H16V21H18V23H10V21H12V19H6C4.89,19 4,18.11 4,17V7C4,5.9 4.9,5 6,5H22M2,3V15H0V3C0,1.9 0.9,1 2,1H20V3H2Z'
export default createSvgIcon(
  MonitorMultipleData,
  'MonitorMultiple',
  true
)