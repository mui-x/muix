import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const LavaLampData = 'M10,3L8,16H16L14,3H10M11.5,5.75C11.91,5.75 12.25,6.09 12.25,6.5C12.25,6.91 11.91,7.25 11.5,7.25C11.09,7.25 10.75,6.91 10.75,6.5C10.75,6.09 11.09,5.75 11.5,5.75M12.5,8.5C13.05,8.5 13.5,8.95 13.5,9.5C13.5,10.05 13.05,10.5 12.5,10.5C11.95,10.5 11.5,10.05 11.5,9.5C11.5,8.95 11.95,8.5 12.5,8.5M11.5,12C12.33,12 13,12.67 13,13.5C13,14.33 12.33,15 11.5,15C10.67,15 10,14.33 10,13.5C10,12.67 10.67,12 11.5,12M8,17L10,19L8,21H16L14,19L16,17H8Z'
export default createSvgIcon(
  LavaLampData,
  'LavaLamp',
  true
)