import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const WeightData = 'M12,3C14.21,3 16,4.79 16,7C16,7.73 15.81,8.41 15.46,9H18C18.95,9 19.75,9.67 19.95,10.56C21.96,18.57 22,18.78 22,19C22,20.1 21.1,21 20,21H4C2.9,21 2,20.1 2,19C2,18.78 2.04,18.57 4.05,10.56C4.25,9.67 5.05,9 6,9H8.54C8.19,8.41 8,7.73 8,7C8,4.79 9.79,3 12,3M12,5C10.9,5 10,5.9 10,7C10,8.1 10.9,9 12,9C13.1,9 14,8.1 14,7C14,5.9 13.1,5 12,5Z'
export default createSvgIcon(
  WeightData,
  'Weight',
  true
)