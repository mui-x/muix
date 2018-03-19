import * as React from 'react'

//import hoistNonReactStatics from 'hoist-non-react-statics'

import createGenerateClassName from 'material-ui/styles/createGenerateClassName'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { create } from 'jss';
import preset from 'jss-preset-default';
import JssProvider from 'react-jss/lib/JssProvider'
import { ThemeProvider, ThemeModifier, ThemeT } from 'reactxx'
import { ModifierType } from 'reactxx-stateman'


export * from '../common/createMuiTheme'

import { sheetToClassSheet, rulesetToClassNames } from 'reactxx/web'
import { createMuiTheme } from '../common/createMuiTheme'
import * as Mui from '../typings/mui'

import { toPlatformRuleSet, toPlatformSheet, toPlatformEvents } from 'reactxx'

export const jss = create({ ...preset(), createGenerateClassName, insertionPoint: 'insertion-point-jss'})
//jss.options.createGenerateClassName = createGenerateClassName
//jss.options.insertionPoint = 'insertion-point-jss'

export const AppContainer: React.SFC = props => {
  const theme = createMuiTheme()
  return <JssProvider jss={jss}>
    <ThemeProvider value={{ theme: {} as any }}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeProvider>
  </JssProvider>
}

export const ThemeModifierX: ModifierType<ThemeT.ThemeState, ThemeT.ThemeState> = props => <ThemeModifier {...props} render={themeState => {
  return props.children
  //TODO THEME
  //const { theme, overrides} = themeState
  //theme.overrides = expandOverrides(themeState)
  //return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
}} />

//Get platform component sheet (from creator and theme)
const expandOverrides = (themeState: ThemeT.ThemeState) => {
  if (!themeState) return null
  const theme = themeState.theme
  const res = { theme }
  for (const componentName in themeState) {
    if (componentName == 'theme') continue
    const themeComp: ThemeT.ThemeCompX = themeState[componentName]; if (!themeComp) return res
    const { sheet, par } = themeComp
    //TODO THEME
    //res[componentName] = typeof override != 'function' ? override : override(theme, compThemePar)
  }
  return res
}

type webKeys<R extends ReactXX.Shape> = ReactXX.getWeb<R> | keyof ReactXX.getCommon<R>
type muiComponentType<P, ClassKey extends string> = React.ComponentType<P & Mui.StyledComponentProps<ClassKey>>

export const muiCompatible = <R extends ReactXX.Shape>(Component: muiComponentType<ReactXX.getPropsWeb<R>, webKeys<R>>) => {

  const Styled: ReactXX.SFCX<R> = props => {

    const { classes: classesX, className: classNameX, style: styleX, $web, $native, onPress, onLongPress, onPressIn, onPressOut, ignore, modifyThemeState, ...other } = props as any as (ReactXX.PropsX & ReactXX.OnPressAllX)

    const classes = toPlatformSheet(classesX as ReactXX.SheetX)

    const codeProps = {
      ...other, ...$web,
      style: toPlatformRuleSet(styleX as ReactXX.RulesetX),
      className: rulesetToClassNames(toPlatformRuleSet(classNameX as ReactXX.RulesetX)),
      classes: classes
    }

    toPlatformEvents($web, $native as ReactXX.OnPressAllNative, { onPress, onLongPress, onPressIn, onPressOut }, codeProps as any)

    return <Component {...codeProps as any} />
  }

  return Styled

}
