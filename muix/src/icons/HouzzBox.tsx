import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const HouzzBoxData = 'M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M13.5,18.71H18V11.09L9,8.5V5.29H6V18.71H10.5V14.5H13.5V18.71Z'
export default createSvgIcon(
  HouzzBoxData,
  'HouzzBox',
  true
)