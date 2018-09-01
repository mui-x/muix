import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const GolfData = 'M19.5,18C20.33,18 21,18.67 21,19.5C21,20.33 20.33,21 19.5,21C18.67,21 18,20.33 18,19.5C18,18.67 18.67,18 19.5,18M17,5.92L11,9V18.03C13.84,18.19 16,19 16,20C16,21.1 13.31,22 10,22C6.69,22 4,21.1 4,20C4,19.26 5.21,18.62 7,18.27V20H9V2L17,5.92Z'
export default createSvgIcon(
  GolfData,
  'Golf',
  true
)