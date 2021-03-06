import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const ServerNetworkOffData = 'M13,18H14C14.55,18 15,18.45 15,19H15.73L13,16.27V18M22,19V20.18L20.82,19H22M21,21.72L19.73,23L17.73,21H15C15,21.55 14.55,22 14,22H10C9.45,22 9,21.55 9,21H2V19H9C9,18.45 9.45,18 10,18H11V16H4C3.45,16 3,15.55 3,15V11C3,10.45 3.45,10 4,10H6.73L4.73,8H4C3.45,8 3,7.55 3,7V6.27L1,4.27L2.28,3L21,21.72M4,2H20C20.55,2 21,2.45 21,3V7C21,7.55 20.55,8 20,8H9.82L7,5.18V4H5.82L3.84,2C3.89,2 3.94,2 4,2M20,10C20.55,10 21,10.45 21,11V15C21,15.55 20.55,16 20,16H17.82L11.82,10H20M9,6H10V4H9V6M9,14H10V13.27L9,12.27V14M5,12V14H7V12H5Z'
export default createSvgIcon(
  ServerNetworkOffData,
  'ServerNetworkOff',
  true
)