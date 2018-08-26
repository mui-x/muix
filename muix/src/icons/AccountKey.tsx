import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape, SvgIconClassKey } from 'reactxx-mui-web/SvgIcon/SvgIcon'
import { Theme } from 'reactxx-mui-web/styles/createMuiTheme'

import { Types, TCommon, TAddIn, TCommonStyles } from 'reactxx-basic'; 
    
export default createSvgIcon(
  'M11,10V12H10V14H8V12H5.83C5.42,13.17 4.31,14 3,14C1.34,14 0,12.66 0,11C0,9.34 1.34,8 3,8C4.31,8 5.42,8.83 5.83,10H11M3,10C2.45,10 2,10.45 2,11C2,11.55 2.45,12 3,12C3.55,12 4,11.55 4,11C4,10.45 3.55,10 3,10M16,14C18.67,14 24,15.34 24,18V20H8V18C8,15.34 13.33,14 16,14M16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12Z',
  'AccountKey',
  true
)