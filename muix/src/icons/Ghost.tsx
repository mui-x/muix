import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const GhostData = 'M12,2C7.03,2 3,6.03 3,11V22L6,19L9,22L12,19L15,22L18,19L21,22V11C21,6.03 16.97,2 12,2M9,8C10.1,8 11,8.9 11,10C11,11.1 10.1,12 9,12C7.9,12 7,11.1 7,10C7,8.9 7.9,8 9,8M15,8C16.1,8 17,8.9 17,10C17,11.1 16.1,12 15,12C13.9,12 13,11.1 13,10C13,8.9 13.9,8 15,8Z'
export default createSvgIcon(
  GhostData,
  'Ghost',
  true
)