import React from 'react'
import ReactN from 'react-native'
import warning from 'warning'
import { rulesetsToClassNames } from './fela'
import { sheetCreator } from '../common/index'
import { textSheet } from '../common/components'

export const view: ReactXX.CodeSFCWeb<ReactXX.ViewShape> = props => {
  const { style, classes, className, mergeRulesetWithOverrides, flip, theme, animations, ...rest } = props
  const rootStyle = mergeRulesetWithOverrides(classes.root, className)
  return <div className={rulesetsToClassNames(rootStyle)} style={style} {...rest} />
}

export const icon: ReactXX.CodeSFCWeb<ReactXX.IconShape> = props => {
  const { style, classes, className, data, mergeRulesetWithOverrides, flip, theme, animations, viewBox, children/*ignore children*/, ...rest } = props
  const rootStyle = mergeRulesetWithOverrides(classes.root, className)
  //replace fontSize with width x height
  if (rootStyle.fontSize) { rootStyle.height = rootStyle.width = rootStyle.fontSize; delete rootStyle.fontSize }
  if (style && style.fontSize) { style.height = style.width = style.fontSize; delete style.fontSize }
  return <svg className={rulesetsToClassNames(rootStyle)} style={style} focusable='false' viewBox={viewBox || '0 0 24 24'} {...rest}>
    <path d={data} />
  </svg>
}

export const text: ReactXX.CodeSFCWeb<ReactXX.TextShape> = props => {
  const { style, classes, className, numberOfLines, mergeRulesetWithOverrides, flip, theme, animations, ...rest } = props
  const rootStyle = mergeRulesetWithOverrides(classes.root, props.onClick && classes.pressable, numberOfLines === 1 && classes.singleLineStyle, className)
  return <div className={ReactXX.CompNames.Text + ' ' + rulesetsToClassNames(rootStyle)} style={style} {...rest} />
}

export const scrollView: ReactXX.CodeSFCWeb<ReactXX.ScrollViewShape> = props => {
  const { style, classes, className, horizontal, mergeRulesetWithOverrides, flip, theme, animations, children, ...rest } = props
  const rootStyle = mergeRulesetWithOverrides(classes.root, horizontal && classes.rootHorizontal, className)
  const containerStyle = mergeRulesetWithOverrides(classes.container, horizontal && classes.containerHorizontal)
  //checkChildLayoutProps(style); checkChildLayoutProps(className)
  return <div className={rulesetsToClassNames(rootStyle)} style={style} {...rest}>
    <div className={rulesetsToClassNames(containerStyle)}>
      {children}
    </div>
  </div>
}

export const animatedView = view
export const animatedIcon = icon
export const animatedText = text
export const animatedScrollView = scrollView

//const checkChildLayoutProps = (css: React.CSSProperties) => {
//  if (/*process.env.NODE_ENV === 'production' ||*/ !css) return
//  const childLayoutProps = ['alignItems', 'justifyContent'].filter(prop => css && css[prop] !== undefined)
//  warning(childLayoutProps.length === 0, `ScrollView child layout (${JSON.stringify(childLayoutProps)}) must be applied through the contentContainerStyle prop.`)
//}
