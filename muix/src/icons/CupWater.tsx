import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const CupWaterData = 'M18.32,8H5.67L5.23,4H18.77M12,19C10.34,19 9,17.66 9,16C9,14 12,10.6 12,10.6C12,10.6 15,14 15,16C15,17.66 13.66,19 12,19M3,2L5,20.23C5.13,21.23 5.97,22 7,22H17C18,22 18.87,21.23 19,20.23L21,2H3Z'
export default createSvgIcon(
  CupWaterData,
  'CupWater',
  true
)