import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape, SvgIconClassKey } from 'reactxx-mui-web/SvgIcon/SvgIcon'
import { Theme } from 'reactxx-mui-web/styles/createMuiTheme'

import { Types, TCommon, TAddIn, TCommonStyles } from 'reactxx-basic'; 
    
export default createSvgIcon(
  'M19,15.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9C10,8.45 10.45,8 11,8C11.55,8 12,8.45 12,9V7C12,6.45 12.45,6 13,6C13.55,6 14,6.45 14,7V12L18.15,13.84C18.66,14.07 19,14.58 19,15.14M15,10.45V9.24L15,9.23C15.23,9.03 15.42,8.79 15.57,8.54C15.84,8.09 16,7.56 16,7C16,5.34 14.66,4 13,4C12.21,4 11.5,4.31 10.95,4.81L10.81,4.95C10.68,5.09 10.56,5.24 10.46,5.4C10.36,5.56 10.27,5.74 10.2,5.92C10.17,6 10.15,6.06 10.13,6.13C8.9,6.5 8,7.65 8,9C8,9.7 8.24,10.34 8.64,10.85C8.74,11 8.87,11.11 9,11.23V11.24L9,12.46V12.46C7.8,11.77 7,10.5 7,9C7,7.38 7.97,6 9.35,5.35C10,3.97 11.38,3 13,3C15.21,3 17,4.79 17,7C17,8.5 16.2,9.77 15,10.46V10.45Z',
  'GestureTwoTap',
  true
)