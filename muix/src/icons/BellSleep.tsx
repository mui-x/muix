import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const BellSleepData = 'M14,9.8L11.2,13.2H14V15H9V13.2L11.8,9.8H9V8H14M18,16V10.5C18,7.43 15.86,4.86 13,4.18V3.5C13,2.67 12.33,2 11.5,2C10.67,2 10,2.67 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18M11.5,22C12.6,22 13.5,21.1 13.5,20H9.5C9.5,21.1 10.4,22 11.5,22Z'
export default createSvgIcon(
  BellSleepData,
  'BellSleep',
  true
)