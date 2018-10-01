import { TNativeRuleValue, TSheeter, TVariants } from './index'

declare namespace TAtomize {

  export type ToAtomicClassesProc = (ruleset: {}, tracePath?: string) => AtomicArray
  export type TraceAtomicClassProc = (value: Atomic) => string

  //export const TypedInterfaceProp = '``'

  export const enum TypedInterfaceTypes {
    prop = '``',
    atomizedRuleset = 'c'/*compiled ruleset*/,
    atomicArray = 'v' /*value array*/,
    reactxxComponent = 'x',
    atomizedStyleWeb = 'w',
  }

  export interface TypedInterface {
    [TypedInterfaceTypes.prop]: TypedInterfaceTypes
  }

  export type Sheet<R extends TSheeter.Shape = TSheeter.Shape> = { [P in TSheeter.RulesetNamesAll<R>]: AtomizedRuleset }

  export interface AtomizedRuleset extends TypedInterface {
    [TypedInterfaceTypes.prop]: TypedInterfaceTypes.atomizedRuleset
    name: string
    list: Variants
  }
  export type Variants = Variant[]
  export interface Variant {
    atomicArray: AtomicArray // class names for web, propId-propValue for native
    conditions?: TVariants.Conditions // conditions (when is ruleset used)
  }

  export type AtomicArray = {
    [TypedInterfaceTypes.prop]: TypedInterfaceTypes.atomicArray
  } &
    ToReactStyling &
    Atomic[]// last value in array (with the same propId) wins!

  export interface ToReactStyling {
    toReactWebClassName?: (array: AtomicArray) => string
    toReactNativeStyle?: (array: AtomicArray) => NativeStyle
  }

  export type NativeStyle = Record<string, TNativeRuleValue>

  export type Atomic = AtomicNative | AtomicWeb
  export type AtomicWeb = string // fela class name. propId's are cached (propId = fela.renderer.propIdCache[valueWeb])
  export interface AtomicNative { //extends TypedInterface {
    propId: string // property name
    value: TNativeRuleValue // propert value
    tracePath?: string // for Dev: path to class source
  }
  export type AtomicNatives = AtomicNative[]


  export type Ruleset = TAtomize.AtomizedRuleset | TAtomize.AtomicArray

}
