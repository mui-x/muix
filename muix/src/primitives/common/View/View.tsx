﻿import React from 'react'
import ReactN from 'react-native'

import { ViewX, AnimatedViewX } from 'muix-primitives'
import { withStyles, sheetCreator } from 'muix-styles'

export const sheet = sheetCreator<MuixView.Shape>(() => ({
  $animations: {},
  root: {},

}))

const view: Muix2.CodeSFC<MuixView.Shape> = props => {
  let { classes, theme, flip, getStyleWithSideEffect, children, style, className, animations, ...rest } = props
  const $web = rest as NoPartial<React.HTMLAttributes<HTMLDivElement>>
  const $native = rest as ReactN.ViewProperties
  return <ViewX className={getStyleWithSideEffect(classes.root, className)} $web={$web} $native={$native} children={children} style={style} />
}

const animatedView: Muix2.CodeSFC<MuixView.Shape> = props => {
  const { classes, theme, flip, getStyleWithSideEffect, children, style, className, animations, ...rest } = props
  const $web = rest as NoPartial<React.HTMLAttributes<HTMLDivElement>>
  const $native = rest as ReactN.ViewProperties
  return <AnimatedViewX className={getStyleWithSideEffect(classes.root, className)} $web={$web} $native={$native} children={children} style={style} />
}

export const AnimatedView = withStyles<MuixView.Shape>(sheet, { name: 'MuiAnimatedView' })(animatedView)

const View = withStyles<MuixView.Shape>(sheet, { name: 'MuiView' })(view)
export default View
