﻿import { TBasic, TThemeConfig } from './basic'

export namespace TTheme {

  export interface WithStyleOptions<R extends TBasic.Shape> {
    getVariant?: (props: TBasic.getProps<R>) => TBasic.getVariant<R>
    variantToString?: (variant: TBasic.getVariant<R>) => string
    defaultProps?: Partial<TBasic.getProps<R>>
  }

  export type PartialSheetCreatorX<R extends TBasic.Shape = TBasic.Shape> = TBasic.PartialSheetX<R> | ((themeX: ThemeX, compThemePar: TBasic.get_$CompTheme<R>) => TBasic.PartialSheetX<R>)
  export type SheetCreatorX<R extends TBasic.Shape = TBasic.Shape> = TBasic.SheetX<R> | ((themeX: ThemeX, compThemePar: TBasic.getVariant<R>) => TBasic.SheetX<R>)
  //export type ThemeParCreatorX<R extends TBasic.Shape = TBasic.Shape> = TBasic.get_$CompTheme<R> | ((themeX: ThemeX) => TBasic.get_$CompTheme<R>)
  export type RulesetCreatorX<R extends TBasic.Shape = TBasic.Shape> = TBasic.RulesetX<TBasic.getStyle<R>> | ((theme: ThemeX, compThemePar: TBasic.get_$CompTheme<R>) => TBasic.RulesetX<TBasic.getStyle<R>>)

  export interface ThemeBase {
    type: 'ThemeX'
    $cache: {
      [P in string]?: { [id: string]: {} }
    }
  }
  export interface Theme extends TThemeConfig.Theme {
    type: 'Theme'
  }
  export type ThemeX = Partial<Overwrite<Theme, ThemeBase>>

  export interface ThemeCompX<R extends TBasic.Shape = TBasic.Shape> { sheet?: TBasic.PartialSheetX<R>, par?: TBasic.get_$CompTheme<R> }
  export interface ThemeCompSelectedX<R extends TBasic.Shape = TBasic.Shape> { theme: ThemeX, compThemeSheet?: TBasic.PartialSheetX<R>, compThemePar?: TBasic.get_$CompTheme<R> }

  //export interface ThemeCompCreatorX<R extends TBasic.Shape = TBasic.Shape> { sheet?: PartialSheetCreatorX<R>, par?: ThemeParCreatorX<R> }

  export type ThemeState = { theme: ThemeX } & { [P in keyof TBasic.Shapes]?: ThemeCompX<TBasic.Shapes[P]> }
  export type ThemeModifier = (state: ThemeState) => ThemeState

  export interface ThemeProviderProps { theme: Theme | ((theme: Theme) => Theme) }
  
}