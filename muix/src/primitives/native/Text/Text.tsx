﻿import React from 'react'
import ReactN from 'react-native'

import { classNames, withStyles } from 'muix-styles'
import { sheet } from '../../common/Text/Text' 
import { TextNative } from '../for-components'

const text: Muix.CodeSFCNative<MuixText.Shape> = props => {
  const { classes, theme, flip, innerRef, getStyleWithSideEffect, children, ...rest } = props
  return <TextNative className={getStyleWithSideEffect(classes.root) as ReactN.TextStyle} $native={rest} children={children} />
}

const Text = withStyles<MuixText.Shape>(sheet, { name: 'MuiText' })(text)

export default Text