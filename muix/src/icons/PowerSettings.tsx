import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const PowerSettingsData = 'M15,24H17V22H15M16.56,4.44L15.11,5.89C16.84,6.94 18,8.83 18,11C18,14.31 15.31,17 12,17C8.69,17 6,14.31 6,11C6,8.83 7.16,6.94 8.88,5.88L7.44,4.44C5.36,5.88 4,8.28 4,11C4,15.42 7.58,19 12,19C16.42,19 20,15.42 20,11C20,8.28 18.64,5.88 16.56,4.44M13,2H11V12H13M11,24H13V22H11M7,24H9V22H7V24Z'
export default createSvgIcon(
  PowerSettingsData,
  'PowerSettings',
  true
)