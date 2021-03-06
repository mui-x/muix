//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import { StandardProps } from "..";
export interface FormLabelProps
  extends StandardProps<FormLabelBaseProps, FormLabelClassKey> {
  component?: React.ReactType<FormLabelBaseProps>;
  disabled?: boolean;
  error?: boolean;
  filled?: boolean;
  focused?: boolean;
  required?: boolean;
}
export type FormLabelBaseProps = React.LabelHTMLAttributes<HTMLLabelElement>;
export type FormLabelClassKey =
  | "root"
  | "focused"
  | "disabled"
  | "error"
  | "filled"
  | "required"
  | "asterisk";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    $web: {
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: 1,
      padding: 0,
      "&.focused37": {
        color:
          theme.palette.primary[
            theme.palette.type === "light" ? "dark" : "light"
          ]
      },
      "&.disabled37": {
        color: theme.palette.text.disabled
      },
      "&.error37": {
        color: theme.palette.error.main
      }
    }
  },

  /* Styles applied to the root element if `focused={true}`. */
  focused: {
    $web: {
      NAME$focused37: true
    }
  },

  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {
    $web: {
      NAME$disabled37: true
    }
  },

  /* Styles applied to the root element if `error={true}`. */
  error: {
    $web: {
      NAME$error37: true
    }
  },

  /* Styles applied to the root element if `filled={true}`. */
  filled: {
    $web: {}
  },

  /* Styles applied to the root element if `required={true}`. */
  required: {
    $web: {}
  },
  asterisk: {
    $web: {
      "&.error37": {
        color: theme.palette.error.main
      }
    }
  }
});

const FormLabel: Types.CodeSFCWeb<Shape> = (props, context) => {
  const {
    children,
    classes,
    className: classNameProp,
    component: Component,
    disabled: disabledProp,
    error: errorProp,
    filled: filledProp,
    focused: focusedProp,
    required: requiredProp,
    ...other
  } = props;
  const { muiFormControl } = context;
  let disabled = disabledProp;
  let error = errorProp;
  let filled = filledProp;
  let focused = focusedProp;
  let required = requiredProp;

  if (muiFormControl) {
    if (typeof required === "undefined") {
      required = muiFormControl.required;
    }

    if (typeof focused === "undefined") {
      focused = muiFormControl.focused;
    }

    if (typeof disabled === "undefined") {
      disabled = muiFormControl.disabled;
    }

    if (typeof error === "undefined") {
      error = muiFormControl.error;
    }

    if (typeof filled === "undefined") {
      filled = muiFormControl.filled;
    }
  }

  const className = classNames(
    classes.root,
    disabled && classes.disabled,
    error && classes.error,
    filled && classes.filled,
    focused && classes.focused,
    required && classes.required,
    classNameProp
  );
  return (
    <Component className={className} {...other as any}>
      {children}
      {required && (
        <span
          className={classNames(classes.asterisk, error && classes.error)}
          data-mui-test="FormLabelAsterisk"
        >
          {"\u2009*"}
        </span>
      )}
    </Component>
  );
};

FormLabel.contextTypes = {
  muiFormControl: PropTypes.object
};

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<FormLabelClassKey>,
  props: FormLabelProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = FormLabel.defaultProps = {
  component: 'label'
} as CodeProps;
export const FormLabelCode: CodeComponentType = FormLabel as any
export const FormLabelStyles: SheetCreatorX = styles as any
export const FormLabelCreator: WithStyleCreator = withStyles<Shape>(FormLabelStyles, FormLabelCode, {isMui:true, defaultProps});
export const FormLabelComponent: React.ComponentType<PropsX> = FormLabelCreator();
if ((FormLabel as any).muiName) (FormLabelComponent as any).muiName = (FormLabel as any).muiName;


export default FormLabelComponent
