﻿import React from 'react';
import { TEngine, TTyped, TExtensions } from 'reactxx-typings';

declare namespace TComponents {

  //******************** Cross platform component props
  type Props<R extends TTyped.Shape = TTyped.Shape> =
    TTyped.getProps<R> &
    PropsLow<R> 

  interface PropsLow<R extends TTyped.Shape> extends TTyped.RootProps<R> {
    className?: TTyped.RulesetOrCreator<R>
    style?: TTyped.StyleOrCreator<R>
    classes?: TTyped.PartialSheetOrCreator<R> // cross platform sheet
    themedProps?: (theme: TTyped.getTheme<R>) => Props<R>
  }

  type SFC<R extends TTyped.Shape = TTyped.Shape> = React.SFC<Props<R>> //& TEngine.IsReactXXComponent

  //*************************************** */  
  // CONFIGS
  //*************************************** */  

  interface ComponentConfig<R extends TTyped.Shape = TTyped.Shape> extends TExtensions.Config {
    // withCascaing?: boolean
    props?: Partial<TComponents.Props<R>> // classes, css and styles are  ignored
    sheet?: TTyped.SheetOrCreator<R>
    pose?
  }

  interface Config<R extends TTyped.Shape = TTyped.Shape> {
    componentId?: number // generated unique component type Id
    displayName?: string
    props?: Partial<TComponents.Props<R>>[] // classes, css and styles are  ignored
    sheet?: TTyped.SheetOrCreator<R>[]
    pose?:any[]
  }

  type ThemeContext<T extends any> = [T, (newTheme: T) => void]

  type ComponentCreator<R extends TTyped.Shape = TTyped.Shape> = (
    userDisplayName?: string, userConfig?: TComponents.ComponentConfig<R>
  ) => React.SFC<TComponents.Props<R>>

  type GetComponent<R extends TTyped.Shape> = (
    useStyles: UseStyles<R>,
    par?
  ) => TComponents.SFC<R>

  type UseStyles<R extends TTyped.Shape = TTyped.Shape> = (
    props: TComponents.Props<R>
  ) => UseStylesResult<R>

  interface UseStylesResult<R extends TTyped.Shape> {
    propsCode: TTyped.PropsCode<R>
    classes: TTyped.getSheet<R>
    className: TTyped.getRootStyle<R>
    style: TTyped.getRootStyle<R>
    getWidthMap: (mapBreakpoints?: number[]) => boolean[]
    getNativeStyleProps: <R extends TTyped.RulesetIds>(...rulesets: TTyped.TAllowed<R>[]) => TTyped.StylePropsNative<R>
    getRootNativeStyleProps: <R extends TTyped.CommonIds = "">(...rulesets: TTyped.TAllowed<R>[]) => TTyped.TNativeIdToProps<R>
    getWebStyleProps: (...rulesets: TTyped.RulesetIds[]) => TTyped.StylePropsWeb
    getRootWebStyleProps: (...rulesets: TTyped.RulesetIds[]) => TTyped.StylePropsWeb
  }

} 