import * as React from 'react'

import { Text, View, LoremIpsum } from 'reactxx'

const App: React.SFC = props => {
  const bars: ReactXX.ViewRulesetX = { flexGrow: 0, justifyContent: 'center', alignItems: 'center', height: 48, padding: 5 }
  return <View className={{flex:1}}>
    <View className={{ ...bars, backgroundColor: 'lightgreen' }}>
      <Text className={{ fontSize: 32 }} numberOfLines={1}>
        HALLO WORLD!
      </Text>
    </View>
    <View className={{ flexDirection: 'row', flexGrow: 1 }}>
      <View className={{ width: 120, backgroundColor: 'lightblue', flexGrow: 0, padding: 20 }}>
      </View>
      <View className={{ flexShrink: 1, padding: 20, backgroundColor:'#F7F7F7' }}>
        <Text>{LoremIpsum(20)}</Text>
      </View>
    </View>
    <View className={{ ...bars, backgroundColor: 'lightgray' }}>
      <Text numberOfLines={1}>{LoremIpsum(10)}</Text>
    </View>
  </View>
}

export default App

export const meta: KSink.Example = {
  name: 'primitives/e4',
  title: 'Layout with Flex',
  descr: '',
  Component: App
}
//justifyContent: 'center', alignItems: 'center' 