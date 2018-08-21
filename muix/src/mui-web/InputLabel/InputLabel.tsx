//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme } from '../styles/withStyles';
// @inheritedComponent FormLabel
import React from "react";
import { classNames } from "reactxx-basic";
import FormLabel from "../FormLabel/FormLabel";
import { StandardProps } from "..";
import { FormLabelProps, FormLabelClassKey } from "../FormLabel/FormLabel";
import { ClassNameMap } from "../styles/withStyles";
export interface InputLabelProps
  extends StandardProps<FormLabelProps, InputLabelClassKey> {
  disableAnimation?: boolean;
  disabled?: boolean;
  error?: boolean;
  FormLabelClasses?: Partial<ClassNameMap<FormLabelClassKey>>;
  focused?: boolean;
  required?: boolean;
  shrink?: boolean;
}
export type InputLabelClassKey =
  | "root"
  | "formControl"
  | "marginDense"
  | "shrink"
  | "animated";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    transformOrigin: "top left"
  },

  /* Styles applied to the root element if the component is a descendant of `FormControl`. */
  formControl: {
    position: "absolute",
    left: 0,
    top: 0,
    // slight alteration to spec spacing to match visual spec result
    transform: "translate(0, 24px) scale(1)"
  },

  /* Styles applied to the root element if `margin="dense"`. */
  marginDense: {
    // Compensation for the `Input.inputDense` style.
    transform: "translate(0, 21px) scale(1)"
  },

  /* Styles applied to the `input` element if `shrink={true}`. */
  shrink: {
    transform: "translate(0, 1.5px) scale(0.75)",
    transformOrigin: "top left"
  },

  /* Styles applied to the `input` element if `disableAnimation={false}`. */
  animated: {
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    })
  }
});

function InputLabel(props, context) {
  const {
    $system: { theme },
    children,
    classes,
    className: classNameProp,
    disableAnimation,
    FormLabelClasses,
    margin: marginProp,
    shrink: shrinkProp,
    ...other
  } = props;
  const { muiFormControl } = context;
  let shrink = shrinkProp;

  if (typeof shrink === "undefined" && muiFormControl) {
    shrink =
      muiFormControl.filled ||
      muiFormControl.focused ||
      muiFormControl.adornedStart;
  }

  let margin = marginProp;

  if (typeof margin === "undefined" && muiFormControl) {
    margin = muiFormControl.margin;
  }

  const className = classNames(
    classes.root,
    muiFormControl && classes.formControl,
    !disableAnimation && classes.animated,
    margin === "dense" && classes.marginDense,
    shrink && classes.shrink,
    classNameProp
  );
  return (
    <FormLabel
      data-shrink={shrink}
      className={className}
      classes={FormLabelClasses}
      {...other}
    >
      {children}
    </FormLabel>
  );
}

InputLabel.contextTypes = {
  muiFormControl: PropTypes.object
};

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<InputLabelClassKey>,
  props: InputLabelProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = InputLabel.defaultProps = {
  disableAnimation: false
} as CodeProps;
export const InputLabelCode: CodeComponentType = InputLabel as any
export const InputLabelStyles: SheetCreatorX = styles as any
export const InputLabelCreator: WithStyleCreator = withStyles<Shape>(InputLabelStyles, InputLabelCode, {isMui:true, defaultProps});
export const InputLabelComponent: React.ComponentType<PropsX> = InputLabelCreator();
if ((InputLabel as any).muiName) (InputLabelComponent as any).muiName = (InputLabel as any).muiName;


export default InputLabel
