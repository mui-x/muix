import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import React from 'react'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'
import { SvgIconClassKey } from 'reactxx-mui-web/SvgIcon/SvgIcon'
import { Theme } from 'reactxx-mui-web/styles/createMuiTheme';

import { Types, TCommon, TAddIn, TCommonStyles } from 'reactxx-basic'; 
    
export default createSvgIcon(
  'M14,7H10V2.1C12.28,2.56 14,4.58 14,7M4,7C4,4.58 5.72,2.56 8,2.1V7H4M14,12C14,14.42 12.28,16.44 10,16.9V18C10,19.66 11.34,21 13,21C14.66,21 16,19.66 16,18V13C16,10.79 17.79,9 20,9H22L21,10L22,11H20C18.9,11 18,11.9 18,13H18V18C18,20.76 15.76,23 13,23C10.24,23 8,20.76 8,18V16.9C5.72,16.44 4,14.42 4,12V9H14V12Z',
  'MouseVariant',
  true
)