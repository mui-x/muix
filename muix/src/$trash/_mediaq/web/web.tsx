import React from 'react';
import * as Sheeter from 'reactxx-sheeter';
import warning from 'warning';
import { TMediaQ } from '../typings/mediaq';



export class MediaQ_AppContainer extends React.Component {

  constructor(props) {
    super(props)
    appContainer = appContainer || this
    mediaQBreaks = mediaQBreaks || []
  }
  render() {
    return appContainer !== this
      ? <React.Fragment>{this.props.children}</React.Fragment>
      : <context.Provider value={mediaQBreaks.map(b => b.active)}>{this.props.children}</context.Provider>
  }

  componentWillUnmount() {
    if (appContainer !== this) return
    appContainer = null
    mediaQBreaks = null
  }

  subscribe(value: number) {
    checkAppContainer()
    let b = byValue[value]
    if (!b) {
      warning(mediaQBreaks.length <= 31, 'reactxx-mediaq: too many different breakpoints (max 32 allowed)')
      mediaQBreaks.push(b = { id: mediaQBreaks.length, value })
      byValue[value] = b
      // match media
      const mediaQuery = window.matchMedia(`(min-width: ${b.value}px)`)
      b.active = mediaQuery.matches
      // on change media
      const onChange = (q) => {
        b.active = q.matches
        if (!this.timer) this.timer = window.setTimeout(() => {
          this.timer = 0
          this.setState({})
        }, 1)
      }
      mediaQuery.addListener(onChange)
    }
    return b
  }
  timer = 0

}

export const mediaqFinishAddInClasses = Sheeter.mediaqFinishAddInCreator()

export const mediaqFinishAddInProps: Sheeter.FinishAddIn = (addInItem: TMediaQ.NotifyIntervalX) => {
  const breaks: { [value: number]: boolean } = {}
  let observedBits = 0
  const processBreak = (value: number) => {
    if (!value || breaks[value]) return
    breaks[value] = true
    const breakPoint = appContainer.subscribe(value)
    observedBits |= 1 << breakPoint.id
  }
  for (const p in addInItem) {
    const prop = addInItem[p]
    processBreak(prop[0])
    processBreak(prop[1])
  }
  (addInItem[Sheeter.Consts.data] = {} as any)[Sheeter.Consts.dataObservedBits] = observedBits
}


// 
export const mediaQFlags = (input: () => TMediaQ.MediaQFlagsInputPar, next: () => React.ReactNode) => {
  let pars: TMediaQ.MediaQFlagsInputPar
  const render = (activeBreakpoints: boolean[]) => {
    // https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
    pars.getPropsPatches.$mediaq = propsPatchGetterCreator(window.innerWidth)
    return next()
  }
  const res = () => {
    pars = input()
    return <context.Consumer unstable_observedBits={getObservedBits(pars.addIns['$mediaq'] as any as TMediaQ.NotifyIntervalX)}>{render}</context.Consumer>
  }
  return res
}

// CSS media query are used for web, no consumer is required, just register getPropsPatches
export const mediaQSheet = (input: () => Sheeter.RulesetPatchGetters, next: () => React.ReactNode) => {
  const getPropsPatches = input()
  getPropsPatches.$mediaq = Sheeter.mediaqRulesetPatchGetterCreator()
  return next
}

/************************
* PRIVATE
*************************/
const checkAppContainer = () => warning(mediaQBreaks, 'reactxx-mediaq: missing MediaQ_AppContainer component in your application root')

const context = React.createContext<boolean[]>([], (prev, next) => {
  let res = 0
  for (let i = 0; i < Math.max(prev.length, next.length); i++)
    if (i >= prev.length || i >= next.length || prev[i] !== next[i]) res |= 1 << i
  return res
})

let mediaQBreaks: TMediaQ.Breakpoint[]
let byValue: TMediaQ.Breakpoint[] = []
let appContainer: MediaQ_AppContainer

const getObservedBits = ($mediaq: TMediaQ.NotifyIntervalX) => {
  if (!$mediaq) return 0
  const data = $mediaq[Sheeter.Consts.data]; if (!data) return 0
  return data[Sheeter.Consts.dataObservedBits] || 0
}

const propsPatchGetterCreator: (width: number) =>
  Sheeter.PropsPatchGetter = width =>
    (intervals: TMediaQ.NotifyIntervalX, map) => {
      const $mediaq: TMediaQ.MediaFlags = {}
      for (const p in intervals) {
        if (p.charAt(0) === '#') continue
        const [beg, end] = intervals[p]
        $mediaq[p] = (!beg || beg <= width) && (!end || end > width)
      }
      map.push({ $mediaq })
    }