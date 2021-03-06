import React from 'react'

import { ScrollView } from 'reactxx-primitives'
import { LoremIpsum } from 'reactxx-basic'
import { H1, H2, H3, H4, H5, U, I, B, A, Blocquote, P } from '../primitives/typo'

const App: React.SFC = props => <ScrollView classes={{ container: { padding: 10 } }}>
  <H1>H1: {LoremIpsum(5)}</H1>
  <H2>H2: {LoremIpsum(5)}</H2>
  <H3>H3: {LoremIpsum(5)}</H3>
  <H4>H4: {LoremIpsum(5)}</H4>
  <H5>H5: {LoremIpsum(5)}</H5>
  <P>
    <B>B: {LoremIpsum(5)}</B>
    <B>P: </B>{LoremIpsum(5)}
    {LoremIpsum(10)}
    {LoremIpsum(10)}
    <I><B>I: </B>{LoremIpsum(5)}</I>
    {LoremIpsum(10)}
    <U><B>U: </B>{LoremIpsum(5)}</U>
    {LoremIpsum(10)}
    <A onPress={() => alert('Its me!')}><B>A: </B>{LoremIpsum(5)}</A>
    {LoremIpsum(10)}
  </P>
  <Blocquote>
    <B>Blocquote: </B>{LoremIpsum(80)}
  </Blocquote>
</ScrollView>

export default App

