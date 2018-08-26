import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape, SvgIconClassKey } from 'reactxx-mui-web/SvgIcon/SvgIcon'
import { Theme } from 'reactxx-mui-web/styles/createMuiTheme'

import { Types, TCommon, TAddIn, TCommonStyles } from 'reactxx-basic'; 
    
export default createSvgIcon(
  'M3,5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5M7.5,6V18H12.5C14.75,18 16.5,16.75 16.5,14.5C16.5,12.5 14.77,11.5 13.25,11.5C14.77,11.5 16,10.27 16,8.75C16,7.23 14.27,6 12.75,6H7.5M10,11V8H11.5C12.33,8 13,8.67 13,9.5C13,10.33 12.33,11 11.5,11H10M10,13H12C12.83,13 13.5,13.67 13.5,14.5C13.5,15.33 12.83,16 12,16H10V13Z',
  'Bootstrap',
  true
)