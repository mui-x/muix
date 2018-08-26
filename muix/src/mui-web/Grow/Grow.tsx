//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
// @inheritedComponent Transition
import React from "react";
import PropTypes from "prop-types";
import Transition from "react-transition-group/Transition";
import { reflow, getTransitionProps } from "../transitions/utils";
import { Omit } from "..";
import { TransitionProps } from "../transitions/transition";
export interface GrowProps extends Omit<TransitionProps, "timeout"> {
  theme?: Theme;
  timeout?: TransitionProps["timeout"] | "auto";
}

function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}

const styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    // Use translateZ to scrolling issue on Chrome.
    transform: `${getScale(1)} translateZ(0)`
  }
};
/**
 * The Grow transition is used by the [Tooltip](/demos/tooltips) and
 * [Popover](/utils/popover) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

class Grow extends React.Component<CodeProps, any> {
  static defaultProps: CodeProps;
  static muiName;
  static displayName;
  static contextTypes;
  static childContextTypes;
  static muiSupportAuto;
  static options;
  autoTimeout = null;
  timer = null;

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleEnter = node => {
    const { theme, timeout } = this.props;
    reflow(node); // So the animation always start from the start.

    const { duration: transitionDuration, delay } = getTransitionProps(
      this.props,
      {
        mode: "enter"
      }
    );
    let duration = 0;

    if (timeout === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      this.autoTimeout = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [
      theme.transitions.create("opacity", {
        duration,
        delay
      }),
      theme.transitions.create("transform", {
        duration: duration * 0.666,
        delay
      })
    ].join(",");

    if (this.props.onEnter) {
      this.props.onEnter(node, false);
    }
  };
  handleExit = node => {
    const { theme, timeout } = this.props;
    let duration = 0;
    const { duration: transitionDuration, delay } = getTransitionProps(
      this.props,
      {
        mode: "exit"
      }
    );

    if (timeout === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      this.autoTimeout = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [
      theme.transitions.create("opacity", {
        duration,
        delay
      }),
      theme.transitions.create("transform", {
        duration: duration * 0.666,
        delay: delay || duration * 0.333
      })
    ].join(",");
    node.style.opacity = "0";
    node.style.transform = getScale(0.75);

    if (this.props.onExit) {
      this.props.onExit(node);
    }
  };
  addEndListener = (_, next) => {
    if (this.props.timeout === "auto") {
      this.timer = setTimeout(next, this.autoTimeout || 0);
    }
  };

  render() {
    const {
      $system: { theme },
      children,
      onEnter,
      onExit,
      style: styleProp,
      timeout,
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
        addEndListener={this.addEndListener}
        timeout={timeout === "auto" ? null : timeout}
        {...other as any}
      >
        {(state, childProps) => {
          return React.cloneElement(children as any, {
            style: {
              opacity: 0,
              transform: getScale(0.75),
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

Grow.muiSupportAuto = true;

export interface Shape extends Types.ShapeDefault {
  
  props: GrowProps,
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Grow.defaultProps = {
  timeout: 'auto'
} as CodeProps;
export const GrowCode: CodeComponentType = Grow as any
export const GrowStyles: SheetCreatorX = styles as any
export const GrowCreator: WithStyleCreator = withStyles<Shape>(GrowStyles, GrowCode, {isMui:true, defaultProps});
export const GrowComponent: React.ComponentClass<PropsX> = GrowCreator();
if ((Grow as any).muiName) (GrowComponent as any).muiName = (Grow as any).muiName;


export default GrowComponent
