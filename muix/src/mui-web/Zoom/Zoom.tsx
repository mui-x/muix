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
import Transition from "react-transition-group/Transition";
import { duration } from "../styles/transitions";
import { reflow, getTransitionProps } from "../transitions/utils";
import { TransitionProps } from "../transitions/transition";
export interface ZoomProps extends TransitionProps {
  theme?: Theme;
}
const styles = {
  entering: {
    transform: "scale(1)"
  },
  entered: {
    transform: "scale(1)"
  }
};
/**
 * The Zoom transition can be used for the floating variant of the
 * [Button](https://material-ui.com/demos/buttons/#floating-action-buttons) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

class Zoom extends React.Component<CodeProps, any> {
  static defaultProps: CodeProps;
  static propTypes;
  static displayName;
  static contextTypes;
  static childContextTypes;
  static Naked;
  static options;
  handleEnter = node => {
    const { theme } = this.props;
    reflow(node); // So the animation always start from the start.

    const transitionProps = getTransitionProps(this.props, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create(
      "transform",
      transitionProps
    );
    node.style.transition = theme.transitions.create(
      "transform",
      transitionProps
    );

    if (this.props.onEnter) {
      (this.props as any).onEnter(node);
    }
  };
  handleExit = node => {
    const { theme } = this.props;
    const transitionProps = getTransitionProps(this.props, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create(
      "transform",
      transitionProps
    );
    node.style.transition = theme.transitions.create(
      "transform",
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
      ...(React.isValidElement(children) ? (children.props as any).style : {})
    };
    return (
      <Transition
        appear
        onEnter={this.handleEnter}
        onExit={this.handleExit}
        timeout={null}
        {...other}
      >
        {(state, childProps) => {
          return React.cloneElement(children as any, {
            style: {
              transform: "scale(0)",
              willChange: "transform",
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
  
  props: ZoomProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Zoom.defaultProps = {
  timeout: {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  }
} as CodeProps;
export const ZoomCode: CodeComponentType = Zoom as any
export const ZoomStyles: SheetCreatorX = styles as any
export const ZoomCreator: WithStyleCreator = withStyles<Shape>(ZoomStyles, ZoomCode, {isMui:true, defaultProps});
export const ZoomComponent: React.ComponentClass<PropsX> = ZoomCreator();
if ((Zoom as any).muiName) (ZoomComponent as any).muiName = (Zoom as any).muiName;


export default Zoom
