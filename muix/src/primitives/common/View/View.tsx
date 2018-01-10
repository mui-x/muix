﻿import React from 'react'

import { ViewX } from 'muix-primitives'
import { withStyles, sheetCreator } from 'muix-styles'

export const sheet = sheetCreator<MuixView.Shape>(() => ({
  root: { }
}))

const view: Muix.CodeSFC<MuixView.Shape> = props => {
  const { classes, theme, flip, innerRef, getStyleWithSideEffect, children, style, ...rest } = props
  return <ViewX className={getStyleWithSideEffect(classes.root)} $web={rest as React.HTMLAttributes<HTMLDivElement>} $native={rest as ReactN.ViewProperties} children={children} style={style} />
}

const View = withStyles<MuixView.Shape>(sheet, { name: 'MuiView' })(view)

export default View
