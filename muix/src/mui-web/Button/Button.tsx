//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
// @inheritedComponent ButtonBase
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import { fade } from "../styles/colorManipulator";
import ButtonBase from "../ButtonBase/ButtonBase";
import { capitalize } from "../utils/helpers";
import { StandardProps, PropTypes as muiPropTypes } from "..";
import { ButtonBaseProps } from "../ButtonBase/ButtonBase";
export interface ButtonProps
  extends StandardProps<ButtonBaseProps, ButtonClassKey, "component"> {
  color?: muiPropTypes.Color;
  component?: React.ReactType<ButtonProps>;
  disabled?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  fullWidth?: boolean;
  href?: string;
  mini?: boolean;
  size?: "small" | "medium" | "large";
  type?: string;
  variant?:
    | "text"
    | "flat"
    | "outlined"
    | "contained"
    | "raised"
    | "fab"
    | "extendedFab";
}
export type ButtonClassKey =
  | "root"
  | "label"
  | "text"
  | "textPrimary"
  | "textSecondary"
  | "flat"
  | "flatPrimary"
  | "flatSecondary"
  | "outlined"
  | "outlinedPrimary"
  | "outlinedSecondary"
  | "colorInherit"
  | "contained"
  | "containedPrimary"
  | "containedSecondary"
  | "raised"
  | "raisedPrimary"
  | "raisedSecondary"
  | "focusVisible"
  | "disabled"
  | "fab"
  | "mini"
  | "sizeSmall"
  | "sizeLarge"
  | "fullWidth";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    ...theme.typography.button,
    lineHeight: "1.4em",
    // Improve readability for multiline button.
    boxSizing: "border-box",
    minWidth: 64,
    minHeight: 36,
    padding: "8px 16px",
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
    transition: theme.transitions.create(
      ["background-color", "box-shadow", "border"],
      {
        duration: theme.transitions.duration.short
      }
    ),
    "&:hover": {
      textDecoration: "none",
      backgroundColor: fade(
        theme.palette.text.primary,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      },
      "&$disabled": {
        backgroundColor: "transparent"
      }
    },
    "&$disabled": {
      color: theme.palette.action.disabled
    }
  },

  /* Styles applied to the span element that wraps the children. */
  label: {
    width: "100%",
    // assure the correct width for iOS Safari
    display: "inherit",
    alignItems: "inherit",
    justifyContent: "inherit"
  },

  /* Styles applied to the root element if `variant="text"`. */
  text: {},

  /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
  textPrimary: {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: fade(
        theme.palette.primary.main,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }
  },

  /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
  textSecondary: {
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: fade(
        theme.palette.secondary.main,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }
  },

  /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
  flat: {},

  /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
  flatPrimary: {},

  /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
  flatSecondary: {},

  /* Styles applied to the root element if `variant="outlined"`. */
  outlined: {
    border: `1px solid ${
      theme.palette.type === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)"
    }`
  },

  /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
  outlinedPrimary: {
    border: `1px solid ${fade(theme.palette.primary.main, 0.5)}`,
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`
    }
  },

  /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
  outlinedSecondary: {
    border: `1px solid ${fade(theme.palette.secondary.main, 0.5)}`,
    "&:hover": {
      border: `1px solid ${theme.palette.secondary.main}`
    }
  },

  /* Styles applied to the root element if `variant="[contained | fab]"`. */
  contained: {
    color: theme.palette.getContrastText(theme.palette.grey[300]),
    backgroundColor: theme.palette.grey[300],
    boxShadow: theme.shadows[2],
    "&$focusVisible": {
      boxShadow: theme.shadows[6]
    },
    "&:active": {
      boxShadow: theme.shadows[8]
    },
    "&$disabled": {
      color: theme.palette.action.disabled,
      boxShadow: theme.shadows[0],
      backgroundColor: theme.palette.action.disabledBackground
    },
    "&:hover": {
      backgroundColor: theme.palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.palette.grey[300]
      },
      "&$disabled": {
        backgroundColor: theme.palette.action.disabledBackground
      }
    }
  },

  /* Styles applied to the root element if `variant="[contained | fab]"` and `color="primary"`. */
  containedPrimary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.palette.primary.main
      }
    }
  },

  /* Styles applied to the root element if `variant="[contained | fab]"` and `color="secondary"`. */
  containedSecondary: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.palette.secondary.main
      }
    }
  },

  /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
  raised: {},
  // legacy

  /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
  raisedPrimary: {},
  // legacy

  /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
  raisedSecondary: {},
  // legacy

  /* Styles applied to the root element if `variant="[fab | extendedFab]"`. */
  fab: {
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    boxShadow: theme.shadows[6],
    "&:active": {
      boxShadow: theme.shadows[12]
    }
  },

  /* Styles applied to the root element if `variant="extendedFab"`. */
  extendedFab: {
    borderRadius: 48 / 2,
    padding: "0 16px",
    width: "auto",
    minWidth: 48,
    height: 48
  },

  /* Styles applied to the ButtonBase root element if the button is keyboard focused. */
  focusVisible: {},

  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Styles applied to the root element if `color="inherit"`. */
  colorInherit: {
    color: "inherit"
  },

  /* Styles applied to the root element if `size="mini"` & `variant="[fab | extendedFab]"`. */
  mini: {
    width: 40,
    height: 40
  },

  /* Styles applied to the root element if `size="small"`. */
  sizeSmall: {
    padding: "7px 8px",
    minWidth: 64,
    minHeight: 32,
    fontSize: theme.typography.pxToRem(13)
  },

  /* Styles applied to the root element if `size="large"`. */
  sizeLarge: {
    padding: "8px 24px",
    minWidth: 112,
    minHeight: 40,
    fontSize: theme.typography.pxToRem(15)
  },

  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: "100%"
  }
});

const Button: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    children,
    classes,
    className: classNameProp,
    color,
    disabled,
    disableFocusRipple,
    fullWidth,
    focusVisibleClassName,
    mini,
    size,
    variant,
    ...other
  } = props;
  const fab = variant === "fab" || variant === "extendedFab";
  const contained = variant === "contained" || variant === "raised";
  const text =
    variant === "text" || variant === "flat" || variant === "outlined";
  const className = classNames(
    classes.root,
    fab && classes.fab,
    fab && mini && classes.mini,
    variant === "extendedFab" && classes.extendedFab,
    text && classes.text,
    text && color === "primary" && classes.textPrimary,
    text && color === "secondary" && classes.textSecondary,
    (variant === "text" || variant === "flat") && classes.flat,
    (variant === "text" || variant === "flat") &&
      color === "primary" &&
      classes.flatPrimary,
    (variant === "text" || variant === "flat") &&
      color === "secondary" &&
      classes.flatSecondary,
    (contained || fab) && classes.contained,
    (contained || fab) && color === "primary" && classes.containedPrimary,
    (contained || fab) && color === "secondary" && classes.containedSecondary,
    (contained || fab) && classes.raised,
    (contained || fab) && color === "primary" && classes.raisedPrimary,
    (contained || fab) && color === "secondary" && classes.raisedSecondary,
    variant === "outlined" && classes.outlined,
    variant === "outlined" && color === "primary" && classes.outlinedPrimary,
    variant === "outlined" &&
      color === "secondary" &&
      classes.outlinedSecondary,
    size !== "medium" && classes[`size${capitalize(size)}`],
    disabled && classes.disabled,
    fullWidth && classes.fullWidth,
    color === "inherit" && classes.colorInherit,
    classNameProp
  );
  return (
    <ButtonBase
      className={className}
      disabled={disabled}
      focusRipple={!disableFocusRipple}
      focusVisibleClassName={classNames(
        classes.focusVisible,
        focusVisibleClassName
      )}
      {...other as any}
    >
      <span className={classes.label}>{children}</span>
    </ButtonBase>
  );
};

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<ButtonClassKey>,
  props: ButtonProps,
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Button.defaultProps = {
  color: 'default',
  component: 'button',
  disabled: false,
  disableFocusRipple: false,
  fullWidth: false,
  mini: false,
  size: 'medium',
  type: 'button',
  variant: 'text'
} as CodeProps;
export const ButtonCode: CodeComponentType = Button as any
export const ButtonStyles: SheetCreatorX = styles as any
export const ButtonCreator: WithStyleCreator = withStyles<Shape>(ButtonStyles, ButtonCode, {isMui:true, defaultProps});
export const ButtonComponent: React.ComponentType<PropsX> = ButtonCreator();
if ((Button as any).muiName) (ButtonComponent as any).muiName = (Button as any).muiName;


export default ButtonComponent
