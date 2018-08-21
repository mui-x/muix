//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme } from '../styles/withStyles';
import React from "react";
import KeyboardArrowLeft from "../internal/svg-icons/KeyboardArrowLeft";
import KeyboardArrowRight from "../internal/svg-icons/KeyboardArrowRight";
import IconButton from "../IconButton/IconButton";
import { StandardProps } from "..";
import { IconButtonProps } from "../IconButton/IconButton/IconButton";
export interface TablePaginationActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  backIconButtonProps?: Partial<IconButtonProps>;
  count: number;
  nextIconButtonProps?: Partial<IconButtonProps>;
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void;
  page: number;
  rowsPerPage: number;
}
/**
 * @ignore - internal component.
 */

class TablePaginationActions extends React.Component<CodeProps, any> {
  static defaultProps: CodeProps;
  static propTypes;
  static displayName;
  static contextTypes;
  static childContextTypes;
  static Naked;
  static options;
  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };
  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  render() {
    const {
      $system: { theme },
      backIconButtonProps,
      count,
      nextIconButtonProps,
      onChangePage,
      page,
      rowsPerPage,
      ...other
    } = this.props;
    return (
      <div {...other}>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          {...backIconButtonProps}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          {...nextIconButtonProps}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
      </div>
    );
  }
}

export type Shape = Types.OverwriteShape<{
  
  props: TablePaginationActionsProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = TablePaginationActions.defaultProps = {} as CodeProps;
export const TablePaginationActionsCode: CodeComponentType = TablePaginationActions as any
export const TablePaginationActionsStyles: SheetCreatorX = styles as any
export const TablePaginationActionsCreator: WithStyleCreator = withStyles<Shape>(TablePaginationActionsStyles, TablePaginationActionsCode, {isMui:true, defaultProps});
export const TablePaginationActionsComponent: React.ComponentClass<PropsX> = TablePaginationActionsCreator();
if ((TablePaginationActions as any).muiName) (TablePaginationActionsComponent as any).muiName = (TablePaginationActions as any).muiName;


export default TablePaginationActions
