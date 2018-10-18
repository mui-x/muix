import { TComponents, TVariants } from 'reactxx-typings'
import { registerVariantHandler, atomizeRulesetInner, wrapPseudoPrefixes } from 'reactxx-sheeter'
import { Consts } from '../variants'
import { intervalToSelector } from './parser'

export const sheetWidths_registerVariantHandler = () => {
    if (notRegistered = !notRegistered) return
    registerVariantHandler({
        name: Consts.name,
        toAtomicRuleset,
        testAtomicRuleset
    })
}
let notRegistered = true

//*********************************************************
//  PRIVATE
//*********************************************************

interface WidthsCondition extends TVariants.Condition {
    type: Consts.name
    widthName: string
}

const toAtomicRuleset: TVariants.ToAtomicRuleset<TVariants.SheetWidthsPart> = (
    list, widths, path, _pseudoPrefixes, _conditions
) => {
    if (!widths) return
    const pseudoPrefixes = (widthName: string) => window.isWeb
        ? [..._pseudoPrefixes, intervalToSelector(widthName)]
        : _pseudoPrefixes
    const conditions = (widthName: string) =>
        window.isWeb
            ? _conditions
            : [..._conditions, { type: Consts.name, widthName } as WidthsCondition]
    for (const widthName in widths) {
        const casep = widths[widthName]
        if (!casep) continue
        if (Array.isArray(casep))
            casep.forEach((ruleset, idx) =>
                atomizeRulesetInner(
                    list, ruleset,
                    `${path}/$switch.${widthName}[${idx}]`,
                    pseudoPrefixes(widthName),
                    conditions(widthName),
                    wrapPseudoPrefixes(ruleset, pseudoPrefixes(widthName)))
            )
        else
            atomizeRulesetInner(
                list, casep as TVariants.VariantPart,
                `${path}/$widths.${widthName}`,
                pseudoPrefixes(widthName),
                conditions(widthName),
                wrapPseudoPrefixes(casep, pseudoPrefixes(widthName)))
    }
}

const testAtomicRuleset: TComponents.TestAtomicRuleset = (cond: WidthsCondition, state) => {
    const { propsCode: { sheetWidths } } = state
    return sheetWidths && sheetWidths[cond.widthName]
}
