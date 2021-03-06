import React from 'react'

import { platform } from "reactxx-styles"

import { initPlatform, render } from "./init-platform.t"
import { compCreator } from "./lib.t"

describe("USE SHEETER", () => {

  const doTest = (isWeb: boolean) => {
    beforeEach(() => {
      initPlatform(isWeb, { dataTraceFlag: 'short' })
      platform.getDefaultTheme = () => ({
        primaryColor: 'gray',
        p1Prop: 'themeProp'
      })
    })

    it('01: missing configs', () => {
      const Comp = compCreator(null)
      const wrapper = render(<Comp className={{margin: 20}}/>)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('02: sheet missing', () => {
      const Comp = compCreator({}, null)
      const wrapper = render(<Comp />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })
    it('03: just div', () => {
      const Comp = compCreator({ $sheet: { root: {} } }, null)
      const wrapper = render(<Comp />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('04: with sheet', () => {
      const Comp = compCreator({ $sheet: { root: { color: 'red' } } }, null)
      const wrapper = render(<Comp />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('05: with sheet override', () => {
      const Comp = compCreator(
        { $sheet: { root: { color: 'red' } } },
        { $sheet: { root: { color: 'green' } } }
      )
      const wrapper = render(<Comp />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('06: with classes override', () => {
      const Comp = compCreator(
        { $sheet: { root: { color: 'red' } } },
        { $sheet: { root: { color: 'green' } } }
      )
      const wrapper = render(<Comp classes={{ root: { color: 'blue' } }} />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('07: with css override', () => {
      const Comp = compCreator(
        { $sheet: { root: { color: 'red' } } },
        { $sheet: { root: { color: 'green' } } }
      )
      const wrapper = render(<Comp classes={{ root: { color: 'blue' } }} className={{ color: 'yellow' }} />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('08: with style override', () => {
      const Comp = compCreator(
        { $sheet: { root: { color: 'red' } } },
        { $sheet: { root: { color: 'green' } } }
      )
      const wrapper = render(<Comp classes={{ root: { color: 'blue' } }} className={{ color: 'yellow' }} style={{ color: 'maroon' }} />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('09: theme, with sheet', () => {
      const Comp = compCreator({ $sheet: theme => ({ root: { color: theme.primaryColor } }) }, null)
      const wrapper = render(<Comp />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('10: theme, with sheet override', () => {
      const Comp = compCreator(
        { $sheet: { root: { color: 'red' } } },
        { $sheet: theme => ({ root: { color: theme.primaryColor } }) }
      )
      const wrapper = render(<Comp />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('11: theme, with classes override', () => {
      const Comp = compCreator(
        { $sheet: { root: { color: 'red' } } },
        { $sheet: { root: { color: 'green' } } }
      )
      const wrapper = render(<Comp classes={theme => ({ root: { color: theme.primaryColor } })} />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('12: theme, with classNameX override', () => {
      const Comp = compCreator(
        { $sheet: { root: { color: 'red' } } },
        { $sheet: { root: { color: 'green' } } }
      )
      const wrapper = render(<Comp classes={{ root: { color: 'blue' } }} className={theme => ({ color: theme.primaryColor })} />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('13: theme, with styleX override', () => {
      const Comp = compCreator(
        { $sheet: { root: { color: 'red' } } },
        { $sheet: { root: { color: 'green' } } }
      )
      const wrapper = render(<Comp classes={{ root: { color: 'blue' } }} className={{ color: 'yellow' }} style={theme => ({ color: theme.primaryColor })} />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })


    it('14: default props', () => {
      const Comp = compCreator(
        {
          $sheet: { root: {} },
          $props: { p1: 'defaultProp' }
        },
        null
      )
      const wrapper = render(<Comp />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('15: override props', () => {
      const Comp = compCreator(
        {
          $sheet: { root: {} },
          $props: { p1: 'defaultProp' }
        },
        { $props: { p1: 'overrideProp' } }
      )
      const wrapper = render(<Comp />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('16: props', () => {
      const Comp = compCreator(
        {
          $sheet: { root: {} },
          $props: { p1: 'defaultProp' }
        },
        { $props: { p1: 'overrideProp' } }
      )
      const wrapper = render(<Comp p1='componentProp' />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('17: theme, default props', () => {
      const Comp = compCreator(
        {
          $sheet: { root: {} },
          $props: { p1: 'defaultProp', themedProps: theme => ({ p1: theme.p1Prop }) }
        },
        null
      )
      const wrapper = render(<Comp />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('18: theme, override props', () => {
      const Comp = compCreator(
        {
          $sheet: { root: {} },
          $props: { p1: 'defaultProp' }
        },
        { $props: { p1: 'overrideProp', themedProps: theme => ({ p1: theme.p1Prop }) } }
      )
      const wrapper = render(<Comp />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('19: theme, props', () => {
      const Comp = compCreator(
        {
          $sheet: { root: {} },
          $props: { p1: 'defaultProp' }
        },
        { $props: { p1: 'overrideProp' } }
      )
      const wrapper = render(<Comp p1='componentProp' themedProps={theme => ({ p1: theme.p1Prop })} />)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('20: style', () => {
      const Comp = compCreator({ $sheet: { root: {} } })
      const wrapper = render(<Comp style={{color: 'red', margin: 5, $web: {margin: 10}, $native: {margin: 20}}}/>)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('21: style with classes', () => {
      const Comp = compCreator({ $sheet: { root: { color: 'red'} } })
      const wrapper = render(<Comp className={{margin: 20}} style={{color: 'blue', $web: {margin: 30}, $native: {margin: 40}}}/>)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

    it('22: user config only', () => {
      const Comp = compCreator(null, { $sheet: { root: { color: 'red'} } })
      const wrapper = render(<Comp/>)
      expect(wrapper.container).toMatchSnapshot()
      wrapper.unmount()
    })

  }

  describe("## NATIVE ##", () => doTest(false))
  describe("## WEB ##", () => doTest(true))

})

