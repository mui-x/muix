﻿import React from 'react'
import ReactN from 'react-native'

import { View, TouchableWithoutFeedback, Animated, Easing, Platform, LayoutRectangle } from 'react-native'

import { sheetCreator, withStyles } from 'muix-styles'

const sheet = sheetCreator<MuixButtonBase.Shape>(({ palette }) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ripple: {
    backgroundColor: palette.common.white,
    opacity: 0.35,
  },
  
}))

const minRippleSize = 0.01

export interface ButtonBaseStyles {
  viewStyle: ReactN.ViewStyle
  activeStyle: ReactN.ViewStyle
  rippleStyle: ReactN.ViewStyle
}

//let t: Muix.CodePropsNative<MuixButtonBase.Shape>

export class RippleEffect extends React.Component<ButtonBaseStyles & Partial<Prim5s.CodePropsNative<MuixButtonBase.Shape>>> { 

  state: { active?: boolean } = {}
  scaleValue = new Animated.Value(minRippleSize)
  opacityValue = new Animated.Value(0)
  scale: Animated.CompositeAnimation
  opacity: Animated.CompositeAnimation
  rect: Partial<LayoutRectangle> = {}

  clear() {
    const { scale, opacity } = this
    if (scale) scale.stop(); delete this.scale
    if (opacity) opacity.stop(); delete this.opacity
    this.scaleValue.setValue(minRippleSize);
    this.opacityValue.setValue(0);
  }

  onPressedIn = (() => this.setState({ active: true })).bind(this)
  onPressedOut = (() => this.setState({ active: false })).bind(this)

  render() {
    const { scaleValue, opacityValue, onPressedIn, onPressedOut, rect: { width, height }, state: { active }, props: { children, viewStyle, rippleStyle, activeStyle, disabled, onPress, theme, disableRipple, style } } = this

    const renderRipple = () => {

      if (disabled || disableRipple || !width || !height || typeof active == 'undefined') return null

      const radius = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2))

      const style = {
        ...rippleStyle as ReactN.ViewStyle,
        position: 'absolute',
        left: -(radius - width / 2),
        top: - (radius - height / 2),
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        transform: [{ scale: scaleValue as any }],
        opacity: opacityValue as any,
      } as ReactN.ViewStyle

      //console.log('renderRipple', style)

      return <Animated.View style={style} />
    }

    if (active === true) {
      this.clear()
      opacityValue.setValue(rippleStyle.opacity)
      this.scale = Animated.timing(scaleValue, {
        toValue: 1,
        duration: theme.transitions.duration.short,
        //http://xaedes.de/dev/transitions/
        //http://cubic-bezier.com
        easing: Easing.linear,
        useNativeDriver: Platform.OS === 'android',
      })
      this.scale.start()
    } else if (active === false) {
      this.opacity = Animated.timing(opacityValue, {
        duration: theme.transitions.duration.short,
        toValue: 0,
        useNativeDriver: Platform.OS === 'android',
      })
      this.opacity.start(() => this.clear())
    }

    return <TouchableWithoutFeedback disabled={disabled} onPress={onPress} onPressIn={onPressedIn} onPressOut={onPressedOut} onLayout={({ nativeEvent: { layout } }) => this.rect = layout} >
      <View style={Object.assign({}, viewStyle, style, false/*active*/ ? activeStyle : null)}>
        {renderRipple()}
        {children}
      </View>
    </TouchableWithoutFeedback>
  }

}

let t: Prim5s.CodePropsNative<MuixButtonBase.Shape>


const buttonBase: Prim5s.CodeSFCNative<MuixButtonBase.Shape> = props => {
  const { style, classes, getRulesetWithSideEffect, className, animations, ...rest } = props
  const viewStyle = getRulesetWithSideEffect(classes.root, className) as ReactN.ViewStyle
  const rippleStyle = getRulesetWithSideEffect(classes.ripple) as ReactN.ViewStyle
  return <RippleEffect viewStyle={viewStyle} rippleStyle={rippleStyle} activeStyle={{}} classes={null} className={null} getRulesetWithSideEffect={null} animations={null} {...rest} style={null}/>
}

const ButtonBase = withStyles<MuixButtonBase.Shape>(sheet, { name: 'MuiButtonBase' })(buttonBase)

export default ButtonBase