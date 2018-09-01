import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const PipeData = 'M22,14H20V16H14V13H16V11H14V6C14,4.9 13.1,4 12,4H4V2H2V10H4V8H10V11H8V13H10V18C10,19.1 10.9,20 12,20H20V22H22'
export default createSvgIcon(
  PipeData,
  'Pipe',
  true
)