import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const AppleFinderData = 'M4,4H11.89C12.46,2.91 13.13,1.88 13.93,1L15.04,2.11C14.61,2.7 14.23,3.34 13.89,4H20C21.1,4 22,4.9 22,6V19C22,20.1 21.1,21 20,21H14.93L15.26,22.23L13.43,22.95L12.93,21H4C2.9,21 2,20.1 2,19V6C2,4.9 2.9,4 4,4M4,6V19H12.54C12.5,18.67 12.44,18.34 12.4,18C12.27,18 12.13,18 12,18C9.25,18 6.78,17.5 5.13,16.76L6.04,15.12C7,15.64 9.17,16 12,16C12.08,16 12.16,16 12.24,16C12.21,15.33 12.22,14.66 12.27,14H9C9,14 9.4,9.97 11,6H4M20,19V6H13C12.1,8.22 11.58,10.46 11.3,12H14.17C14,13.28 13.97,14.62 14.06,15.93C15.87,15.8 17.25,15.5 17.96,15.12L18.87,16.76C17.69,17.3 16.1,17.7 14.29,17.89C14.35,18.27 14.41,18.64 14.5,19H20M6,8H8V11H6V8M16,8H18V11H16V8Z'
export default createSvgIcon(
  AppleFinderData,
  'AppleFinder',
  true
)