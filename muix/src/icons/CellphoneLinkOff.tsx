import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const CellphoneLinkOffData = 'M23,8H17C16.45,8 16,8.45 16,9V13.18L18,15.18V10H22V17H19.82L22.82,20H23C23.55,20 24,19.55 24,19V9C24,8.45 23.55,8 23,8M4,6.27L14.73,17H4V6.27M1.92,1.65L0.65,2.92L2.47,4.74C2.18,5.08 2,5.5 2,6V17H0V20H17.73L20.08,22.35L21.35,21.08L3.89,3.62L1.92,1.65M22,6V4H6.82L8.82,6H22Z'
export default createSvgIcon(
  CellphoneLinkOffData,
  'CellphoneLinkOff',
  true
)