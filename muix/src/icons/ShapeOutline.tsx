import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const ShapeOutlineData = 'M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15C16.12,15 15,16.12 15,17.5C15,18.88 16.12,20 17.5,20C18.88,20 20,18.88 20,17.5C20,16.12 18.88,15 17.5,15Z'
export default createSvgIcon(
  ShapeOutlineData,
  'ShapeOutline',
  true
)