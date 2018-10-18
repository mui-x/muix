import { TCommonStyles, TComponents, TSheeter, TVariants, TWithStyles } from 'reactxx-typings'
import { registerVariantHandler, atomizeRulesetInner, wrapPseudoPrefixes } from 'reactxx-sheeter'

export const enum Consts {
    name = '$switch'
}

export type getCases<R extends TSheeter.Shape = TSheeter.Shape> = keyof R['cases']

declare module 'reactxx-typings' {

    namespace TVariants {

        interface Query<R extends TSheeter.Shape = TSheeter.Shape> {
            [Consts.name]?: SheetCases<R>
        }
        type SheetCases<R extends TSheeter.Shape = TSheeter.Shape> = keyof getCases<R> extends never ? TSheeter.FakeInterface :
            Record<getCases<R>, boolean>

        interface ShapePart {
            cases?: TSheeter.EmptyInterface
        }

        interface VariantPart<T extends TCommonStyles.RulesetNativeIds, R extends TSheeter.Shape> {
            [Consts.name]?: SheetSwitchPart<T, R>
        }
        type SheetSwitchPart<T extends TCommonStyles.RulesetNativeIds = 'Text', R extends TSheeter.Shape = TSheeter.Shape> =
            getCases<R> extends never ? never :
            PartialRecord<getCases<R>, TSheeter.RulesetOrAtomized<T, R>>


    }
}