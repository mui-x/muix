﻿import React from 'react'
import ReactN from 'react-native'

import { classNames, withStyles } from 'muix-styles'
import { sheet } from '../../common/ScrollView/ScrollView'
import { ScrollView as ScrollViewRN } from 'react-native' 

const scrollView: Muix.CodeSFCNative<MuixScrollView.Shape> = props => {
  const { classes, style, ...rest } = props
  //console.log('scrollView: ', classNames(style, classes.root))
  return <ScrollViewRN style={classNames(style, classes.root)} {...rest} contentContainerStyle={{}} />
}

const ScrollView = withStyles<MuixScrollView.Shape>(sheet, { name: 'MuiScrollView' })(scrollView)

export default ScrollView