﻿declare namespace Typography {

  type ClassKey = Mui.TypographyClassKey | 'root' | 'alignLeft' | 'alignCenter' | 'alignRight' | 'gutterBottom' | 'paragraph' | 'colorInherit' | 'colorSecondary' | 'colorAccent' | 'colorPrimary' | 'colorError'

  type Shape = Overwrite<Mui.EmptyShape, {
    common: Record<ClassKey, RN.TextStyle> & { noWrap?: any /*RN.TextProperties*/ }
    style: RN.TextStyle
    props: {
      align?: Mui.PropTypes.Alignment
      color?: Mui.PropTypes.Color | 'secondary' | 'error'
      gutterBottom?: boolean
      noWrap?: boolean
      paragraph?: boolean
      type?: Mui.TypographyClassKey
    }
    propsNative: RN.TextProperties
  }>
}