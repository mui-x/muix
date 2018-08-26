import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape, SvgIconClassKey } from 'reactxx-mui-web/SvgIcon/SvgIcon'
import { Theme } from 'reactxx-mui-web/styles/createMuiTheme'

import { Types, TCommon, TAddIn, TCommonStyles } from 'reactxx-basic'; 
    
export default createSvgIcon(
  'M11.25,6C11.25,4.21 12.71,2.75 14.5,2.75C16.29,2.75 17.75,4.21 17.75,6C17.75,6.42 18.08,6.75 18.5,6.75C18.92,6.75 19.25,6.42 19.25,6V5.25H20.75V6C20.75,7.24 19.74,8.25 18.5,8.25C17.26,8.25 16.25,7.24 16.25,6C16.25,5.03 15.47,4.25 14.5,4.25C13.53,4.25 12.75,5.03 12.75,6H14V7.29C16.89,8.15 19,10.83 19,14C19,17.87 15.87,21 12,21C8.13,21 5,17.87 5,14C5,10.83 7.11,8.15 10,7.29V6H11.25M22,6H24V7H22V6M19,4V2H20V4H19M20.91,4.38L22.33,2.96L23.04,3.67L21.62,5.09L20.91,4.38Z',
  'Bomb',
  true
)