import React from 'react'
import ReactN from 'react-native'
import warning from 'warning'

import { Types, toPlatformEvents, deepMerge, deepMergesSys, deepMerges } from 'reactxx-basic'
import { animations, TAnimation } from 'reactxx-animation'
import { mediaQFlags, TMediaQ, MediaQ_AppContainer, mediaQProviderExists, mediaQSheet } from 'reactxx-mediaq'
import { activeFlag, activeSheet, TActivable } from 'reactxx-activable'

import { toPlatformSheet, toPlatformRuleSet } from './to-platform'
import { TBasic, TAddInConfig } from '../typings/basic'
import { theme, TTheme, ThemeProvider, ThemeConsumer } from './theme'

const DEV_MODE = process.env.NODE_ENV === 'development'

/************************
* WITH STYLES
*************************/

export const withStylesCreator = <R extends TBasic.Shape, TStatic extends {} = {}>(name: TBasic.getNameType<R>, sheetCreator: TTheme.SheetCreatorX<R>, component: TBasic.CodeComponentType<R>, options?: TTheme.WithStyleOptions_Component<R>) =>
  (overrideOptions?: TTheme.WithStyleOptions_Component<R>) => withStyles<R, TStatic>(name, sheetCreator, options, overrideOptions)(component)

export const withStyles = <R extends TBasic.Shape, TStatic extends {} = {}>(name: TBasic.getNameType<R>, sheetCreator: TTheme.SheetCreatorX<R>, _options?: TTheme.WithStyleOptions_Component<R>, overrideOptions?: TTheme.WithStyleOptions_Component<R>) => (Component: TBasic.CodeComponentType<R>) => {

  type TPropsX = TBasic.PropsX<R>

  //*** OPTIONS
  const options: TTheme.WithStyleOptions_Component = _options && overrideOptions ? deepMerge(_options, overrideOptions) : (overrideOptions ? { ...overrideOptions } : (_options ? { ..._options } : {}))
  options.withTheme = fromOptions(typeof sheetCreator === 'function', options ? options.withTheme : undefined)

  //**** PROPERTY CASCADING 

  const { Provider: CascadingProvider, Consumer: CascadingConsumer } = options.withCascading ? React.createContext<TPropsX>(null) : { Provider: null, Consumer: null } as React.Context<TPropsX>

  class Provider extends React.Component<TPropsX> {

    render() {
      if (options.withCascading) return <CascadingConsumer>{this.CASCADING}</CascadingConsumer>
      warning(DEV_MODE, `Component.Provider does not exist (component.name=${name}). Use <ComponentC.Provider ...><ComponentC ...> variant of component or create it (if it does not exist).`) //`
      return null
    }

    CASCADING = (parentsProps: TPropsX) => {
      const { children, ...rest } = this.props as TBasic.PropsX & { children?: React.ReactNode }
      return <CascadingProvider value={(parentsProps && rest ? deepMerge(parentsProps, rest) : rest) as TPropsX}>{children}</CascadingProvider>
    }

  }

  const resolveDefaultProps = (def, cascad, props) => {
    if (!def && !cascad) return props
    const modifier = def && cascad ? deepMerges({}, def, cascad) : (def ? def : cascad)
    const res = {...props}
    for (const p in modifier) {
      const propsp = res[p]
      if (propsp) res[p] = deepMerge({}, modifier[p], propsp)
      else res[p] = modifier[p]
    }
    return res
  }

  const cascading = (input: () => TBasic.PropsX, output: (outputPar: TBasic.PropsX) => void, next: () => React.ReactNode) => {
    let componentProps: TBasic.PropsX
    const render = (inheritedProps: TBasic.PropsX) => {
      output(resolveDefaultProps(options.defaultProps, inheritedProps, componentProps))
      return next()
    }
    const res = () => {
      componentProps = input()
      if (options.withCascading) return <CascadingConsumer>{render}</CascadingConsumer>
      output(resolveDefaultProps(options.defaultProps, null, componentProps))
      return next()
    }
    return res
  }

  //**** TO PLATFORM
  const toPlatform = (input: () => { mediaQFlags: TMediaQ.MediaFlags; activeFlag: boolean; propsWithCascading: TBasic.PropsX; themeContext: TTheme.ThemeContext }, output: (outputPar: { codeProps: TBasic.CodeProps, codeClasses: TBasic.Sheet, $animations: TAnimation.SheetsX }) => void, next: () => React.ReactNode) => {
    const res = () => {
      const { mediaQFlags, activeFlag, propsWithCascading, themeContext } = input()
      const { codeProps, codeClasses } = prepareSheet(name, sheetCreator, options, propsWithCascading, themeContext, mediaQFlags, activeFlag)
      output({ codeProps, codeClasses, $animations: codeClasses.$animations as TAnimation.SheetsX })
      delete codeClasses.$animations
      return next()
    }
    return res
  }

  //****************************
  // Styled COMPONENT
  //****************************
  class Styled extends React.Component<TPropsX> {

    themeContext: TTheme.ThemeContext = {}
    propsWithCascading: TBasic.PropsX
    codeProps: TBasic.CodeProps
    codeClasses: TBasic.Sheet
    $animations: TAnimation.SheetsX
    mediaQFlags: TMediaQ.MediaFlags
    mediaSheetPatch: TBasic.Sheet & { $animations?: TAnimation.SheetsX }
    activable: TActivable.ActiveResult
    activablePatch: TBasic.Sheet
    animations: TAnimation.Drivers

    render() {
      if (DEV_MODE && this.props.developer_log)
        debugger
      return this.renderer()
    }

    renderCodeComponent = () => {
      const { mediaSheetPatch, activablePatch, codeProps, codeClasses, animations } = this

      if (DEV_MODE && codeProps.system.developer_log) console.log(
        `### withStyles AFTER_ANIMATION for ${name}`,
        '\ntheme: ', this.themeContext.theme,
        '\npropsWithCascading: ', this.propsWithCascading,
        '\ncodeProps: ', this.codeProps,
        '\ncodeClasses: ', codeClasses,
        '\nmediaSheetPatch: ', this.mediaSheetPatch,
        '\nactivablePatch: ', this.activablePatch,
        //':\n', this.,
      )

      // apply patches
      let classes = codeClasses as TBasic.Sheet<R>
      if (mediaSheetPatch || activablePatch) classes = deepMerges({}, codeClasses, mediaSheetPatch, activablePatch)

      // call component code
      return <Component {...codeProps as TBasic.CodeProps<R>} system={{ ...codeProps.system, classes, animations: animations as TAnimation.Drivers<TBasic.getAnimation<R>> }} />
    }

    renderer =
      theme(() => options.withTheme, themeContext => this.themeContext = themeContext || {},
        cascading(() => this.props, propsWithCascading => this.propsWithCascading = propsWithCascading,
          mediaQFlags(() => ({ $mediaq: this.propsWithCascading.$mediaq, theme: this.themeContext.theme }), mediaQFlags => this.mediaQFlags = mediaQFlags,
            //activeFlag(() => withOptions.withActive, activable => this.activable = activable,
            toPlatform(() => ({ mediaQFlags: this.mediaQFlags, activeFlag: false /*this.activable.active*/, propsWithCascading: this.propsWithCascading, themeContext: this.themeContext }), ({ codeProps, codeClasses, $animations }) => { this.codeClasses = codeClasses, this.codeProps = codeProps, this.$animations = $animations },
              mediaQSheet(() => this.codeClasses as TMediaQ.MediaQSheet, mediaSheetPatch => this.mediaSheetPatch = mediaSheetPatch,
                //activeSheet(() => ({ activeFlag: this.activable.active, sheet: this.codeClasses as TActivable.SheetWithAddIn, activable: withOptions.withActive }), patch => this.activablePatch = patch,
                animations(() => this.$animations, animations => this.animations = animations,
                  this.renderCodeComponent
                )
              )
            )
          )
        )
      )
    //)
    //)

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !nextProps.CONSTANT
    }

    public static Provider = Provider
    public static displayName = name
    //public static defaultProps = options && options.defaultProps
  }

  const styled: React.ComponentClass<TBasic.PropsX<R>> & { Provider: typeof Provider } & TStatic = Styled as any
  return styled

}

