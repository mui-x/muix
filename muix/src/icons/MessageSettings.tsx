import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const MessageSettingsData = 'M20,2H4C2.9,2 2,2.9 2,4V22L6,18H20C21.1,18 22,17.1 22,16V4C22,2.9 21.1,2 20,2M11,24H13V22H11V24M7,24H9V22H7V24M15,24H17V22H15V24Z'
export default createSvgIcon(
  MessageSettingsData,
  'MessageSettings',
  true
)