import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const ShortTextData = 'M4 9h16v2H4zm0 4h10v2H4z'
export default createSvgIcon(
  ShortTextData,
  'ShortText',
  false
)