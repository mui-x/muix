import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const BowlingData = 'M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12.5,11C11.67,11 11,11.67 11,12.5C11,13.33 11.67,14 12.5,14C13.33,14 14,13.33 14,12.5C14,11.67 13.33,11 12.5,11M12,5C10.9,5 10,5.9 10,7C10,8.1 10.9,9 12,9C13.1,9 14,8.1 14,7C14,5.9 13.1,5 12,5M5.93,8.5C5.38,9.45 5.71,10.67 6.66,11.22C7.62,11.78 8.84,11.45 9.4,10.5C9.95,9.53 9.62,8.31 8.66,7.76C7.71,7.21 6.5,7.53 5.93,8.5Z'
export default createSvgIcon(
  BowlingData,
  'Bowling',
  true
)