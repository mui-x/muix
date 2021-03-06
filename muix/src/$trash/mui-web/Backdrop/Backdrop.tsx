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
import Fade from "../Fade/Fade";
import { StandardProps } from "..";
import { FadeProps } from "../Fade/Fade";
import { TransitionProps } from "../transitions/transition";
export interface BackdropProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement> & Partial<FadeProps>,
      BackdropClassKey
    > {
  invisible?: boolean;
  onClick?: React.ReactEventHandler<{}>;
  open: boolean;
  transitionDuration?: TransitionProps["timeout"];
}
export type BackdropClassKey = "root" | "invisible";
const styles = {
  /* Styles applied to the root element. */
  root: {
    $web: {
      zIndex: -1,
      position: "fixed",
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      // Remove grey highlight
      WebkitTapHighlightColor: "transparent",
      // Disable scroll capabilities.
      touchAction: "none"
    }
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    $web: {
      backgroundColor: "transparent"
    }
  }
};

const Backdrop: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    classes,
    className,
    invisible,
    open,
    transitionDuration,
    ...other
  } = props;
  return (
    <Fade appear in={open} timeout={transitionDuration} {...other as any}>
      <div
        data-mui-test="Backdrop"
        className={classNames(
          classes.root,
          invisible && classes.invisible,
          className
        )}
        aria-hidden="true"
      />
    </Fade>
  );
};

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<BackdropClassKey>,
  props: BackdropProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Backdrop.defaultProps = {
  invisible: false
} as CodeProps;
export const BackdropCode: CodeComponentType = Backdrop as any
export const BackdropStyles: SheetCreatorX = styles as any
export const BackdropCreator: WithStyleCreator = withStyles<Shape>(BackdropStyles, BackdropCode, {isMui:true, defaultProps});
export const BackdropComponent: React.ComponentType<PropsX> = BackdropCreator();
if ((Backdrop as any).muiName) (BackdropComponent as any).muiName = (Backdrop as any).muiName;


export default BackdropComponent
