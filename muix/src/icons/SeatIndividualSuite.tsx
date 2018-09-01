import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const SeatIndividualSuiteData = 'M7,13C8.66,13 10,11.66 10,10C10,8.34 8.66,7 7,7C5.34,7 4,8.34 4,10C4,11.66 5.34,13 7,13M19,7H11V14H3V7H1V17H23V11C23,8.79 21.21,7 19,7Z'
export default createSvgIcon(
  SeatIndividualSuiteData,
  'SeatIndividualSuite',
  true
)