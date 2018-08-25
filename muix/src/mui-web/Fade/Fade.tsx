//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme } from '../styles/withStyles';
// @inheritedComponent Transition
import React from "react";
import PropTypes from "prop-types";
import Transition from "react-transition-group/Transition";
import { duration } from "../styles/transitions";
import { reflow, getTransitionProps } from "../transitions/utils";
import { TransitionProps } from "../transitions/transition";
export interface FadeProps extends TransitionProps {
  theme?: Theme;
}
const styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
/**
 * The Fade transition is used by the [Modal](/utils/modal) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

class Fade extends React.Component<CodeProps, any> {
  static defaultProps: CodeProps;
  static muiName;
  static displayName;
  static contextTypes;
  static childContextTypes;
  static options;
  handleEnter = node => {
    const { theme } = this.props;
    reflow(node); // So the animation always start from the start.

    const transitionProps = getTransitionProps(this.props, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create(
      "opacity",
      transitionProps
    );
    node.style.transition = theme.transitions.create(
      "opacity",
      transitionProps
    );

    if (this.props.onEnter) {
      this.props.onEnter(node, false);
    }
  };
  handleExit = node => {
    const { theme } = this.props;
    const transitionProps = getTransitionProps(this.props, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create(
      "opacity",
      transitionProps
    );
    node.style.transition = theme.transitions.create(
      "opacity",
      transitionProps
    );

    if (this.props.onExit) {
      this.props.onExit(node);
    }
  };

  render() {
    const {
      $system: { theme },
      children,
      onEnter,
      onExit,
      style: styleProp,
      ...other
    } = this.props;
    const style = {
      ...styleProp,
      ...(React.isValidElement(children) ? (children as any).props.style : {})
    };
    return (
      <Transition
        appear
        onEnter={this.handleEnter}
        onExit={this.handleExit}
        {...other as any}
      >
        {(state, childProps) => {
          return React.cloneElement(children as any, {
            style: {
              opacity: 0,
              willChange: "opacity",
              ...styles[state],
              ...style
            },
            ...childProps
          });
        }}
      </Transition>
    );
  }
}

export type Shape = Types.OverwriteShape<{
  
  props: FadeProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Fade.defaultProps = {
  timeout: {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  }
} as CodeProps;
export const FadeCode: CodeComponentType = Fade as any
export const FadeStyles: SheetCreatorX = styles as any
export const FadeCreator: WithStyleCreator = withStyles<Shape>(FadeStyles, FadeCode, {isMui:true, defaultProps});
export const FadeComponent: React.ComponentClass<PropsX> = FadeCreator();
if ((Fade as any).muiName) (FadeComponent as any).muiName = (Fade as any).muiName;


export default Fade
