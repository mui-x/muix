import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const CartPlusData = 'M11,9H13V6H16V4H13V1H11V4H8V6H11M7,18C5.9,18 5,18.9 5,20C5,21.1 5.9,22 7,22C8.1,22 9,21.1 9,20C9,18.9 8.1,18 7,18M17,18C15.9,18 15,18.9 15,20C15,21.1 15.9,22 17,22C18.1,22 19,21.1 19,20C19,18.9 18.1,18 17,18M7.17,14.75L7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.59 17.3,11.97L21.16,4.96L19.42,4H19.41L18.31,6L15.55,11H8.53L8.4,10.73L6.16,6L5.21,4L4.27,2H1V4H3L6.6,11.59L5.25,14.04C5.09,14.32 5,14.65 5,15C5,16.1 5.9,17 7,17H19V15H7.42C7.29,15 7.17,14.89 7.17,14.75Z'
export default createSvgIcon(
  CartPlusData,
  'CartPlus',
  true
)