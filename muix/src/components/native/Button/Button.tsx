﻿import React from 'react'
import ReactN from 'react-native'

import { fade } from 'material-ui/styles/colorManipulator'
import { capitalizeFirstLetter } from 'material-ui/utils/helpers';

import { withStyles, toPlatformRuleSet, sheetCreator } from 'muix-styles'

import { Text } from 'muix-primitives'

import { RippleEffect } from '../ButtonBase/ButtonBase'

//export type ButtonShape = Shape
const getTextIconColor = (color: string) => ({
  MuiText: { root: { color } },
  MuiIcon: { root: { color: color } },
} as Muix.SheetsX)


const sheets = (isLeft?: boolean) => sheetCreator<MuixButton.Shape>(({ typographyX: typoX, palette, spacing, shadowsNew }) => ({

  $animations: {},

  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: spacing.unit * 11,
    minHeight: 36,
    paddingTop: spacing.unit,
    paddingBottom: spacing.unit,
    paddingLeft: spacing.unit * 2,
    paddingRight: spacing.unit * 2,
    borderRadius: 2,
    color: palette.text.primary,
    $childOverrides: {
      MuiIcon: { root: { lineHeight: 1.4 * 16, fontSize: 24, ...(isLeft === true ? { marginRight: spacing.unit } : (isLeft === false ? { marginLeft: spacing.unit } : {})) } },
      MuiText: { root: { ...typoX.button, color: palette.text.primary, } },
    },
    //$animation: {
    //  paddingTop: [spacing.unit, spacing.unit * 2],
    //  $native: {
    //    transform: [{ perspective: [0, 1] }]
    //  }
    //}
  },

  //dense: {
  //  paddingTop: spacing.unit - 1,
  //  paddingBottom: spacing.unit - 1,
  //  paddingLeft: spacing.unit,
  //  paddingRight: spacing.unit,
  //  minWidth: 64,
  //  minHeight: 32,
  //  $childOverrides: {
  //    MuiText: { root: { fontSize: typoX.fontSize, } }
  //  }
  //},

  disabled: {
    //$childOverrides: getTextIconColor(palette.action.disabled)
    $childOverrides: getTextIconColor(palette.action.disabled)
  },

  flat: {
    $overrides: {
      ripple: { backgroundColor: palette.grey[500], opacity: 0.8 },
    }
  },
  flatPrimary: {
    $overrides: {
      ripple: { backgroundColor: fade(palette.primary[500], 0.4), opacity: 0.8 },
    },
    $childOverrides: getTextIconColor(palette.primary[500])
  },
  flatSecondary: {
    $overrides: {
      ripple: { backgroundColor: fade(palette.secondary.light, 0.4), opacity: 0.8 },
    },
    $childOverrides: getTextIconColor(palette.secondary.light)
  },
  //flatContrast: {
  //  $overrides: {
  //    ripple: { backgroundColor: fade(palette.getContrastText(palette.primary[500]), 0.4), opacity: 0.8 },
  //  },
  //  $childOverrides: getTextIconColor(palette.getContrastText(palette.primary[500]))
  //},

  raised: {
    backgroundColor: palette.grey[300],
    ...shadowsNew[2],
    $overrides: {
      active: shadowsNew[8],
    }
  },
  raisedPrimary: {
    backgroundColor: palette.primary.main,
    $childOverrides: getTextIconColor(palette.primary.contrastText)
  },
  raisedSecondary: {
    backgroundColor: palette.secondary.main,
    $childOverrides: getTextIconColor(palette.secondary.contrastText)
  },
  raisedDisable: {
    ...shadowsNew[0],
    backgroundColor: palette.action.disabledBackground,
    //$childOverrides: getTextIconColor(palette.action.disabled),
    $childOverrides: getTextIconColor('gray'),
  },
  raisedContrast: {
    $childOverrides: getTextIconColor(palette.getContrastText(palette.primary[500]))
  },

  fab: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    ...shadowsNew[6],
    $overrides: {
      active: shadowsNew[12],
    }
  },

  mini: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  ripple: {
    backgroundColor: palette.common.white, opacity: 0.35,
  },
  colorInherit: {},
  label: {},
  active: {},
  keyboardFocused: {}
}))


const button: Muix.CodeSFCNative<MuixButton.Shape> = (props, context) => {

  const { children, classes, color = 'default', fab, raised, mini, getStyleWithSideEffect, className, animations, ...rest } = props
  const { disabled } = rest //disabled must be propagated to ButtonBaseLow

  const isFlat = !raised && !fab
  const Color = capitalizeFirstLetter(color)

  const viewStyle = getStyleWithSideEffect(
    classes.root,
    !isFlat && classes.raised,
    isFlat && classes.flat,
    fab && classes.fab,
    fab && mini && classes.mini,
    isFlat && color === 'primary' && classes.flatPrimary,
    isFlat && color === 'secondary' && classes.flatSecondary,
    !isFlat && color === 'primary' && classes.raisedPrimary,
    !isFlat && color === 'secondary' && classes.raisedSecondary,

    !isFlat && disabled && classes.raisedDisable,
    isFlat && disabled && classes.disabled,

    className,
  ) as ReactN.ViewStyle

  //console.log('### viewStyle: ', viewStyle)

  const rippleStyle = getStyleWithSideEffect(classes.ripple) as ReactN.ViewStyle
  const activeStyle = getStyleWithSideEffect(!disabled && classes.active) as ReactN.ViewStyle

  const childs = React.Children.toArray(children).map((ch, idx) => typeof ch === 'string' || typeof ch === 'number' ? <Text key={idx}>{ch.toString().toUpperCase()}</Text> : ch)

  return <RippleEffect viewStyle={viewStyle} rippleStyle={rippleStyle} activeStyle={activeStyle} classes={null} className={null} getStyleWithSideEffect={null} animations={null} {...rest}>
    {childs}
  </RippleEffect>
}

const Button = withStyles<MuixButton.Shape>(sheets(), { name: 'MuiButton' })(button)
export const ButtonIconLeft = withStyles<MuixButton.Shape>(sheets(true), { name: 'MuiButtonIconLeft' })(button)
export const ButtonIconRight = withStyles<MuixButton.Shape>(sheets(false), { name: 'MuiButtonIconRight' })(button)

export default Button