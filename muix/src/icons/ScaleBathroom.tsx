import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const ScaleBathroomData = 'M5,2H19C20.1,2 21,2.9 21,4V20C21,21.1 20.1,22 19,22H5C3.9,22 3,21.1 3,20V4C3,2.9 3.9,2 5,2M12,4C9.79,4 8,5.79 8,8H11.26L10.85,5.23L12.9,8H16C16,5.79 14.21,4 12,4M5,10V20H19V10H5Z'
export default createSvgIcon(
  ScaleBathroomData,
  'ScaleBathroom',
  true
)