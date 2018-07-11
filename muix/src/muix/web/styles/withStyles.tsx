﻿import { default as createMuiTheme } from 'material-ui/styles/createMuiTheme';
import React from 'react';
import { RenderAddIn, TCommon, ThemeProviderUntyped, TProvider, Types, withStyles } from 'reactxx-basic';
import { Theme as MuiTheme } from '../../typings/styles/createMuiTheme';
import createSheetHook from './create-sheet-hook';




export type Theme = MuiTheme & TCommon.ThemeBase

export const ThemeProvider = ThemeProviderUntyped as TCommon.ThemeProviderTyped<Theme>

// empty addIn configuration
const renderAddIn: RenderAddIn = {
  propsAddInPipeline: (renderState, next) => next,
  styleAddInPipeline: (renderState, next) => next,
  getDefaultTheme: () => createMuiTheme() as Theme,
  createSheetHook: createSheetHook,
}

const withStylesMui = <R extends Types.Shape>
  (sheetCreator: Types.SheetCreatorX<R>, options?: { name: string }) => (component) => 
    withStyles<R, {}>(sheetCreator, renderAddIn, options, null)(component) as React.ComponentClass<Types.PropsX<R>> & TProvider<R>

export default withStylesMui