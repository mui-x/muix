import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const CloudTagsData = 'M6,20C2.69,20 0,17.31 0,14C0,10.91 2.34,8.36 5.35,8.04C6.6,5.64 9.11,4 12,4C15.63,4 18.66,6.58 19.35,10C21.95,10.19 24,12.36 24,15C24,17.76 21.76,20 19,20H6M9.09,8.4L4.5,13L9.09,17.6L10.5,16.18L7.32,13L10.5,9.82L9.09,8.4M14.91,8.4L13.5,9.82L16.68,13L13.5,16.18L14.91,17.6L19.5,13L14.91,8.4Z'
export default createSvgIcon(
  CloudTagsData,
  'CloudTags',
  true
)