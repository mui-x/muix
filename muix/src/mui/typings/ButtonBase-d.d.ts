﻿//import ReactN from 'react-native'
//import { ButtonBaseProps } from 'material-ui/ButtonBase/ButtonBase'
declare namespace MuiButtonBase {

  const enum CompNames {
    ButtonBase = 'MuixButtonBase',
  }

  type Shape = ReactXX.OverwriteShape<{
    common: ReactXX.ShapeViews<'root'>
    native: ReactXX.ShapeViews<'ripple'>
    props: Muix.ButtonBaseProps //& ReactXX.OnPressAllWeb
    propsNative: ReactN.TouchableOpacityProperties
  }>
}

declare namespace ReactXX {
  interface SheetsX {
    [MuiButtonBase.CompNames.ButtonBase]?: ReactXX.PartialSheetX<Shape>
  }
}

