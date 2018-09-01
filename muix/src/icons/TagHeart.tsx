import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const TagHeartData = 'M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.9,2 2,2.9 2,4V11C2,11.55 2.22,12.05 2.59,12.42L11.59,21.42C11.95,21.78 12.45,22 13,22C13.55,22 14.05,21.78 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.45 21.77,11.94 21.41,11.58M5.5,7C4.67,7 4,6.33 4,5.5C4,4.67 4.67,4 5.5,4C6.33,4 7,4.67 7,5.5C7,6.33 6.33,7 5.5,7M17.27,15.27L13,19.54L8.73,15.27C8.28,14.81 8,14.19 8,13.5C8,12.12 9.12,11 10.5,11C11.19,11 11.82,11.28 12.27,11.74L13,12.46L13.73,11.73C14.18,11.28 14.81,11 15.5,11C16.88,11 18,12.12 18,13.5C18,14.19 17.72,14.82 17.27,15.27Z'
export default createSvgIcon(
  TagHeartData,
  'TagHeart',
  true
)