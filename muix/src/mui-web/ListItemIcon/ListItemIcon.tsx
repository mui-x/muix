//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme } from '../styles/withStyles';
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import { StandardProps } from "..";
export interface ListItemIconProps
  extends StandardProps<{}, ListItemIconClassKey> {
  children?: React.ReactElement<any>;
}
export type ListItemIconClassKey = "root";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    marginRight: 16,
    color: theme.palette.action.active,
    flexShrink: 0
  }
});
/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */

const ListItemIcon: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const { children, classes, className: classNameProp, ...other } = props;
  return React.cloneElement(children, {
    className: classNames(
      classes.root,
      classNameProp,
      children.props.className
    ),
    ...other
  });
};

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<ListItemIconClassKey>,
  props: ListItemIconProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = ListItemIcon.defaultProps = {} as CodeProps;
export const ListItemIconCode: CodeComponentType = ListItemIcon as any
export const ListItemIconStyles: SheetCreatorX = styles as any
export const ListItemIconCreator: WithStyleCreator = withStyles<Shape>(ListItemIconStyles, ListItemIconCode, {isMui:true, defaultProps});
export const ListItemIconComponent: React.ComponentType<PropsX> = ListItemIconCreator();
if ((ListItemIcon as any).muiName) (ListItemIconComponent as any).muiName = (ListItemIcon as any).muiName;


export default ListItemIcon
