import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const CameraBurstData = 'M1,5H3V19H1V5M5,5H7V19H5V5M22,5H10C9.45,5 9,5.45 9,6V18C9,18.55 9.45,19 10,19H22C22.55,19 23,18.55 23,18V6C23,5.45 22.55,5 22,5M11,17L13.5,13.85L15.29,16L17.79,12.78L21,17H11Z'
export default createSvgIcon(
  CameraBurstData,
  'CameraBurst',
  true
)