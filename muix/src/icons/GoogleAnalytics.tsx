import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const GoogleAnalyticsData = 'M19,3C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H17L15,21V9L15,5C15,3.9 15.9,3 17,3H19M5,21C3.9,21 3,20.1 3,19V17C3,15.9 3.9,15 5,15H9V11C9,9.9 9.9,9 11,9H14.5V21H5Z'
export default createSvgIcon(
  GoogleAnalyticsData,
  'GoogleAnalytics',
  true
)