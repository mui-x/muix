import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const MessageImageData = 'M5,14L8.5,9.5L11,12.5L14.5,8L19,14M20,2H4C2.9,2 2,2.9 2,4V22L6,18H20C21.1,18 22,17.1 22,16V4C22,2.89 21.1,2 20,2Z'
export default createSvgIcon(
  MessageImageData,
  'MessageImage',
  true
)