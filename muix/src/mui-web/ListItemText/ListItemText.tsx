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
import Typography from "../Typography/Typography";
import { StandardProps } from "..";
import { TypographyProps } from "../Typography/Typography";
export interface ListItemTextProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      ListItemTextClassKey
    > {
  disableTypography?: boolean;
  inset?: boolean;
  primary?: React.ReactNode;
  primaryTypographyProps?: Partial<TypographyProps>;
  secondary?: React.ReactNode;
  secondaryTypographyProps?: Partial<TypographyProps>;
}
export type ListItemTextClassKey =
  | "root"
  | "inset"
  | "dense"
  | "primary"
  | "secondary"
  | "textDense";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    flex: "1 1 auto",
    minWidth: 0,
    padding: "0 16px",
    "&:first-child": {
      paddingLeft: 0
    }
  },

  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    "&:first-child": {
      paddingLeft: 56
    }
  },

  /* Styles applied to the root element if `context.dense` is `true`. */
  dense: {
    fontSize: theme.typography.pxToRem(13)
  },

  /* Styles applied to the primary `Typography` component. */
  primary: {
    "&$textDense": {
      fontSize: "inherit"
    }
  },

  /* Styles applied to the secondary `Typography` component. */
  secondary: {
    "&$textDense": {
      fontSize: "inherit"
    }
  },

  /* Styles applied to the `Typography` components if `context.dense` is `true`. */
  textDense: {}
});

const ListItemText: Types.CodeSFCWeb<Shape> = (props, context) => {
  const {
    children,
    classes,
    className: classNameProp,
    disableTypography,
    inset,
    primary: primaryProp,
    primaryTypographyProps,
    secondary: secondaryProp,
    secondaryTypographyProps,
    ...other
  } = props;
  const { dense } = context;
  let primary = primaryProp != null ? primaryProp : children;

  if (
    primary != null &&
    (primary as any).type !== Typography &&
    !disableTypography
  ) {
    primary = (
      <Typography
        variant="subheading"
        className={classNames(classes.primary, dense && classes.textDense)}
        component="span"
        {...primaryTypographyProps as any}
      >
        {primary}
      </Typography>
    );
  }

  let secondary: any = secondaryProp;

  if (
    secondary != null &&
    secondary.type !== Typography &&
    !disableTypography
  ) {
    secondary = (
      <Typography
        variant="body1"
        className={classNames(classes.secondary, dense && classes.textDense)}
        color="textSecondary"
        {...secondaryTypographyProps as any}
      >
        {secondary}
      </Typography>
    );
  }

  return (
    <div
      className={classNames(
        classes.root,
        dense && classes.dense,
        inset && classes.inset,
        classNameProp
      )}
      {...other as any}
    >
      {primary}
      {secondary}
    </div>
  );
};

ListItemText.contextTypes = {
  dense: PropTypes.bool
};

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<ListItemTextClassKey>,
  props: ListItemTextProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = ListItemText.defaultProps = {
  disableTypography: false,
  inset: false
} as CodeProps;
export const ListItemTextCode: CodeComponentType = ListItemText as any
export const ListItemTextStyles: SheetCreatorX = styles as any
export const ListItemTextCreator: WithStyleCreator = withStyles<Shape>(ListItemTextStyles, ListItemTextCode, {isMui:true, defaultProps});
export const ListItemTextComponent: React.ComponentType<PropsX> = ListItemTextCreator();
if ((ListItemText as any).muiName) (ListItemTextComponent as any).muiName = (ListItemText as any).muiName;


export default ListItemText
