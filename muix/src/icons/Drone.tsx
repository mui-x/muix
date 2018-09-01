import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const DroneData = 'M22,11H21L20,9H13.75L16,12.5H14L10.75,9H4C3.45,9 2,8.55 2,8C2,7.45 3.5,5.5 5.5,5.5C7.5,5.5 7.67,6.5 9,7H21C21.55,7 22,7.45 22,8V9L22,11M10.75,6.5L14,3H16L13.75,6.5H10.75M18,11V9.5H19.75L19,11H18M3,19C2.45,19 2,18.55 2,18C2,17.45 2.45,17 3,17C5.21,17 7,18.79 7,21C7,21.55 6.55,22 6,22C5.45,22 5,21.55 5,21C5,19.9 4.1,19 3,19M11,21C11,21.55 10.55,22 10,22C9.45,22 9,21.55 9,21C9,17.69 6.31,15 3,15C2.45,15 2,14.55 2,14C2,13.45 2.45,13 3,13C7.42,13 11,16.58 11,21Z'
export default createSvgIcon(
  DroneData,
  'Drone',
  true
)