import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const AccountBoxOutlineData = 'M19,19H5V5H19M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5M12,12.25C13.24,12.25 14.25,11.24 14.25,10C14.25,8.76 13.24,7.75 12,7.75C10.76,7.75 9.75,8.76 9.75,10C9.75,11.24 10.76,12.25 12,12.25Z'
export default createSvgIcon(
  AccountBoxOutlineData,
  'AccountBoxOutline',
  true
)