import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const MarginData = 'M20,4V9L18.5,7.5L5.5,20.5L3.5,18.5L16.5,5.5L15,4H20M17,20C15.34,20 14,18.66 14,17V15C14,13.34 15.34,12 17,12C18.66,12 20,13.34 20,15V17C20,18.66 18.66,20 17,20M17,14C16.45,14 16,14.45 16,15V17C16,17.55 16.45,18 17,18C17.55,18 18,17.55 18,17V15C18,14.45 17.55,14 17,14M7,12C5.34,12 4,10.66 4,9V7C4,5.34 5.34,4 7,4C8.66,4 10,5.34 10,7V9C10,10.66 8.66,12 7,12M7,6C6.45,6 6,6.45 6,7V9C6,9.55 6.45,10 7,10C7.55,10 8,9.55 8,9V7C8,6.45 7.55,6 7,6Z'
export default createSvgIcon(
  MarginData,
  'Margin',
  true
)