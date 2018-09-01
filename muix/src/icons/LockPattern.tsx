import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const LockPatternData = 'M7,3C9.21,3 11,4.79 11,7C11,8.86 9.73,10.43 8,10.87V13.13C8.37,13.22 8.72,13.37 9.04,13.56L13.56,9.04C13.2,8.44 13,7.75 13,7C13,4.79 14.79,3 17,3C19.21,3 21,4.79 21,7C21,9.21 19.21,11 17,11C16.26,11 15.57,10.8 15,10.45L10.45,15C10.8,15.57 11,16.26 11,17C11,19.21 9.21,21 7,21C4.79,21 3,19.21 3,17C3,15.14 4.27,13.57 6,13.13V10.87C4.27,10.43 3,8.86 3,7C3,4.79 4.79,3 7,3M17,13C19.21,13 21,14.79 21,17C21,19.21 19.21,21 17,21C14.79,21 13,19.21 13,17C13,14.79 14.79,13 17,13M17,15C15.9,15 15,15.9 15,17C15,18.1 15.9,19 17,19C18.1,19 19,18.1 19,17C19,15.9 18.1,15 17,15Z'
export default createSvgIcon(
  LockPatternData,
  'LockPattern',
  true
)