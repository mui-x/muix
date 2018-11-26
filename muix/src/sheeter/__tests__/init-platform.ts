import React from 'react'

import { cleanup } from 'react-testing-library'
import { TAtomize } from 'reactxx-typings'

import { initSheeter$Web, resetPlatform, platform } from 'reactxx-sheeter'
import { initSheeter$Native } from 'reactxx-sheeter-native'

export { render } from 'react-testing-library'
export { theme, Shape } from 'reactxx-typings-test/shape'

jest.mock('react-native', () => ({
    Dimensions: null,
}))

window.matchMedia = jest.fn().mockImplementation(query /*e.g. '(min-width: 123px)'*/ => ({
    addListener: jest.fn(),
}))

export const initPlatform = (isWeb: boolean, trace: Trace = {}) => {

    afterEach(cleanup)

    window.isWeb = isWeb
    window.__TRACE__ = trace

    resetPlatform()
    if (isWeb) {
        initSheeter$Web()
    } else {
        initSheeter$Native()
    }
}

export const dump = (ruleset: TAtomize.Ruleset) => {
    expect(ruleset).toMatchSnapshot()
    const won = platform.applyLastwinsStrategy(ruleset)
    expect(won).toMatchSnapshot()
    expect(platform.finalizeClassName(won)).toMatchSnapshot()
}

export const afterLastWin = (ruleset: TAtomize.Ruleset) => {
    const won = platform.applyLastwinsStrategy(ruleset)
    expect(won).toMatchSnapshot()
}
