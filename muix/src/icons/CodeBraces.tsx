import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const CodeBracesData = 'M8,3C6.9,3 6,3.9 6,5V9C6,10.1 5.1,11 4,11H3V13H4C5.1,13 6,13.9 6,15V19C6,20.1 6.9,21 8,21H10V19H8V14C8,12.9 7.1,12 6,12C7.1,12 8,11.1 8,10V5H10V3M16,3C17.1,3 18,3.9 18,5V9C18,10.1 18.9,11 20,11H21V13H20C18.9,13 18,13.9 18,15V19C18,20.1 17.1,21 16,21H14V19H16V14C16,12.9 16.9,12 18,12C16.9,12 16,11.1 16,10V5H14V3H16Z'
export default createSvgIcon(
  CodeBracesData,
  'CodeBraces',
  true
)