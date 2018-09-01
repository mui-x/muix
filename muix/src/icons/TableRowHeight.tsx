import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const TableRowHeightData = 'M3,5H15C16.1,5 17,5.9 17,7V17C17,18.1 16.1,19 15,19H3C1.9,19 1,18.1 1,17V7C1,5.9 1.9,5 3,5M3,9V12H8V9H3M10,9V12H15V9H10M3,14V17H8V14H3M10,14V17H15V14H10M23,14V7H19V9H21V12H19V14H23Z'
export default createSvgIcon(
  TableRowHeightData,
  'TableRowHeight',
  true
)