import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const ViewCarouselData = 'M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z'
export default createSvgIcon(
  ViewCarouselData,
  'ViewCarousel',
  false
)