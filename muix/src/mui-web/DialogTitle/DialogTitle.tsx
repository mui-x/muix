//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import Typography from "../Typography/Typography";
import { StandardProps } from "..";
export interface DialogTitleProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      DialogTitleClassKey
    > {
  disableTypography?: boolean;
}
export type DialogTitleClassKey = "root";
const styles = {
  /* Styles applied to the root element. */
  root: {
    margin: 0,
    padding: "24px 24px 20px",
    flex: "0 0 auto"
  }
};

const DialogTitle: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const { children, classes, className, disableTypography, ...other } = props;
  return (
    <div className={classNames(classes.root, className)} {...other as any}>
      {disableTypography ? (
        children
      ) : (
        <Typography variant="title">{children}</Typography>
      )}
    </div>
  );
};

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<DialogTitleClassKey>,
  props: DialogTitleProps,
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = DialogTitle.defaultProps = {
  disableTypography: false
} as CodeProps;
export const DialogTitleCode: CodeComponentType = DialogTitle as any
export const DialogTitleStyles: SheetCreatorX = styles as any
export const DialogTitleCreator: WithStyleCreator = withStyles<Shape>(DialogTitleStyles, DialogTitleCode, {isMui:true, defaultProps});
export const DialogTitleComponent: React.ComponentType<PropsX> = DialogTitleCreator();
if ((DialogTitle as any).muiName) (DialogTitleComponent as any).muiName = (DialogTitle as any).muiName;


export default DialogTitleComponent
