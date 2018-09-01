import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const KickstarterData = 'M10.21,9.13L13.5,4.35C14.13,3.45 14.94,3 15.93,3C16.73,3 17.43,3.29 18,3.86C18.61,4.43 18.9,5.11 18.9,5.91C18.9,6.5 18.75,7 18.43,7.47L15.46,11.8L19.1,16.41C19.46,16.87 19.64,17.41 19.64,18C19.64,18.84 19.36,19.54 18.78,20.12C18.21,20.71 17.5,21 16.7,21C15.81,21 15.13,20.71 14.66,20.13L10.21,14.57V17.63C10.21,18.5 10.05,19.19 9.75,19.67C9.2,20.56 8.39,21 7.33,21C6.37,21 5.63,20.68 5.1,20.03C4.6,19.43 4.36,18.63 4.36,17.65V6.27C4.36,5.34 4.61,4.57 5.11,3.96C5.64,3.32 6.37,3 7.3,3C8.18,3 8.92,3.32 9.5,3.96C9.83,4.32 10.04,4.68 10.13,5.04C10.18,5.27 10.21,5.69 10.21,6.3V9.13Z'
export default createSvgIcon(
  KickstarterData,
  'Kickstarter',
  true
)