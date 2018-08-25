//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme } from '../styles/withStyles';
import React from "react";
import { fitPatch } from "./GridListTilePatch";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import EventListener from "react-event-listener";
import debounce from "debounce"; // < 1kb payload overhead when lodash/debounce is > 3kb.

import { StandardProps } from "..";
export interface GridListTileProps
  extends StandardProps<
      React.HTMLAttributes<HTMLLIElement>,
      GridListTileClassKey
    > {
  cols?: number;
  component?: React.ReactType<GridListTileProps>;
  rows?: number;
}
export type GridListTileClassKey =
  | "root"
  | "tile"
  | "imgFullHeight"
  | "imgFullWidth";
const styles = {
  /* Styles applied to the root element. */
  root: {
    boxSizing: "border-box",
    flexShrink: 0
  },

  /* Styles applied to the `div` element that wraps the children. */
  tile: {
    position: "relative",
    display: "block",
    // In case it's not rendered with a div.
    height: "100%",
    overflow: "hidden"
  },

  /* Styles applied to an `ing` element child, if if needed to ensure it covers the tile. */
  imgFullHeight: {
    height: "100%",
    transform: "translateX(-50%)",
    position: "relative",
    left: "50%"
  },

  /* Styles applied to an `ing` element child, if if needed to ensure it covers the tile. */
  imgFullWidth: {
    width: "100%",
    position: "relative",
    transform: "translateY(-50%)",
    top: "50%"
  }
};

class GridListTile extends React.Component<CodeProps, any> {
  static defaultProps: CodeProps;
  static muiName;
  static displayName;
  static contextTypes;
  static childContextTypes;
  static options;
  imgElement = null;
  handleResize = debounce(() => {
    this.fit();
  }, 166); // Corresponds to 10 frames at 60 Hz.

  componentDidMount() {
    this.ensureImageCover();
  }

  componentDidUpdate() {
    this.ensureImageCover();
  }

  componentWillUnmount() {
    this.handleResize.clear();
  }

  fit = fitPatch.bind(this);
  fit_ = () => {
    const imgElement = this.imgElement;

    if (!imgElement || !imgElement.complete) {
      return;
    }

    if (
      imgElement.width / imgElement.height >
      imgElement.parentNode.offsetWidth / imgElement.parentNode.offsetHeight
    ) {
      imgElement.classList.remove(
        ...this.props.classes.imgFullWidth.split(" ")
      );
      imgElement.classList.add(...this.props.classes.imgFullHeight.split(" "));
    } else {
      imgElement.classList.remove(
        ...this.props.classes.imgFullHeight.split(" ")
      );
      imgElement.classList.add(...this.props.classes.imgFullWidth.split(" "));
    }

    imgElement.removeEventListener("load", this.fit);
  };

  ensureImageCover() {
    if (!this.imgElement) {
      return;
    }

    if (this.imgElement.complete) {
      this.fit();
    } else {
      this.imgElement.addEventListener("load", this.fit);
    }
  }

  render() {
    const {
      $system: { theme },
      children,
      classes,
      className,
      cols,
      component: Component,
      rows,
      ...other
    } = this.props;
    return (
      <Component
        className={classNames(classes.root, className)}
        {...other as any}
      >
        <EventListener target="window" onResize={this.handleResize} />
        <div className={classes.tile}>
          {React.Children.map(children, (child: React.ReactElement<any>) => {
            if (!React.isValidElement(child)) {
              return null;
            }

            if (child.type === "img") {
              return React.cloneElement(child as any, {
                ref: node => {
                  this.imgElement = node;
                }
              });
            }

            return child;
          })}
        </div>
      </Component>
    );
  }
}

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<GridListTileClassKey>,
  props: GridListTileProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = GridListTile.defaultProps = {
  cols: 1,
  component: 'li',
  rows: 1
} as CodeProps;
export const GridListTileCode: CodeComponentType = GridListTile as any
export const GridListTileStyles: SheetCreatorX = styles as any
export const GridListTileCreator: WithStyleCreator = withStyles<Shape>(GridListTileStyles, GridListTileCode, {isMui:true, defaultProps});
export const GridListTileComponent: React.ComponentClass<PropsX> = GridListTileCreator();
if ((GridListTile as any).muiName) (GridListTileComponent as any).muiName = (GridListTile as any).muiName;


export default GridListTile
