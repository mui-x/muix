import React from 'react';
import { TWithStyles, TComponents } from '../d-index'
import { toClassNamesForBind } from '../sheeter/to-classnames'
import { mergeRulesets, mergeSheets, mergeCodeProps, mergeStyles } from '../sheeter/merge'

export const lastPipe: TWithStyles.Pipe = (state, next) => {
  const pipeId = state.getPipeCounter()
  return () => {
    const { pipeStates } = state
    // UNDO
    delete pipeStates[pipeId]
    // prepare code component props
    const codeProps: TComponents.PropsCode = {
      ...mergeCodeProps(pipeStates.map(p => p.codeProps)),
      sheetQuery: state.sheetQuery,
      theme: state.theme,
      classNameX: mergeRulesets(pipeStates.map(p => p.classNameX)),
      classes: mergeSheets(state.sheet, pipeStates.map(p => p.classes)),
      styleX: mergeStyles(pipeStates.map(p => p.styleX)),
    }
    codeProps.toClassNames = toClassNamesForBind.bind(codeProps)
    delete codeProps.$web
    delete codeProps.$native
    return <state.CodeComponent {...codeProps} />
  }
}