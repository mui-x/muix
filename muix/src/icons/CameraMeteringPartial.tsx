import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const CameraMeteringPartialData = 'M4,4H20C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4M4,6V18H20V6H4M12,7.5C14.14,7.5 15.93,9 16.39,11H14.83C14.42,9.83 13.31,9 12,9C10.69,9 9.58,9.83 9.17,11H7.61C8.07,9 9.86,7.5 12,7.5M12,16.5C9.86,16.5 8.07,15 7.61,13H9.17C9.58,14.17 10.69,15 12,15C13.31,15 14.42,14.17 14.83,13H16.39C15.93,15 14.14,16.5 12,16.5Z'
export default createSvgIcon(
  CameraMeteringPartialData,
  'CameraMeteringPartial',
  true
)