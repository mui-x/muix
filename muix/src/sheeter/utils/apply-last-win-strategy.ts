import { TAtomize } from 'reactxx-typings'
import { globalOptions } from '../global-state'

export interface ApplyLastWinStrategyResult {
    style?: string
    defferedIdxs?: number[]
}
export const enum AttemptType {
    first,
    firstIgnore,
    second
}

export type ApplyLastWinStrategyLow = (values: TAtomize.AtomicWeb[], attemptType: AttemptType) => ApplyLastWinStrategyResult

export const applyLastWinStrategy = (values: TAtomize.AtomicArray, applyLastWinStrategyLow: ApplyLastWinStrategyLow) => {
    const processDeffereds = globalOptions.processDeffereds
    let res = applyLastWinStrategyLow(values, processDeffereds ? AttemptType.first : AttemptType.firstIgnore)
    if (res.style || res.style==='') return res.style
    processDeffereds(values, res.defferedIdxs, values.state)
    res = applyLastWinStrategyLow(values, AttemptType.second)
    return res
}


