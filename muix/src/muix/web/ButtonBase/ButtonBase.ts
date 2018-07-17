﻿import React from 'react'
import { styles, default as ButtonBase } from 'material-ui/ButtonBase/ButtonBase'

import { TProvider, TCommon, Types, ThemeProviderUntyped } from 'reactxx-basic'

import { ButtonBaseProps, ButtonBaseClassKey } from 'reactxx-muix/typings/ButtonBase/ButtonBase'
import { Theme } from 'reactxx-muix/web/styles/withStyles'

type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<ButtonBaseClassKey>,
  props: ButtonBaseProps,
  theme: Theme
}>

const sheet: Types.SheetCreatorX<Shape> = theme => styles as any as Types.SheetX<Shape>

export default ButtonBase as any as React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>

