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
import warning from "warning";
import { StandardProps } from "..";
export interface BottomNavigationProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      BottomNavigationClassKey,
      "onChange"
    > {
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
  showLabels?: boolean;
  value?: any;
}
export type BottomNavigationClassKey = "root";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    justifyContent: "center",
    height: 56,
    backgroundColor: theme.palette.background.paper
  }
});

const BottomNavigation: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    children: childrenProp,
    classes,
    className: classNameProp,
    onChange,
    showLabels,
    value,
    ...other
  } = props;
  const className = classNames(classes.root, classNameProp);
  const children = React.Children.map(
    childrenProp,
    (child: any, childIndex) => {
      if (!(React as any).isValidElement(child)) {
        return null;
      }

      warning(
        child.type !== React.Fragment,
        [
          "Material-UI: the BottomNavigation component doesn't accept a Fragment as a child.",
          "Consider providing an array instead."
        ].join("\n")
      );
      const childValue =
        child.props.value === undefined ? childIndex : child.props.value;
      return React.cloneElement(child, {
        selected: childValue === value,
        showLabel:
          child.props.showLabel !== undefined
            ? child.props.showLabel
            : showLabels,
        value: childValue,
        onChange
      });
    }
  );
  return (
    <div className={className} {...other as any}>
      {children}
    </div>
  );
};

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<BottomNavigationClassKey>,
  props: BottomNavigationProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = BottomNavigation.defaultProps = {
  showLabels: false
} as CodeProps;
export const BottomNavigationCode: CodeComponentType = BottomNavigation as any
export const BottomNavigationStyles: SheetCreatorX = styles as any
export const BottomNavigationCreator: WithStyleCreator = withStyles<Shape>(BottomNavigationStyles, BottomNavigationCode, {isMui:true, defaultProps});
export const BottomNavigationComponent: React.ComponentType<PropsX> = BottomNavigationCreator();
if ((BottomNavigation as any).muiName) (BottomNavigationComponent as any).muiName = (BottomNavigation as any).muiName;


export default BottomNavigationComponent
