import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const TeamviewerData = 'M19,3C20.1,3 21,3.9 21,5V19C21,20.11 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19M12,5C8.13,5 5,8.13 5,12C5,15.87 8.13,19 12,19C15.87,19 19,15.87 19,12C19,8.13 15.87,5 12,5M7,12L10,9V11H14V9L17,12L14,15V13H10V15L7,12Z'
export default createSvgIcon(
  TeamviewerData,
  'Teamviewer',
  true
)