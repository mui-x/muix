//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme } from '../styles/withStyles';
import React from "react";
import { classNames } from "reactxx-basic";
import { cloneChildrenWithClassName } from "../utils/reactHelpers";
import "../Button"; // So we don't have any override priority issue.

import { StandardProps } from "..";
export interface ExpansionPanelActionsProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      ExpansionPanelActionsClassKey
    > {}
export type ExpansionPanelActionsClassKey = "root" | "action";
const styles = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "16px 8px"
  },

  /* Styles applied to the children. */
  action: {
    marginLeft: 8
  }
};

const ExpansionPanelActions: Types.CodeSFCWeb<Shape> = props => {
  const { children, classes, className, ...other } = props;
  return (
    <div className={classNames(classes.root, className)} {...other}>
      {cloneChildrenWithClassName(children, classes.action)}
    </div>
  );
};

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<ExpansionPanelActionsClassKey>,
  props: ExpansionPanelActionsProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = ExpansionPanelActions.defaultProps = {} as CodeProps;
export const ExpansionPanelActionsCode: CodeComponentType = ExpansionPanelActions as any
export const ExpansionPanelActionsStyles: SheetCreatorX = styles as any
export const ExpansionPanelActionsCreator: WithStyleCreator = withStyles<Shape>(ExpansionPanelActionsStyles, ExpansionPanelActionsCode, {isMui:true, defaultProps});
export const ExpansionPanelActionsComponent: React.ComponentType<PropsX> = ExpansionPanelActionsCreator();
if ((ExpansionPanelActions as any).muiName) (ExpansionPanelActionsComponent as any).muiName = (ExpansionPanelActions as any).muiName;


export default ExpansionPanelActions
