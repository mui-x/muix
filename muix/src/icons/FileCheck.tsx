import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const FileCheckData = 'M13,9H18.5L13,3.5V9M6,2H14L20,8V20C20,21.1 19.1,22 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M10.45,18.46L15.2,13.71L14.03,12.3L10.45,15.88L8.86,14.3L7.7,15.46L10.45,18.46Z'
export default createSvgIcon(
  FileCheckData,
  'FileCheck',
  true
)