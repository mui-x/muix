import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const OnenoteData = 'M1.96,4.8L14,3.08V5H20L21,5C21.55,5 22,5.45 22,6V10C22,10.55 21.55,11 21,11H20V19H14V21L1.96,19.21V4.8M11,16.75V8.25L9,8.5V12.75L7,8.75L5,9V16L6.5,16.25V10.75L9,16.5L11,16.75M14,14H18V13H14V14M14,11H18V10H14V11M14,8H18V7H14V8M14,16V17H18V16H14Z'
export default createSvgIcon(
  OnenoteData,
  'Onenote',
  true
)