import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const PistolData = 'M7,5H23V9H22V10H16C15.45,10 15,10.45 15,11V12C15,13.1 14.1,14 13,14H9.62C9.24,14 8.89,14.22 8.72,14.56L6.27,19.45C6.1,19.79 5.76,20 5.38,20H2C2,20 -1,20 3,14C3,14 6,10 2,10V5H3L3.5,4H6.5L7,5M14,12V11C14,10.45 13.55,10 13,10H12C12,10 11,11 12,12C10.9,12 10,11.1 10,10C9.45,10 9,10.45 9,11V12C9,12.55 9.45,13 10,13H13C13.55,13 14,12.55 14,12Z'
export default createSvgIcon(
  PistolData,
  'Pistol',
  true
)