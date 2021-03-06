import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const CameraTimerData = 'M4.94,6.35C4.55,5.96 4.55,5.32 4.94,4.93C5.33,4.54 5.96,4.54 6.35,4.93L13.07,10.31L13.42,10.59C14.2,11.37 14.2,12.64 13.42,13.42C12.64,14.2 11.37,14.2 10.59,13.42L10.31,13.07L4.94,6.35M12,20C16.42,20 20,16.42 20,12C20,9.79 19.1,7.79 17.66,6.34L19.07,4.93C20.88,6.74 22,9.24 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12H4C4,16.42 7.58,20 12,20M12,1C13.1,1 14,1.9 14,3C14,4.1 13.1,5 12,5C10.9,5 10,4.1 10,3C10,1.9 10.9,1 12,1Z'
export default createSvgIcon(
  CameraTimerData,
  'CameraTimer',
  true
)