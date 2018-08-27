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
export interface GridListTileBarProps
  extends StandardProps<{}, GridListTileBarClassKey> {
  actionIcon?: React.ReactNode;
  actionPosition?: "left" | "right";
  subtitle?: React.ReactNode;
  title?: React.ReactNode;
  titlePosition?: "top" | "bottom";
}
export type GridListTileBarClassKey =
  | "root"
  | "titlePositionBottom"
  | "titlePositionTop"
  | "rootSubtitle"
  | "titleWrapActionPosLeft"
  | "titleWrapActionPosRight"
  | "title"
  | "subtitle"
  | "actionIcon"
  | "actionIconActionPosLeft";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 48,
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    fontFamily: theme.typography.fontFamily
  },

  /* Styles applied to the root element if `titlePosition="bottom"`. */
  titlePositionBottom: {
    bottom: 0
  },

  /* Styles applied to the root element if `titlePosition="top"`. */
  titlePositionTop: {
    top: 0
  },

  /* Styles applied to the root element if a `subtitle` is provided. */
  rootSubtitle: {
    height: 68
  },

  /* Styles applied to the title and subtitle container element. */
  titleWrap: {
    flexGrow: 1,
    marginLeft: theme.mixins.gutters().paddingLeft,
    marginRight: theme.mixins.gutters().paddingRight,
    color: theme.palette.common.white,
    overflow: "hidden"
  },

  /* Styles applied to the container element if `actionPosition="left"`. */
  titleWrapActionPosLeft: {
    marginLeft: 0
  },

  /* Styles applied to the container element if `actionPosition="right"`. */
  titleWrapActionPosRight: {
    marginRight: 0
  },

  /* Styles applied to the title container element. */
  title: {
    fontSize: theme.typography.pxToRem(16),
    lineHeight: "24px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  },

  /* Styles applied to the subtitle container element. */
  subtitle: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  },

  /* Styles applied to the actionIcon if supplied. */
  actionIcon: {},

  /* Styles applied to the actionIcon if `actionPosition="left". */
  actionIconActionPosLeft: {
    order: -1
  }
});

const GridListTileBar: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    actionIcon,
    actionPosition,
    classes,
    className: classNameProp,
    subtitle,
    title,
    titlePosition,
    ...other
  } = props;
  const actionPos = actionIcon && actionPosition;
  const className = classNames(
    classes.root,
    titlePosition === "bottom" && classes.titlePositionBottom,
    titlePosition === "top" && classes.titlePositionTop,
    subtitle && classes.rootSubtitle,
    classNameProp
  ); // Remove the margin between the title / subtitle wrapper, and the Action Icon

  const titleWrapClassName = classNames(
    classes.titleWrap,
    actionPos === "left" && classes.titleWrapActionPosLeft,
    actionPos === "right" && classes.titleWrapActionPosRight
  );
  return (
    <div className={className} {...other as any}>
      <div className={titleWrapClassName}>
        <div className={classes.title}>{title}</div>
        {subtitle ? <div className={classes.subtitle}>{subtitle}</div> : null}
      </div>
      {actionIcon ? (
        <div
          className={classNames(
            classes.actionIcon,
            actionPos === "left" && classes.actionIconActionPosLeft
          )}
        >
          {actionIcon}
        </div>
      ) : null}
    </div>
  );
};

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<GridListTileBarClassKey>,
  props: GridListTileBarProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = GridListTileBar.defaultProps = {
  actionPosition: 'right',
  titlePosition: 'bottom'
} as CodeProps;
export const GridListTileBarCode: CodeComponentType = GridListTileBar as any
export const GridListTileBarStyles: SheetCreatorX = styles as any
export const GridListTileBarCreator: WithStyleCreator = withStyles<Shape>(GridListTileBarStyles, GridListTileBarCode, {isMui:true, defaultProps});
export const GridListTileBarComponent: React.ComponentType<PropsX> = GridListTileBarCreator();
if ((GridListTileBar as any).muiName) (GridListTileBarComponent as any).muiName = (GridListTileBar as any).muiName;


export default GridListTileBarComponent