export const variantToString = (...pars: Object[]) => pars.map(p => p.toString()).join('$')

export const AppContainer: React.SFC<{ theme?: TTheme.ThemeCreator }> = props => {
  const theme = <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>
  return mediaQProviderExists() ? theme : <MediaQ_AppContainer>{theme}</MediaQ_AppContainer>
}

/************************
* PRIVATE
*************************/

const prepareSheet = (name: string, createSheetX: TTheme.SheetCreatorX, options: TTheme.WithStyleOptions_Component, props: TBasic.PropsX, themeContext: TTheme.ThemeContext, mediaqFlags: TMediaQ.MediaFlags, activeFlag: boolean) => {

  const { classes, className, style, $mediaq: ignore1, onPress, onLongPress, onPressIn, onPressOut, $web, $native, developer_log, CONSTANT, ...rest } = props as TBasic.PropsX & Types.OnPressAllX
  const { theme, $cache } = (themeContext || {}) as TTheme.ThemeContext

  //** STATIC SHEET
  let staticSheet: TBasic.Sheet
  let getStaticSheet: () => TBasic.Sheet
  let variantCacheId
  let variant = null
  if (typeof createSheetX !== 'function') {
    variantCacheId = '#static#'
    getStaticSheet = () => toPlatformSheet(createSheetX)
  } else {
    if (options && options.getVariant) {
      const propsWithMediaQ = mediaqFlags ? { ...props, mediaqFlags } : props
      variant = options.getVariant(propsWithMediaQ, theme)
      variantCacheId = options.variantToString && options.variantToString(variant)
      if (variantCacheId) {
        getStaticSheet = () => toPlatformSheet(callCreator(theme, variant, createSheetX))
      } else {
        //getVariant!=null && variantToString==null => NO CACHING
        staticSheet = toPlatformSheet(callCreator(theme, variant, createSheetX))
      }
    } else
      getStaticSheet = () => toPlatformSheet(callCreator(theme, null, createSheetX))
  }
  if (!staticSheet) {
    if (!theme) staticSheet = getStaticSheet()
    else {
      let compCache = $cache[name]
      if (!compCache) $cache[name] = compCache = {}
      staticSheet = compCache[variantCacheId]
      if (!staticSheet) compCache[variantCacheId] = staticSheet = getStaticSheet();
      (staticSheet as any).$preserve = true
    }
  }

  //** MERGE staticSheet with classes and className
  const root = className && { root: toPlatformRuleSet(callCreator(theme, variant, className)) }
  const actSheet: TBasic.Sheet = classes || root ? deepMergesSys(false, {}, staticSheet, toPlatformSheet(callCreator(theme, variant, classes)), root) : staticSheet


  //** RETURN platform dependent props for pure component code
  const outputProps = {
    ...rest,
    system: {
      classes: actSheet,
      style: toPlatformRuleSet(callCreator(theme, variant, style)),
      variant,
      mergeRulesetWithOverrides,
      mediaqFlags,
      activeFlag,
      developer_log,
    }
  } as TBasic.CodeProps

  toPlatformEvents($web, $native as Types.OnPressAllNative, { onPress, onLongPress, onPressIn, onPressOut }, outputProps)

  return { codeProps: outputProps, codeClasses: actSheet }
}
const callCreator = <T extends {}>(theme: TTheme.ThemeBase, variant, creator: T | ((theme: TTheme.ThemeBase, variant) => T)) => typeof creator === 'function' ? creator(theme, variant) : creator

const mergeRulesetWithOverrides: TBasic.MergeRulesetWithOverrides = (...rulesets/*all used rulesets*/) => {
  let count = 0
  let res
  rulesets.forEach((ruleset: TAddInConfig.RulesetWithAddIn) => { // acumulate $overrides from used rulesets
    if (!ruleset) return
    switch (count) {
      case 0: res = ruleset; break
      case 1: res = deepMergesSys(true, {}, res, ruleset); break
      default: deepMergesSys(true, res, ruleset); break
    }
    count++
  })
  return res
}

const fromOptions = (...bools: boolean[]) => {
  let res = undefined
  if (bools) bools.forEach(b => { if (typeof b === 'boolean') res = b })
  return res
}

