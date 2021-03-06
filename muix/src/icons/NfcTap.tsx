import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const NfcTapData = 'M12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10M4,4H11C12.1,4 13,4.9 13,6V9H11V6H4V11H6V9L9,12L6,15V13H4C2.9,13 2,12.1 2,11V6C2,4.9 2.9,4 4,4M20,20H13C11.9,20 11,19.1 11,18V15H13V18H20V13H18V15L15,12L18,9V11H20C21.1,11 22,11.9 22,13V18C22,19.1 21.1,20 20,20Z'
export default createSvgIcon(
  NfcTapData,
  'NfcTap',
  true
)