import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const RunFastData = 'M16.5,5.5C17.6,5.5 18.5,4.6 18.5,3.5C18.5,2.4 17.6,1.5 16.5,1.5C15.4,1.5 14.5,2.4 14.5,3.5C14.5,4.6 15.4,5.5 16.5,5.5M12.9,19.4L13.9,15L16,17V23H18V15.5L15.9,13.5L16.5,10.5C17.89,12.09 19.89,13 22,13V11C20.24,11.03 18.6,10.11 17.7,8.6L16.7,7C16.34,6.4 15.7,6 15,6C14.7,6 14.5,6.1 14.2,6.1L9,8.3V13H11V9.6L12.8,8.9L11.2,17L6.3,16L5.9,18L12.9,19.4M4,9C3.45,9 3,8.55 3,8C3,7.45 3.45,7 4,7H7V9H4M5,5C4.45,5 4,4.55 4,4C4,3.45 4.45,3 5,3H10V5H5M3,13C2.45,13 2,12.55 2,12C2,11.45 2.45,11 3,11H7V13H3Z'
export default createSvgIcon(
  RunFastData,
  'RunFast',
  true
)