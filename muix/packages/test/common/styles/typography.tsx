//https://github.com/vitalets/react-native-extended-stylesheet
//https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js
//jspm build ./app-native/snack/mui/index.js ./app-native/snack/mui/bundle.js
import React from 'react'

import { createMuiTheme, MuiThemeProvider } from 'muix-styles'
import orange from 'material-ui/colors/orange'
import green from 'material-ui/colors/green'
import cyan from 'material-ui/colors/cyan'

import { View, ScrollView, Typography } from 'muix-primitives'

const theme = createMuiTheme({
  typography: palette => ({
    caption: {
      color: cyan.A700,
      fontSize: 28,
      fontWeight: '500',
      native: {
        fontSize: 22,
      }
    },
  }),
  palette: {
    primary: orange,
    secondary: green
  },
  overridesX: {
    MuiTypography: {
      colorAccent: { color: cyan.A700, fontWeight: '500', fontSize: 18 }, 
      display2: { color: cyan.A700 },
    }
  }
})

const app2 = () => <Typography className={{ fontWeight: '500', textDecorationLine: 'line-through', color: 'blue', marginTop:24 }}>TEXT</Typography>

const app = () => <ScrollView>
  <Typography paragraph variant='headline' style={{ textDecorationLine: 'underline' }}>noWrap</Typography>
  <Typography noWrap style={{ width: 200, flexShrink: 0 }}>noWrap noWrap noWrap noWrap noWrap noWrap noWrap noWrap noWrap noWrap noWrap noWrap noWrap noWrap </Typography>
  {/**/}
  <Typography paragraph variant='headline' style={{ textDecorationLine: 'underline' }}>MARGINS</Typography>
  <Typography paragraph>paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph </Typography>
  <Typography paragraph>paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph </Typography>
  <Typography gutterBottom>gutterBottom gutterBottom gutterBottom gutterBottom gutterBottom gutterBottom gutterBottom gutterBottom gutterBottom gutterBottom gutterBottom </Typography>
  <Typography gutterBottom>gutterBottom gutterBottom gutterBottom gutterBottom gutterBottom gutterBottom gutterBottom gutterBottom gutterBottom gutterBottom gutterBottom </Typography>
  {/**/}
  <Typography paragraph variant='headline' style={{ textDecorationLine: 'underline' }}>FONTS (native only)</Typography>
  <Typography style={{ fontFamily: 'Roboto' }}>Roboto</Typography>
  <Typography style={{ fontFamily: 'Roboto_Light' }}>Roboto_Light</Typography>
  <Typography style={{ fontFamily: 'Roboto_Medium' }}>Roboto_Medium</Typography>
  {/**/}
  <Typography paragraph variant='headline' style={{ textDecorationLine: 'underline' }}>COLORS</Typography>
  <Typography>undefined</Typography>
  <Typography color='inherit'>inherit</Typography>
  <Typography color='secondary'>accent</Typography>
  <Typography color='error'>error</Typography>
  <Typography color='default'>default</Typography>
  <Typography color='secondary'>secondary</Typography>
  <Typography color='primary'>primary</Typography>
  {/**/}
  <Typography paragraph variant='headline' style={{ textDecorationLine: 'underline' }}>TYPES</Typography>
  <Typography>undefined</Typography>
  <Typography variant='body1' align="right">body1, align=right</Typography>
  <Typography variant='body2' align="center">body2, align=center</Typography>
  <Typography variant='button' align="left">button, align=left</Typography>
  <Typography variant='caption'>caption</Typography>
  <Typography paragraph variant='headline'>headline</Typography>
  <Typography variant='subheading'>subheading</Typography>
  <Typography variant='title'>title</Typography>
  <Typography variant='display1'>display1</Typography>
  <Typography variant='display2'>display2</Typography>
  <Typography variant='display3'>display3</Typography>
  <Typography variant='display4'>display4</Typography>
  {/**/}
  <Typography paragraph variant='headline' style={{ textDecorationLine: 'underline' }}>WITH CLASSES</Typography>
  <Typography className={{ fontWeight: '500', textDecorationLine: 'line-through', color: 'blue' }}>TEXT</Typography>
  {/**/}
  <Typography paragraph variant='headline' style={{ textDecorationLine: 'underline' }}>WITH THEME</Typography>
  <MuiThemeProvider theme={theme}>
    <View>
      <Typography color='secondary'>secondary</Typography>
      <Typography color='primary'>primary</Typography>
      <Typography variant='caption' >caption</Typography>
      <Typography variant='display2' >display2</Typography>
      <Typography color='secondary' >accent</Typography>
      <Typography color='secondary' style={{ color: 'red' }} >accent red</Typography>
      <Typography color='primary' className={{ fontWeight: '500', textDecorationLine: 'line-through' }}>primary, WITH CLASSES</Typography>
    </View>
  </MuiThemeProvider>
</ScrollView>

export default app
//export default app2