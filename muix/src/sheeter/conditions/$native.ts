import { TSheeter, TCommonStyles, TAtomize } from 'reactxx-typings'
import { processTree, makeTemporary } from '../utils/atomize-low'

const $native = <T extends TCommonStyles.RulesetNativeIds = '$NativeText'>(...rulesets: TSheeter.RulesetNativeItem<T>[]) => {
    return rulesets && !window.isWeb && makeTemporary<T>((atomizedVariants, path, pseudoPrefixes, conditions) => {
        processTree(rulesets, atomizedVariants, path + '/$native', pseudoPrefixes, conditions)
    })
}

export default $native