import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const EscalatorData = 'M20,8H18.95L6.95,20H4C2.9,20 2,19.1 2,18C2,16.9 2.9,16 4,16H5.29L7,14.29V10C7,9.45 7.45,9 8,9H9C9.55,9 10,9.45 10,10V11.29L17.29,4H20C21.1,4 22,4.9 22,6C22,7.1 21.1,8 20,8M8.5,5C9.33,5 10,5.67 10,6.5C10,7.33 9.33,8 8.5,8C7.67,8 7,7.33 7,6.5C7,5.67 7.67,5 8.5,5Z'
export default createSvgIcon(
  EscalatorData,
  'Escalator',
  true
)