import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const CursorPointerData = 'M10,2C11.1,2 12,2.9 12,4V8.5C12,8.5 14,8.25 14,9.25C14,9.25 16,9 16,10C16,10 18,9.75 18,10.75C18,10.75 20,10.5 20,11.5V15C20,16 17,21 17,22H9C9,22 7,15 4,13C4,13 3,7 8,12V4C8,2.9 8.9,2 10,2Z'
export default createSvgIcon(
  CursorPointerData,
  'CursorPointer',
  true
)