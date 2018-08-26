//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import { cloneChildrenWithClassName } from "../utils/reactHelpers";
import "../Button"; // So we don't have any override priority issue.

import { StandardProps } from "..";
export interface DialogActionsProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      DialogActionsClassKey
    > {
  disableActionSpacing?: boolean;
}
export type DialogActionsClassKey = "root" | "action";
const styles = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: "0 0 auto",
    margin: "8px 4px"
  },

  /* Styles applied to the children. */
  action: {
    margin: "0 4px"
  }
};

const DialogActions: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    disableActionSpacing,
    children,
    classes,
    className,
    ...other
  } = props;
  return (
    <div className={classNames(classes.root, className)} {...other as any}>
      {disableActionSpacing
        ? children
        : cloneChildrenWithClassName(children, classes.action)}
    </div>
  );
};

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<DialogActionsClassKey>,
  props: DialogActionsProps,
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = DialogActions.defaultProps = {
  disableActionSpacing: false
} as CodeProps;
export const DialogActionsCode: CodeComponentType = DialogActions as any
export const DialogActionsStyles: SheetCreatorX = styles as any
export const DialogActionsCreator: WithStyleCreator = withStyles<Shape>(DialogActionsStyles, DialogActionsCode, {isMui:true, defaultProps});
export const DialogActionsComponent: React.ComponentType<PropsX> = DialogActionsCreator();
if ((DialogActions as any).muiName) (DialogActionsComponent as any).muiName = (DialogActions as any).muiName;


export default DialogActionsComponent
