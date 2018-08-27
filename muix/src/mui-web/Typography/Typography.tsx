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
import { capitalize } from "../utils/helpers";
import { StandardProps, PropTypes as muiPropTypes } from "..";
import { Style, TextStyle } from "../styles/createTypography";
export interface TypographyProps
  extends StandardProps<React.HTMLAttributes<HTMLElement>, TypographyClassKey> {
  align?: muiPropTypes.Alignment;
  color?: muiPropTypes.Color | "textPrimary" | "textSecondary" | "error";
  component?: React.ReactType<TypographyProps>;
  gutterBottom?: boolean;
  headlineMapping?: { [type in TextStyle]: string };
  noWrap?: boolean;
  paragraph?: boolean;
  variant?: Style | "caption" | "button";
}
export type TypographyClassKey =
  | "root"
  | "display4"
  | "display3"
  | "display2"
  | "display1"
  | "headline"
  | "title"
  | "subheading"
  | "body2"
  | "body1"
  | "caption"
  | "button"
  | "alignLeft"
  | "alignCenter"
  | "alignRight"
  | "alignJustify"
  | "noWrap"
  | "gutterBottom"
  | "paragraph"
  | "colorInherit"
  | "colorSecondary"
  | "colorTextSecondary";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: "block",
    margin: 0
  },

  /* Styles applied to the root element if `variant="display4"`. */
  display4: theme.typography.display4,

  /* Styles applied to the root element if `variant="display3"`. */
  display3: theme.typography.display3,

  /* Styles applied to the root element if `variant="display2"`. */
  display2: theme.typography.display2,

  /* Styles applied to the root element if `variant="display1"`. */
  display1: theme.typography.display1,

  /* Styles applied to the root element if `variant="headline"`. */
  headline: theme.typography.headline,

  /* Styles applied to the root element if `variant="title"`. */
  title: theme.typography.title,

  /* Styles applied to the root element if `variant="subheading"`. */
  subheading: theme.typography.subheading,

  /* Styles applied to the root element if `variant="body2"`. */
  body2: theme.typography.body2,

  /* Styles applied to the root element if `variant="body1"`. */
  body1: theme.typography.body1,

  /* Styles applied to the root element if `variant="caption"`. */
  caption: theme.typography.caption,

  /* Styles applied to the root element if `variant="button"`. */
  button: theme.typography.button,

  /* Styles applied to the root element if `align="left"`. */
  alignLeft: {
    textAlign: "left"
  },

  /* Styles applied to the root element if `align="center"`. */
  alignCenter: {
    textAlign: "center"
  },

  /* Styles applied to the root element if `align="right"`. */
  alignRight: {
    textAlign: "right"
  },

  /* Styles applied to the root element if `align="justify"`. */
  alignJustify: {
    textAlign: "justify"
  },

  /* Styles applied to the root element if `align="nowrap"`. */
  noWrap: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },

  /* Styles applied to the root element if `gutterBottom={true}`. */
  gutterBottom: {
    marginBottom: "0.35em"
  },

  /* Styles applied to the root element if `paragraph={true}`. */
  paragraph: {
    marginBottom: 16
  },

  /* Styles applied to the root element if `color="inherit"`. */
  colorInherit: {
    color: "inherit"
  },

  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    color: theme.palette.primary.main
  },

  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    color: theme.palette.secondary.main
  },

  /* Styles applied to the root element if `color="textPrimary"`. */
  colorTextPrimary: {
    color: theme.palette.text.primary
  },

  /* Styles applied to the root element if `color="textSecondary"`. */
  colorTextSecondary: {
    color: theme.palette.text.secondary
  },

  /* Styles applied to the root element if `color="error"`. */
  colorError: {
    color: theme.palette.error.main
  }
});

const Typography: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    align,
    classes,
    className: classNameProp,
    color,
    component: componentProp,
    gutterBottom,
    headlineMapping,
    noWrap,
    paragraph,
    variant,
    ...other
  } = props;
  const className = classNames(
    classes.root,
    classes[variant],
    color !== "default" && classes[`color${capitalize(color)}`],
    noWrap && classes.noWrap,
    gutterBottom && classes.gutterBottom,
    paragraph && classes.paragraph,
    align !== "inherit" && classes[`align${capitalize(align)}`],
    classNameProp
  );
  const Component =
    componentProp || (paragraph ? "p" : headlineMapping[variant]) || "span";
  return <Component className={className} {...other as any} />;
};

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<TypographyClassKey>,
  props: TypographyProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Typography.defaultProps = {
  align: 'inherit',
  color: 'default',
  gutterBottom: false,
  headlineMapping: {
    display4: 'h1',
    display3: 'h1',
    display2: 'h1',
    display1: 'h1',
    headline: 'h1',
    title: 'h2',
    subheading: 'h3',
    body2: 'aside',
    body1: 'p'
  },
  noWrap: false,
  paragraph: false,
  variant: 'body1'
} as CodeProps;
export const TypographyCode: CodeComponentType = Typography as any
export const TypographyStyles: SheetCreatorX = styles as any
export const TypographyCreator: WithStyleCreator = withStyles<Shape>(TypographyStyles, TypographyCode, {isMui:true, defaultProps});
export const TypographyComponent: React.ComponentType<PropsX> = TypographyCreator();
if ((Typography as any).muiName) (TypographyComponent as any).muiName = (Typography as any).muiName;


export default TypographyComponent
