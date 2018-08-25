//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme } from '../styles/withStyles';
// @inheritedComponent Paper
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import Paper from "../Paper/Paper";
import { StandardProps } from "..";
import { PaperProps } from "../Paper/Paper";
export interface CardProps extends StandardProps<PaperProps, CardClassKey> {
  raised?: boolean;
}
export type CardClassKey = "root";
const styles = {
  /* Styles applied to the root element. */
  root: {
    overflow: "hidden"
  }
};

const Card: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const { classes, className, raised, ...other } = props;
  return (
    <Paper
      className={classNames(classes.root, className)}
      elevation={raised ? 8 : 1}
      {...other as any}
    />
  );
};

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<CardClassKey>,
  props: CardProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Card.defaultProps = {
  raised: false
} as CodeProps;
export const CardCode: CodeComponentType = Card as any
export const CardStyles: SheetCreatorX = styles as any
export const CardCreator: WithStyleCreator = withStyles<Shape>(CardStyles, CardCode, {isMui:true, defaultProps});
export const CardComponent: React.ComponentType<PropsX> = CardCreator();
if ((Card as any).muiName) (CardComponent as any).muiName = (Card as any).muiName;


export default Card
