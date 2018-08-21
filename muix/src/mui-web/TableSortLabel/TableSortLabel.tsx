//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme } from '../styles/withStyles';
// @inheritedComponent ButtonBase
import React from "react";
import { classNames } from "reactxx-basic";
import ArrowDownwardIcon from "../internal/svg-icons/ArrowDownward";
import ButtonBase from "../ButtonBase/ButtonBase";
import { capitalize } from "../utils/helpers";
import { StandardProps } from "..";
import { ButtonBaseProps } from "../ButtonBase/ButtonBase";
export interface TableSortLabelProps
  extends StandardProps<ButtonBaseProps, TableSortLabelClassKey> {
  active?: boolean;
  direction?: "asc" | "desc";
}
export type TableSortLabelClassKey =
  | "root"
  | "active"
  | "icon"
  | "iconDirectionDesc"
  | "iconDirectionAsc";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "flex-start",
    flexDirection: "inherit",
    alignItems: "center",
    "&:hover": {
      color: theme.palette.text.primary
    },
    "&:focus": {
      color: theme.palette.text.primary
    }
  },

  /* Styles applied to the root element if `active={true}`. */
  active: {
    color: theme.palette.text.primary,
    "& $icon": {
      opacity: 1
    }
  },

  /* Styles applied to the icon component. */
  icon: {
    height: 16,
    marginRight: 4,
    marginLeft: 4,
    opacity: 0,
    transition: theme.transitions.create(["opacity", "transform"], {
      duration: theme.transitions.duration.shorter
    }),
    userSelect: "none",
    width: 16
  },

  /* Styles applied to the icon component if `direction="desc"`. */
  iconDirectionDesc: {
    transform: "rotate(0deg)"
  },

  /* Styles applied to the icon component if `direction="asc"`. */
  iconDirectionAsc: {
    transform: "rotate(180deg)"
  }
});
/**
 * A button based label for placing inside `TableCell` for column sorting.
 */

const TableSortLabel: Types.CodeSFCWeb<Shape> = props => {
  const { active, classes, className, children, direction, ...other } = props;
  return (
    <ButtonBase
      className={classNames(classes.root, active && classes.active, className)}
      component="span"
      disableRipple
      {...other}
    >
      {children}
      <ArrowDownwardIcon
        className={classNames(
          classes.icon,
          classes[`iconDirection${capitalize(direction)}`]
        )}
      />
    </ButtonBase>
  );
};

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<TableSortLabelClassKey>,
  props: TableSortLabelProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = TableSortLabel.defaultProps = {
  active: false,
  direction: 'desc'
} as CodeProps;
export const TableSortLabelCode: CodeComponentType = TableSortLabel as any
export const TableSortLabelStyles: SheetCreatorX = styles as any
export const TableSortLabelCreator: WithStyleCreator = withStyles<Shape>(TableSortLabelStyles, TableSortLabelCode, {isMui:true, defaultProps});
export const TableSortLabelComponent: React.ComponentType<PropsX> = TableSortLabelCreator();
if ((TableSortLabel as any).muiName) (TableSortLabelComponent as any).muiName = (TableSortLabel as any).muiName;


export default TableSortLabel
