﻿import { TCommonStyles, TTyped, TCommon, TAddIn as TAddInBasic, Types as TypesBasic } from 'reactxx-basic'
import { TAnimation } from 'reactxx-animation'
import { Types } from './types'


export namespace TAddIn {

  /******************************************
    ADDINs
  *******************************************/

  //******************** Cross platform
  export interface RulesetAddInX<T extends TCommonStyles.RulesetNativeIds, R extends Types.Shape> extends TAddInBasic.RulesetAddInX<T, R> { }
  export interface SheetX<R extends Types.Shape = Types.Shape> { $animations?: TAnimation.SheetsX<getAnimation<R>> }


  /******************************************
    SHAPE
  *******************************************/
  export interface Shape {
    animation?: TAnimation.Shapes
  }

  export interface ShapeDefault<TWeb extends string = null, TEvents extends string = null> extends TypesBasic.ShapeDefault<TWeb, TEvents> {
    animation: {}
  }

  export type getAnimation<R extends Shape> = R['animation']

  /******************************************
    COMPONENT PROPS
  *******************************************/

  //******************** Cross platform 
  export interface PropsX<R extends Types.Shape = Types.Shape> extends TAddInBasic.PropsX<R> { }

  //******************** Platform specific
  export interface GetVariant<R extends Types.Shape = Types.Shape> { }

  //export interface CodePropsWeb<R extends Types.Shape = Types.Shape> {
  //  animations?: TAnimation.DriversWeb<getAnimation<R>>
  //}

  //export interface CodePropsNative<R extends Types.Shape = Types.Shape> {
  //  animations?: TAnimation.DriversNative<getAnimation<R>>
  //}

  export interface CodeProps<R extends Types.Shape = Types.Shape> {
    $animations?: TAnimation.Drivers<getAnimation<R>>
  }

}
