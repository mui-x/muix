import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const FormatPageBreakData = 'M18,20H6V18H4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V18H18V20M14,2H6C4.9,2 4,2.9 4,4V12H6V4H14V8H18V12H20V8L14,2M11,16H8V14H11V16M16,16H13V14H16V16M3,14H6V16H3V14M21,16H18V14H21V16Z'
export default createSvgIcon(
  FormatPageBreakData,
  'FormatPageBreak',
  true
)