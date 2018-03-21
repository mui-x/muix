﻿import ReactN from 'react-native'
import { TCommonStyles } from './common-styles'

export namespace TBasic {

  export const enum Consts {
    textClassName = 'reactxx-text'
  }

  export type MouseEvent = (event?: React.MouseEvent<Element>) => void

  export interface OnPressX { onPress?: MouseEvent; onLongPress: () => void }
  export interface OnPressAllX extends OnPressX { onPressIn?: MouseEvent; onPressOut?: MouseEvent }

  export interface OnPressAllWeb { onClick?: React.MouseEventHandler<Element>; onMouseDown?: React.MouseEventHandler<Element>; onMouseUp?: React.MouseEventHandler<Element> }
  export interface OnPressAllNative { onPress: () => void; onPressIn: () => void; onPressOut: () => void; onLongPress: () => void }

  export type RulesetNativeIds = 'Text' | 'View' | 'Image' | 'ScrollView'


  /******************************************
    RULESET
  *******************************************/

  //*************** cross platform ruleset for web and native

  export type RulesetX<T extends RulesetNativeIds = 'Text', R extends Shape = Shape> =
    commonRules<T> & // native rules which are compatible with web
    {
      $native?: NativeRules<T> // native specific rules
      $web?: RulesetWeb // web specific rules
    } &
    RulesetAddInX<T, R> // sheet addIn: $wen, $native, overriding, media query etc.

  // rule names, common for native and web
  //export type commonRuleNames<T extends RulesetNative> = keyof React.CSSPropertiesLow & keyof T
  // native rules, which are compatible with web
  //export type commonRules<T extends RulesetNative> = TakeFrom<T, commonRuleNames<T>>

  export type commonRules<T extends RulesetNativeIds> =
    T extends 'Text' ? TCommonStyles.TextStyle :
    T extends 'Image' ? TCommonStyles.ImageStyle :
    T extends 'ScrollView' ? TCommonStyles.ScrollViewStyle :
    T extends 'View' ? TCommonStyles.ViewStyle :
    never

  export type NativeRules<T extends RulesetNativeIds> =
    T extends 'Text' ? ReactN.TextStyle :
    T extends 'Image' ? ReactN.ImageStyle :
    T extends 'ScrollView' ? ReactN.ScrollViewStyle :
    T extends 'View' ? ReactN.ViewStyle :
    never


  export interface ViewRulesetCommonX extends TCommonStyles.ViewStyle { }
  export interface TextRulesetCommonX extends TCommonStyles.TextStyle { }
  export interface ScrollViewRulesetCommonX extends TCommonStyles.ScrollViewStyle { }
  export interface ImageRulesetCommonX extends TCommonStyles.ImageStyle { }

  export interface ViewRulesetX extends TCommonStyles.ViewStyle, RulesetAddInX<'View', Shape> { }
  export interface TextRulesetX extends TCommonStyles.TextStyle, RulesetAddInX<'Text', Shape> { }
  export interface ImageRulesetX extends TCommonStyles.ImageStyle, RulesetAddInX<'Image', Shape> { }
  export interface ScrollViewRulesetX extends TCommonStyles.ScrollViewStyle, RulesetAddInX<'ScrollView', Shape> { }

  //******************** Platform specific ruleset
  export type RulesetWeb = React.CSSProperties //??? https://github.com/programbo/cssproperties/blob/master/css-properties.d.ts
  export type RulesetNative = ReactN.TextStyle | ReactN.ViewStyle | ReactN.ImageStyle | ReactN.ScrollViewStyle
  export type Ruleset = RulesetNative | RulesetWeb


  /******************************************
    COMPONENT SHAPE
  *******************************************/
  export interface Shape {
    //**** sheet constrains
    common: Record<string, RulesetNativeIds> // rulesets (and their native type), which are used in both web and native component code. Rules and its valid values must be compatible with native.
    native: Record<string, RulesetNativeIds> // ruleset types, which are used only in native code
    web: string | null // ruleset names, which are used only in web code (its export type is always React.CSSProperties)
    //******************** native style constrain
    style: RulesetNativeIds // for native: export type of component style property (for web, style has always React.CSSProperties type)
    //**** component property constrains
    props: {} //common (web and native) props
    propsNative: {} //native only props 
    propsWeb: React.HTMLAttributes<Element>//web only props
  }
  export type getCommon<R extends Shape> = R['common']
  export type getNative<R extends Shape> = R['native']
  export type getWeb<R extends Shape> = R['web']
  export type getStyle<R extends Shape> = R['style']
  export type getProps<R extends Shape> = R['props']
  export type getPropsWeb<R extends Shape> = R['propsWeb']
  export type getPropsNative<R extends Shape> = R['propsNative']


  /******************************************
    ADDINS
  *******************************************/

