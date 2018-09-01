import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const YinYangData = 'M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C9.79,20 8,18.21 8,16C8,13.79 9.79,12 12,12C14.21,12 16,10.21 16,8C16,5.79 14.21,4 12,4M12,6.5C12.83,6.5 13.5,7.17 13.5,8C13.5,8.83 12.83,9.5 12,9.5C11.17,9.5 10.5,8.83 10.5,8C10.5,7.17 11.17,6.5 12,6.5M12,14.5C11.17,14.5 10.5,15.17 10.5,16C10.5,16.83 11.17,17.5 12,17.5C12.83,17.5 13.5,16.83 13.5,16C13.5,15.17 12.83,14.5 12,14.5Z'
export default createSvgIcon(
  YinYangData,
  'YinYang',
  true
)