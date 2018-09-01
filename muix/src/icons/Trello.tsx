import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const TrelloData = 'M19.5,2H4.5C3.12,2 2,3.12 2,4.5V19.5C2,20.88 3.12,22 4.5,22H19.5C20.88,22 22,20.88 22,19.5V4.5C22,3.12 20.88,2 19.5,2M10.7,17.2C10.7,17.86 10.16,18.4 9.5,18.4H5.8C5.14,18.4 4.6,17.86 4.6,17.2V5.8C4.6,5.14 5.14,4.6 5.8,4.6H9.5C10.16,4.6 10.7,5.14 10.7,5.8V17.2M19.4,12.2C19.4,12.86 18.86,13.4 18.2,13.4H14.5C13.84,13.4 13.3,12.86 13.3,12.2V5.8C13.3,5.14 13.84,4.6 14.5,4.6H18.2C18.86,4.6 19.4,5.14 19.4,5.8V12.2Z'
export default createSvgIcon(
  TrelloData,
  'Trello',
  true
)