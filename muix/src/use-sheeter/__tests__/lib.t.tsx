/** @jsx platform.createElement */

import React from 'react'
import ReactN from 'react-native'
import { platform } from "reactxx-sheeter"

import { TTyped, T } from 'reactxx-typings'
import { useSheeter, TUseSheeter, TComponents } from "reactxx-use-sheeter"

export interface Shape extends TTyped.ShapeAncestor {
  //rootStyle: T
  rootWebProps: React.AnchorHTMLAttributes<HTMLAnchorElement>
  rootNativeProps: ReactN.TextProperties
  sheet: {
    root: T
  }
  props: {
    p1?: string
  },
  theme: Theme
}

export interface Theme {
  primaryColor: string
  p1Prop: string
}

export const compCreator = (
  config: TUseSheeter.AuthorConfig<Shape>,
  userConfig?: TUseSheeter.UserConfig<Shape>,
  displayName?: 'Comp'
) => {
  const res: TComponents.SFC<Shape> = props => {
    try {
      const { toClassNames, propsCode: { p1 }, classes, classNames, styles
      } = useSheeter<Shape>(props, config, displayName, userConfig)

      const renderCount = React.useRef(0)
      renderCount.current++
      const root = toClassNames(classes.root, classNames)
      return <div classNames={root} styles={styles as any}>{`${p1 ? p1 + ': ' : ''}${renderCount.current}`}</div>
    } catch {
      return <div>ERROR</div>
    }
  }
  res.displayName = displayName
  res['$c$'] = true
  return res
}