  //******************** Cross platform 
  export interface RulesetAddInX<T extends RulesetNativeIds, R extends Shape> {
    $native?: NativeRules<T> // native specific rules
    $web?: RulesetWeb // web specific rules
  }
  export interface SheetXAddIn<R extends Shape = Shape> { }

  //******************** Platform specific
  export type RulesetWithAddIn<R extends Shape = Shape> = Ruleset
  export interface RulesetWithAddInWeb<R extends Shape = Shape> extends RulesetWeb { }
  export type RulesetWithAddInNative<T extends RulesetNativeIds, R extends Shape = Shape> = NativeRules<T>

  export interface SheetAddInWeb<R extends Shape = Shape> { }
  export interface SheetAddInNative<R extends Shape = Shape> { }


  /******************************************
    COMPONENT SHEET
  *******************************************/

  //******************** Cross platform sheet
  export type SheetX<R extends Shape = Shape> = SheetXCommon<R> & SheetXNative<R> & SheetXWeb<R> & SheetXAddIn<R>
  export type PartialSheetX<R extends Shape = Shape> = Partial<SheetXCommon<R> & SheetXNative<R> & SheetXWeb<R>> & SheetXAddIn<R>

  //Cross platform sheet helpers
  export type SheetXCommon<R extends Shape> = { [P in keyof getCommon<R>]: RulesetX<getCommon<R>[P], R> }
  export type SheetXNative<R extends Shape> = { [P in keyof getNative<R>]: (getNative<R>[P] & RulesetAddInX<getNative<R>[P], R>) }
  export type SheetXWeb<R extends Shape> = { [P in getWeb<R>]: (RulesetWeb & RulesetAddInX<never, R>) }

  //******************** Platform specific sheets
  export type SheetWeb<R extends Shape = Shape> = Record<(keyof getCommon<R>) | getWeb<R>, RulesetWithAddInWeb<R>> & SheetAddInWeb<R>
  export type SheetNative<R extends Shape = Shape> =
    { [P in keyof getCommon<R>]: RulesetWithAddInNative<getCommon<R>[P], R> } &
    { [P in keyof getNative<R>]: RulesetWithAddInNative<getNative<R>[P], R> } &
    SheetAddInNative<R>
  export type Sheet<R extends Shape = Shape> = SheetWeb<R> | SheetNative<R>
  export type PartialSheet<R extends Shape> = Partial<SheetWeb<R>> | Partial<SheetNative<R>>


  /******************************************
     COMPONENT TYPING
  *******************************************/

  export type PropsX<R extends Shape = Shape> = Partial<Overwrite<getProps<R>, {
    style?: RulesetX<getStyle<R>>
    className?: RulesetX<getStyle<R>>
    classes?: PartialSheetX<R> //| PartialSheetInCode<R>> /*cross platform sheet*/  /*platform specific sheet (when component is used in other component)*/
    $web?: Partial<getPropsWeb<R>> //web specific style
    $native?: Partial<getPropsNative<R>> //native specific style
    ignore?: boolean
  }>>
  export type ComponentTypeX<R extends Shape> = React.ComponentType<PropsX<R>>
  export type SFCX<R extends Shape> = React.SFC<PropsX<R>>

  export type CodePropsWeb<R extends Shape = Shape> = Overwrite<getProps<R> & getPropsWeb<R>, {
    className: RulesetWeb
    style: RulesetWeb
    mergeRulesetWithOverrides
    classes: SheetWeb<R>
    theme
    animations
    mediaq
  } & OnPressAllWeb>
  export type CodeSFCWeb<R extends Shape> = React.SFC<CodePropsWeb<R>>

  export type CodePropsNative<R extends Shape = Shape> = Overwrite<getProps<R> & getPropsNative<R>, {
    className: NativeRules<getStyle<R>>
    style: NativeRules<getStyle<R>>
    classes: SheetNative<R>
    theme
    mergeRulesetWithOverrides
    animations
    mediaq
  } & OnPressAllNative>
  export type CodeSFCNative<R extends Shape> = React.SFC<CodePropsNative<R>>

  //some code for components could be shared for web and native
  export type CodeProps<R extends Shape = Shape> = Overwrite<getProps<R> & (getPropsNative<R> | getPropsWeb<R>), {
    className: RulesetWeb | NativeRules<getStyle<R>>
    classes: Sheet<R>
    style: RulesetWeb | NativeRules<getStyle<R>>
    mergeRulesetWithOverrides
    theme
    animations
    mediaq
  } & (OnPressAllNative | OnPressAllWeb)>
  export type CodeSFC<R extends Shape> = React.SFC<CodeProps<R>>
  export type CodeComponent<R extends Shape> = React.Component<CodeProps<R>>
  export type CodeComponentType<R extends Shape> = React.ComponentType<CodeProps<R>>

}
