import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const DesktopTowerData = 'M8,2H16C17.1,2 18,2.9 18,4V20C18,21.1 17.1,22 16,22H8C6.9,22 6,21.1 6,20V4C6,2.9 6.9,2 8,2M8,4V6H16V4H8M16,8H8V10H16V8M16,18H14V20H16V18Z'
export default createSvgIcon(
  DesktopTowerData,
  'DesktopTower',
  true
)