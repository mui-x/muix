import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const SourcePullData = 'M6,3C7.66,3 9,4.34 9,6C9,7.31 8.17,8.42 7,8.83V15.17C8.17,15.58 9,16.69 9,18C9,19.66 7.66,21 6,21C4.34,21 3,19.66 3,18C3,16.69 3.83,15.58 5,15.17V8.83C3.83,8.42 3,7.31 3,6C3,4.34 4.34,3 6,3M6,5C5.45,5 5,5.45 5,6C5,6.55 5.45,7 6,7C6.55,7 7,6.55 7,6C7,5.45 6.55,5 6,5M6,17C5.45,17 5,17.45 5,18C5,18.55 5.45,19 6,19C6.55,19 7,18.55 7,18C7,17.45 6.55,17 6,17M21,18C21,19.66 19.66,21 18,21C16.34,21 15,19.66 15,18C15,16.69 15.83,15.58 17,15.17V7H15V10.25L10.75,6L15,1.75V5H17C18.1,5 19,5.9 19,7V15.17C20.17,15.58 21,16.69 21,18M18,17C17.45,17 17,17.45 17,18C17,18.55 17.45,19 18,19C18.55,19 19,18.55 19,18C19,17.45 18.55,17 18,17Z'
export default createSvgIcon(
  SourcePullData,
  'SourcePull',
  true
)