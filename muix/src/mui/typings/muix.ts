import * as Mui from './mui'
import ReactN from 'react-native'

export namespace Muix {

  export type typoStyle = Mui.Style | 'fontWeightLightNew' | 'fontWeightRegularNew' | 'fontWeightMediumNew'

  export interface FontStyleNew {
    fontSize: number
    htmlFontSize: number;
    fontFamily: string
    //fontSizeNormalizerNative: (size: number) => number
    pxToRem: (size: number) => string
  }
  //interface FontStyleOld {
  //  fontWeightLight: React.CSSProperties['fontWeight']
  //  fontWeightRegular: React.CSSProperties['fontWeight']
  //  fontWeightMedium: React.CSSProperties['fontWeight']
  //}

  export type TypographyOptionsX = {[type in typoStyle]?: ReactXX.TextRulesetX } & Partial<FontStyleNew>
  export type TypographyX = {[type in typoStyle]: ReactXX.TextRulesetX } & FontStyleNew
  export type TypographyOptionsOrCreatorX = TypographyOptionsX | ((palette: Mui.Palette) => TypographyOptionsX)

  export type ShadowsNative = ReactN.ViewStyle[]

  export type ThemeShadowsX = ReactXX.RulesetX<ReactN.ViewStyle>[]
  export type ThemeShadows = ReactXX.ViewRulesetCommonX[]

  export interface Theme extends Mui.Theme {
    shadowsNew: ThemeShadows
    typographyX: TypographyX
  }

  export interface ThemeOptions extends Mui.ThemeOptions {
    shadowsX?: ThemeShadowsX
    //overridesX?: ThemeValueOrCreator<OverridesX>
    typographyX?: TypographyOptionsOrCreatorX
  }

}

  //type OverridesX = {
  //  [Name in keyof ReactXX.Shapes]?: ReactXX.PartialSheetX<ReactXX.Shapes[Name]>
  //}
  //type ThemeCreator<T> = (theme: Theme) => T
  //type ThemeValueOrCreator<T> = T | ThemeCreator<T>

  //interface IMuiThemeProps { theme: Theme | ((theme: Theme) => Theme) }
  //type MuiThemeContextValue = { theme: Theme }
  //type MuiOverridesContext = { childOverrides: ReactXX.Sheets }

