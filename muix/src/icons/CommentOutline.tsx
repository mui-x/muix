import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const CommentOutlineData = 'M9,22C8.45,22 8,21.55 8,21V18H4C2.9,18 2,17.1 2,16V4C2,2.89 2.9,2 4,2H20C21.1,2 22,2.9 22,4V16C22,17.1 21.1,18 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z'
export default createSvgIcon(
  CommentOutlineData,
  'CommentOutline',
  true
)