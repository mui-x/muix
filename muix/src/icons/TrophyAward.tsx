import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const TrophyAwardData = 'M15.2,10.7L16.6,16L12,12.2L7.4,16L8.8,10.8L4.6,7.3L10,7L12,2L14,7L19.4,7.3L15.2,10.7M14,19.1H13V16L12,15L11,16V19.1H10C8.9,19.1 8,20 8,21.1V22.1H16V21.1C16,20 15.1,19.1 14,19.1Z'
export default createSvgIcon(
  TrophyAwardData,
  'TrophyAward',
  true
)