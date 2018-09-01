import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const FaxData = 'M11,6H16V8H11V6M8,9V3H19V9C20.66,9 22,10.34 22,12V18H19V21H8V18H7V9H8M10,5V9H17V5H10M10,15V19H17V15H10M19,11C18.45,11 18,11.45 18,12C18,12.55 18.45,13 19,13C19.55,13 20,12.55 20,12C20,11.45 19.55,11 19,11M4,9H5C5.55,9 6,9.45 6,10V17C6,17.55 5.55,18 5,18H4C2.9,18 2,17.1 2,16V11C2,9.9 2.9,9 4,9Z'
export default createSvgIcon(
  FaxData,
  'Fax',
  true
)