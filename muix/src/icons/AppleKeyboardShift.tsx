import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const AppleKeyboardShiftData = 'M15,18V12H17.17L12,6.83L6.83,12H9V18H15M12,4L22,14H17V20H7V14H2L12,4Z'
export default createSvgIcon(
  AppleKeyboardShiftData,
  'AppleKeyboardShift',
  true
)