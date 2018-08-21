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
import { StandardProps } from "..";
export interface TableProps
  extends StandardProps<TableBaseProps, TableClassKey> {
  component?: React.ReactType<TableBaseProps>;
}
export type TableBaseProps = React.TableHTMLAttributes<HTMLTableElement>;
export type TableClassKey = "root";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: "table",
    fontFamily: theme.typography.fontFamily,
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0
  }
});

class Table extends React.Component<CodeProps, any> {
  static defaultProps: CodeProps;
  static propTypes;
  static displayName;
  static contextTypes;
  static childContextTypes;
  static Naked;
  static options;

  getChildContext() {
    // eslint-disable-line class-methods-use-this
    return {
      table: {
        padding: this.props.padding
      }
    };
  }

  render() {
    const {
      $system: { theme },
      classes,
      className,
      component: Component,
      ...other
    } = this.props;
    return (
      <Component className={classNames(classes.root, className)} {...other} />
    );
  }
}

Table.childContextTypes = {
  table: PropTypes.object
};

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<TableClassKey>,
  props: TableProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Table.defaultProps = {
  component: 'table',
  padding: 'default'
} as CodeProps;
export const TableCode: CodeComponentType = Table as any
export const TableStyles: SheetCreatorX = styles as any
export const TableCreator: WithStyleCreator = withStyles<Shape>(TableStyles, TableCode, {isMui:true, defaultProps});
export const TableComponent: React.ComponentClass<PropsX> = TableCreator();
if ((Table as any).muiName) (TableComponent as any).muiName = (Table as any).muiName;


export default Table
