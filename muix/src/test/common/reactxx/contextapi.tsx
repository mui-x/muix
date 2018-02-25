import React from 'react'

import { createContextLib, ConsumerProps } from '../../../reactxx/common/contextapi'


interface Context {
  theme: string
  componentTheme: { [id: string]: string }
  overrides: { [id: string]: string }
}

const { Consumer, Modifier, Provider } = createContextLib<Context>({ theme: '', componentTheme: {}, overrides: {} })

const Consumer1 = Consumer as React.ComponentClass<ConsumerProps<Context, { themex: string }>>
const Consumer2 = Consumer as React.ComponentClass<ConsumerProps<Context, { theme: string; componentTheme: string }>>
const Consumer3 = Consumer as React.ComponentClass<ConsumerProps<Context, { theme: string; overrides: string }>>

class Comp extends React.PureComponent<{ id: string; title?: string; theme?: string, componentTheme?: string, overrides?: string }> {
  render() {
    console.log('RENDER: ', this.props.id)
    return <div><b>{this.props.id}</b>: theme: {this.props.theme}, componentTheme: {this.props.componentTheme}, overrides: {this.props.overrides}, </div>
  }
}

class Modify extends React.Component {
  render() {
    return <>
      <hr />
      <Modifier modify={value => ({ ...value, theme: value.theme + '*M*' })}>
        <Fragment />
      </Modifier>
    </>
  }
}

class Dummy extends React.PureComponent {
  render() {
    return this.props.children
  }
}

const Fragment: React.SFC = () => <>
  <Dummy key={1}>
    <Consumer1 key={1} selector={v => ({ themex: v.theme })} render={v =>
      <Comp id='1' theme={v.themex} />
    } />
    <Consumer2 key={2} selector={v => ({ theme: v.theme, componentTheme: v.componentTheme.c1 })} render={v => 
      <Comp id='2' theme={v.theme} componentTheme={v.componentTheme} />
    } />
  </Dummy>
  <Dummy key={2}>
    <Consumer3 key={3} selector={v => ({ theme: v.theme, overrides: v.overrides.o2 })} render={v => 
      <Comp id='3' theme={v.theme} overrides={v.overrides} />
    } />
  </Dummy>
</>

class App extends React.Component<any, Context> {
  state = { theme: 'theme', componentTheme: { c1: 'c1', c2: 'c2' }, overrides: { o1: 'o1', o2: 'o2' } }
  render() {
    console.log('APP')
    const st = this.state
    return <Provider initValue={this.state}>
      <a href='#' onClick={() => this.setState({ ...st, theme: st.theme + '-t' })}>MODIFY THEME</a> |
      <a href='#' onClick={() => this.setState({ ...st, componentTheme: { ...st.componentTheme, c1: st.componentTheme.c1 + '-c1' } })}>MODIFY comp-th 1</a> |
      <a href='#' onClick={() => this.setState({ ...st, overrides: { ...st.overrides, o2: st.overrides.o2 + '-o2' } })}>MODIFY over 2</a> |
      <a href='#' onClick={() => this.forceUpdate()}>FORCE update</a> |
      <hr />
      <Modifier modify={value => ({ ...value, componentTheme: { ...value.componentTheme, c1: value.componentTheme.c1 + '@M@' }})}>
        <Fragment />
      </Modifier>

      <hr />
      <Fragment/>
      {/*
      */}
      <Modify/>
    </Provider>
  }
}

export default App
