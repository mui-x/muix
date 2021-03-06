import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const GlassdoorData = 'M8,2C6.34,2 5,3.34 5,5V16.5H8V5H19C19,3.34 17.66,2 16,2H8M16,7.5V19H5C5,20.66 6.34,22 8,22H16C17.66,22 19,20.66 19,19V7.5H16Z'
export default createSvgIcon(
  GlassdoorData,
  'Glassdoor',
  true
)