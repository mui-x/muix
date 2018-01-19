declare namespace Muix {


  type AnimatedPropsNative = 'paddingLeft' | 'paddingTop'
  type AnimatedPropsWeb = 'marginBottom' | 'transform'

  type ToPairs<T, K extends keyof T = keyof T> = {[P in K]?: [T[P], T[P]]}

  type TNativeTransform = ToPairs<ReactN.PerpectiveTransform> | ToPairs<ReactN.RotateTransform> | ToPairs<ReactN.RotateXTransform> | ToPairs<ReactN.RotateYTransform> | ToPairs<ReactN.RotateZTransform> | ToPairs<ReactN.ScaleTransform> |
    ToPairs<ReactN.ScaleXTransform> | ToPairs<ReactN.ScaleYTransform> | ToPairs<ReactN.TranslateXTransform> | ToPairs<ReactN.TranslateYTransform> | ToPairs<ReactN.SkewXTransform> | ToPairs<ReactN.SkewYTransform>

  type Animations<T extends Record<string, CSSPropertiesNative>> = {[P in keyof T]: Animation<T[P]>}

  interface AnimationConfig {
    $easing?: string
    $duration?: number
    $delay?: number
  }

  type Animation<T extends CSSPropertiesNative> = ToPairs<T, commonCSSPropertiesNames<T> & AnimatedPropsNative> & {
    transform?: Array<TNativeTransform>
    $native?: ToPairs<T, keyof T & AnimatedPropsNative> & { transform?: TNativeTransform[] }
    $web?: ToPairs<CSSPropertiesWeb, AnimatedPropsWeb>
  } & AnimationConfig

  interface AnimationsDriver {
  }

  interface AnimationsWeb<T extends Record<string, CSSPropertiesNative>> extends AnimationsDriver {
    className: {[P in keyof T]: string}
  }
  interface AnimationsNative<T extends Record<string, CSSPropertiesNative>> extends AnimationsDriver {
    className: {[P in keyof T]: T[P]}
  }

}

