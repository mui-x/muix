import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const UberData = 'M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.64,22 2.27,17.79 2,12.5H9V14.5C9,14.78 9.22,15 9.5,15H14.5C14.78,15 15,14.78 15,14.5V9.5C15,9.22 14.78,9 14.5,9H9.5C9.22,9 9,9.22 9,9.5V11.5H2C2.27,6.21 6.64,2 12,2Z'
export default createSvgIcon(
  UberData,
  'Uber',
  true
)