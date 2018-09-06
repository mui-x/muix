import { TValue } from './index'

export namespace TCompiler {

  export const TypedInterfaceProp = '``'

  export enum TypedInterfaceTypes {
    compiled = 'c'/*compiled*/,
    nativeValue = 'n' /*Native value*/
  }

  export interface TypedInterface {
    [TypedInterfaceProp]: TypedInterfaceTypes
  }

  export type Sheet<Keys extends string = string> = Record<Keys, Ruleset>

  export interface Ruleset extends TypedInterface {
    [TypedInterfaceProp]: TypedInterfaceTypes.compiled
    name: string
    list: RulesetList
  }
  export type RulesetList = RulesetListItem[]
  export interface RulesetListItem {
    rules: Values // class names for web, propId-propValue for native
    rulesTrace?: {} // for DEV_MODE: ruleset source
    path?: string // for DEV_MODE: ruleset origin path
    conditions?: Conditions // conditions (when is ruleset used)
  }

  export type Conditions = ConditionAll[]
  export type ConditionAll = WhenUsedCondition | MediaQCondition | AnimationCondition
  export interface Condition {
    type: ConditionTypes
  }
  export interface WhenUsedCondition extends Condition {
    type: 'whenUsed'
    rulesetName: string
  }
  export interface MediaQCondition extends Condition {
    type: 'mediaq'
    start: number | null
    end: number | null
  }
  export interface AnimationCondition extends Condition {
    type: 'animation'
    opened: boolean
  }

  export type ConditionTypes = 'whenUsed' | 'mediaq' | 'animation'

  export type Values = Value[] // last value in array (with the same propId) wins!

  export type Value = ValueNative | ValueWeb
  export type ValueWeb = string // fela class name. propId's are cached (propId = fela.renderer.propIdCache[valueWeb])
  export interface ValueNative extends TypedInterface {
    [TypedInterfaceProp]: TypedInterfaceTypes.nativeValue
    propId: string // property name
    value: TValue // propert value
  }
  export type ValueNatives = ValueNative[]

  export type PlatformValues = PlatformValuesWeb | PlatformValuesNative
  export type PlatformValuesWeb = string
  export type PlatformValuesNative = Record<string, string | number>
}
