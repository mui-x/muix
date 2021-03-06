import { $W, $T, $V, $I, V, T, I, TTyped } from 'reactxx-typings'
import { getTypedEngine } from '../utils/get-engine'
import { atomizeRuleset } from '../utils/atomize'

import { theme, Theme } from "reactxx-typings-test/shape.t"
import { initPlatform } from "./init-platform.t"

interface Shape {
  theme: Theme
  sheetQuery: { opened: boolean }
}

const { WEB, HOT, NATIVE, COMPILE
} = getTypedEngine<Shape>()

const t = WEB({ color: 'green' })

describe("SHEETER SIMPLE RULESET", () => {

  const doTest = (isWeb: boolean) => {
    beforeEach(() => initPlatform(isWeb))
    let ruleset

    it("01 (null)", () => {
      ruleset = COMPILE(null)
      expect(ruleset).toMatchSnapshot()
    })

    it("02 ({})", () => {
      ruleset = COMPILE({})
      expect(ruleset).toMatchSnapshot()
    })

    it("03 ([null, undefined, {}])", () => {
      ruleset = COMPILE(null, undefined, {})
      expect(ruleset).toMatchSnapshot()
    })

    it("04 ({ color: 'red', margin: 0 })", () => {
      ruleset = COMPILE({ color: 'red', margin: 0 })
      expect(ruleset).toMatchSnapshot()
    })

    it("05 ([{ color: 'red' }, { margin: 0 }])", () => {
      ruleset = COMPILE({ color: 'red' }, { margin: 0 })
      expect(ruleset).toMatchSnapshot()
    })

    it("06 (...$web: { color: 'green' }, $native: { color: 'blue' })", () => {
      ruleset = COMPILE<T>(
        {
          color: 'red',
        },
        WEB({ color: 'green' }),
        NATIVE<$T>({ color: 'blue' }),
        NATIVE({ color: 'blue' }),
      )
      expect(ruleset).toMatchSnapshot()
    })

    it("07 atomizeRuleset(atomizeRuleset({color: 'red'", () => {
      ruleset = COMPILE<T>(COMPILE<T>({
        color: 'red'
      }))
      expect(ruleset).toMatchSnapshot()
    })

    it("08 atomizeRuleset({$web: atomizeRuleset({ :hover color: 'red', $native: atomizeRuleset({ color: 'green'", () => {
      ruleset = COMPILE<T>(
        WEB(COMPILE<$W>({ ':hover': { color: 'red' } })),
        NATIVE<$T>(COMPILE<T>({ color: 'green' }))
      )
      expect(ruleset).toMatchSnapshot()
    })

    it("09 ERROR for atomizeRuleset({:hover': atomizeRuleset(...", () => {
      if (!window.isWeb) return
      const fnc = () => {
        //toClassNamesWithQuery(null,
          COMPILE<V>(
            WEB({
              ':hover': COMPILE<$W>(
                { color: 'red' }
              ),
            }))
        //)
      }
      expect(fnc).toThrow(/.*/)
    })

    it("10 ERROR for atomizeRuleset({:hover': [ARRAY]", () => {
      if (!window.isWeb) return
      const fnc = () =>
        //toClassNamesWithQuery(null,
          COMPILE<V>(
            WEB({
              ':hover': [
                {},
                COMPILE<$W>({ color: 'red' }),
                { margin: 10 }
              ]
            })
          )
        //)
      expect(fnc).toThrow(/.*/)
    })

    it("11 with theme", () => {
      ruleset = atomizeRuleset((theme: any) => [
        theme.primary.normal,
        WEB(theme.secondary.normal),
        NATIVE<$T>(theme.secondary.normal),
      ], theme)
      expect(ruleset).toMatchSnapshot()
    })

    it("12 ATOMIZE modifies source object", () => {
      const source = [
        { color: 'blue' },
        WEB({ color: 'red' }),
        NATIVE({ color: 'green' }),
      ]
      ruleset = COMPILE(...source)
      expect(ruleset).toMatchSnapshot()
      expect(source).toMatchSnapshot()
    })

    it("13 condition in pseudo", () => {
      if (!window.isWeb) return
      ruleset = COMPILE<V>(
        WEB({
          ':hover': WEB({ color: 'red' }),
        }),
      )
      expect(ruleset).toMatchSnapshot()
    })

    it("14 mix in pseudo array", () => {
      if (!window.isWeb) return
      ruleset = COMPILE(
        WEB({
          color: 'green',
          ':hover': [
            { color: 'blue' },
            WEB({ ':active': { color: 'red' } })
          ],
        }),
      )
      expect(ruleset).toMatchSnapshot()
    })

    it("15 just $hot", () => {
      ruleset = COMPILE<T>(
        { color: 'green' },
        HOT<T>(state => ({
          color: 'red'
        })),
      )
      expect(ruleset).toMatchSnapshot()
    })

  }

  describe("## NATIVE ##", () => doTest(false))
  describe("## WEB ##", () => doTest(true))

})

