﻿import { TBasic } from './basic'

export namespace TAddInConfig {
  //******************** Cross platform 
  export interface RulesetAddInX<T extends TBasic.RulesetNativeIds, R extends TBasic.Shape> { }
  export interface SheetXAddIn<R extends TBasic.Shape = TBasic.Shape> { }

  //******************** Platform specific
  export type RulesetWithAddIn<R extends TBasic.Shape = TBasic.Shape> = TBasic.Ruleset
  export interface RulesetWithAddInWeb<R extends TBasic.Shape = TBasic.Shape> extends TBasic.RulesetWeb { }
  export type RulesetWithAddInNative<T extends TBasic.RulesetNativeIds, R extends TBasic.Shape = TBasic.Shape> = TBasic.NativeRules<T>

  export interface SheetAddInWeb<R extends TBasic.Shape = TBasic.Shape> { }
  export interface SheetAddInNative<R extends TBasic.Shape = TBasic.Shape> { }

  export interface PropX<R extends TBasic.Shape = TBasic.Shape> {
    style?: TBasic.RulesetX<TBasic.getStyle<R>>
    className?: TBasic.RulesetX<TBasic.getStyle<R>>
    classes?: TBasic.PartialSheetX<R> //| PartialSheetInCode<R>> /*cross platform sheet*/  /*platform specific sheet (when component is used in other component)*/
    $web?: Partial<TBasic.getPropsWeb<R>> //web specific style
    $native?: Partial<TBasic.getPropsNative<R>> //native specific style
    ignore?: boolean
  }

  export interface CodePropsWeb<R extends TBasic.Shape = TBasic.Shape> {
    mergeRulesetWithOverrides
    theme
    animations
    mediaq
  }

  export type CodePropsNative<R extends TBasic.Shape = TBasic.Shape> = CodePropsWeb<R>
  export type CodeProps<R extends TBasic.Shape = TBasic.Shape> = CodePropsWeb<R>

}