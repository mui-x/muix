import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const PrescriptionData = 'M4,4V10L4,14H6V10H8L13.41,15.41L9.83,19L11.24,20.41L14.83,16.83L18.41,20.41L19.82,19L16.24,15.41L19.82,11.83L18.41,10.41L14.83,14L10.83,10H11C12.66,10 14,8.66 14,7C14,5.34 12.66,4 11,4H4M6,6H11C11.55,6 12,6.45 12,7C12,7.55 11.55,8 11,8H6V6Z'
export default createSvgIcon(
  PrescriptionData,
  'Prescription',
  true
)