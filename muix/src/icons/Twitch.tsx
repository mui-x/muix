import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const TwitchData = 'M4,2H22V14L17,19H13L10,22H7V19H2V6L4,2M20,13V4H6V16H9V19L12,16H17L20,13M15,7H17V12H15V7M12,7V12H10V7H12Z'
export default createSvgIcon(
  TwitchData,
  'Twitch',
  true
)