import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape, SvgIconClassKey } from 'reactxx-mui-web/SvgIcon/SvgIcon'
import { Theme } from 'reactxx-mui-web/styles/createMuiTheme'

import { Types, TCommon, TAddIn, TCommonStyles } from 'reactxx-basic'; 
    
export default createSvgIcon(
  'M5,8H19C20.1,8 21,8.9 21,10V20C21,21.1 20.1,22 19,22H5C3.9,22 3,21.1 3,20V10C3,8.9 3.9,8 5,8M5,12V15H11V12H5M13,12V15H19V12H13M5,17V20H11V17H5M13,17V20H19V17H13M11,2H21V6H19V4H13V6H11V2Z',
  'TableColumnWidth',
  true
)