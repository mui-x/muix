import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const DivisionBoxData = 'M17,13V11H7V13H17M19,3C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19M12,7C11.45,7 11,7.45 11,8C11,8.55 11.45,9 12,9C12.55,9 13,8.55 13,8C13,7.45 12.55,7 12,7M12,15C11.45,15 11,15.45 11,16C11,16.55 11.45,17 12,17C12.55,17 13,16.55 13,16C13,15.45 12.55,15 12,15Z'
export default createSvgIcon(
  DivisionBoxData,
  'DivisionBox',
  true
)