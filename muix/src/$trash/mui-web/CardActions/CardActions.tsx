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
import { cloneChildrenWithClassName } from "../utils/reactHelpers";
import "../Button/Button"; // So we don't have any override priority issue.

import { StandardProps } from "..";
export interface CardActionsProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      CardActionsClassKey
    > {
  disableActionSpacing?: boolean;
}
export type CardActionsClassKey = "root" | "action";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    $web: {
      display: "flex",
      alignItems: "center",
      boxSizing: "border-box",
      padding: "8px 4px",
      [theme.breakpoints.up("sm")]: {
        padding: "8px 12px"
      }
    }
  },

  /* Styles applied to the children. */
  action: {
    $web: {
      margin: "0 4px"
    }
  }
});

const CardActions: Types.CodeSFCWeb<Shape> & {
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
  common: TCommon.ShapeTexts<CardActionsClassKey>,
  props: CardActionsProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = CardActions.defaultProps = {
  disableActionSpacing: false
} as CodeProps;
export const CardActionsCode: CodeComponentType = CardActions as any
export const CardActionsStyles: SheetCreatorX = styles as any
export const CardActionsCreator: WithStyleCreator = withStyles<Shape>(CardActionsStyles, CardActionsCode, {isMui:true, defaultProps});
export const CardActionsComponent: React.ComponentType<PropsX> = CardActionsCreator();
if ((CardActions as any).muiName) (CardActionsComponent as any).muiName = (CardActions as any).muiName;


export default CardActionsComponent
