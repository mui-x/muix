import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const GoogleAssistantData = 'M7,2C3.69,2 1,4.69 1,8C1,11.31 3.69,14 7,14C10.31,14 13,11.31 13,8C13,4.69 10.31,2 7,2M21.5,6C20.67,6 20,6.67 20,7.5C20,8.33 20.67,9 21.5,9C22.33,9 23,8.33 23,7.5C23,6.67 22.33,6 21.5,6M17,8C15.34,8 14,9.34 14,11C14,12.66 15.34,14 17,14C18.66,14 20,12.66 20,11C20,9.34 18.66,8 17,8M17,15C15.07,15 13.5,16.57 13.5,18.5C13.5,20.43 15.07,22 17,22C18.93,22 20.5,20.43 20.5,18.5C20.5,16.57 18.93,15 17,15Z'
export default createSvgIcon(
  GoogleAssistantData,
  'GoogleAssistant',
  true
)