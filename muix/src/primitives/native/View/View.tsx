﻿import React from 'react'

import { classNames, withStyles } from 'muix-styles/native/withStyles'
import { sheet } from 'muix-primitives/common/View/View' 
import { View as RNView } from 'react-native' 

const view: Mui.CodeSFCNative<MuiView.Shape> = props => {
  const { classes, style, innerRef, ...rest } = props
  return <RNView style={classNames(classes.root, style)} ref={div => innerRef && innerRef(div)} {...rest} />
}

const View = withStyles<MuiView.Shape>(sheet, { name: 'MuiView' })(view)

export default View