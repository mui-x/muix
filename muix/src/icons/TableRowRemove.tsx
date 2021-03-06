import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const TableRowRemoveData = 'M9.41,13L12,15.59L14.59,13L16,14.41L13.41,17L16,19.59L14.59,21L12,18.41L9.41,21L8,19.59L10.59,17L8,14.41L9.41,13M22,9C22,10.1 21.1,11 20,11H4C2.9,11 2,10.1 2,9V6C2,4.9 2.9,4 4,4H20C21.1,4 22,4.9 22,6V9M4,9H8V6H4V9M10,9H14V6H10V9M16,9H20V6H16V9Z'
export default createSvgIcon(
  TableRowRemoveData,
  'TableRowRemove',
  true
)