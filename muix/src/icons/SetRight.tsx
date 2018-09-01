import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const SetRightData = 'M15,19C13.96,19 12.94,18.76 12,18.32C11.06,18.76 10.04,19 9,19C5.13,19 2,15.87 2,12C2,8.13 5.13,5 9,5C10.04,5 11.06,5.24 12,5.68C12.94,5.24 13.96,5 15,5C18.87,5 22,8.13 22,12C22,15.87 18.87,19 15,19M9,17L10,16.89C8.72,15.59 8,13.83 8,12C8,10.17 8.72,8.41 10,7.1L9,7C6.24,7 4,9.24 4,12C4,14.76 6.24,17 9,17M12,16C13.26,15.05 14,13.57 14,12C14,10.43 13.26,8.95 12,8C10.74,8.95 10,10.43 10,12C10,13.57 10.74,15.05 12,16Z'
export default createSvgIcon(
  SetRightData,
  'SetRight',
  true
)