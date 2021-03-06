import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const HomeVariantData = 'M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20M14,14V17H17V14H14Z'
export default createSvgIcon(
  HomeVariantData,
  'HomeVariant',
  true
)