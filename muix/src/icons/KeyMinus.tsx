import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const KeyMinusData = 'M6.5,3C8.46,3 10.13,4.25 10.74,6H22V9H18V12H15V9H10.74C10.13,10.75 8.46,12 6.5,12C4,12 2,10 2,7.5C2,5 4,3 6.5,3M6.5,6C5.67,6 5,6.67 5,7.5C5,8.33 5.67,9 6.5,9C7.33,9 8,8.33 8,7.5C8,6.67 7.33,6 6.5,6M8,17H16V19H8V17Z'
export default createSvgIcon(
  KeyMinusData,
  'KeyMinus',
  true
)