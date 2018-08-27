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
export interface CardMediaProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      CardMediaClassKey
    > {
  component?: React.ReactType<CardMediaProps>;
  image?: string;
  src?: string;
}
export type CardMediaClassKey = "root" | "media";
const styles = {
  /* Styles applied to the root element. */
  root: {
    display: "block",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },

  /* Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
  media: {
    width: "100%"
  }
};
const MEDIA_COMPONENTS = ["video", "audio", "picture", "iframe", "img"];

const CardMedia: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    classes,
    className,
    component: Component,
    image,
    src,
    style,
    ...other
  } = props;
  warning(
    Boolean(image || src),
    "Material-UI: either `image` or `src` property must be specified."
  );
  const isMediaComponent = MEDIA_COMPONENTS.indexOf(Component as any) !== -1;
  const composedStyle =
    !isMediaComponent && image
      ? {
          backgroundImage: `url("${image}")`,
          ...style
        }
      : style;
  return (
    <Component
      className={classNames(
        classes.root,
        isMediaComponent && classes.media,
        className
      )}
      style={composedStyle}
      src={isMediaComponent ? image || src : undefined}
      {...other as any}
    />
  );
};

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<CardMediaClassKey>,
  props: CardMediaProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = CardMedia.defaultProps = {
  component: 'div'
} as CodeProps;
export const CardMediaCode: CodeComponentType = CardMedia as any
export const CardMediaStyles: SheetCreatorX = styles as any
export const CardMediaCreator: WithStyleCreator = withStyles<Shape>(CardMediaStyles, CardMediaCode, {isMui:true, defaultProps});
export const CardMediaComponent: React.ComponentType<PropsX> = CardMediaCreator();
if ((CardMedia as any).muiName) (CardMediaComponent as any).muiName = (CardMedia as any).muiName;


export default CardMediaComponent
