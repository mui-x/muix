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
import ButtonBase from "../ButtonBase/ButtonBase";
import { isMuiElement } from "../utils/reactHelpers";
import { StandardProps } from "..";
import { ButtonBaseProps } from "../ButtonBase/ButtonBase";
export interface ListItemProps
  extends StandardProps<
      ButtonBaseProps & React.LiHTMLAttributes<HTMLElement>,
      ListItemClassKey,
      "component"
    > {
  button?: boolean;
  component?: React.ReactType<ListItemProps>;
  ContainerComponent?: React.ReactType<React.HTMLAttributes<HTMLDivElement>>;
  ContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  dense?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  divider?: boolean;
  focusVisibleClassName?: string;
  selected?: boolean;
}
export type ListItemClassKey =
  | "root"
  | "container"
  | "focusVisible"
  | "default"
  | "dense"
  | "disabled"
  | "divider"
  | "gutters"
  | "button"
  | "secondaryAction"
  | "selected";

const styles = theme => ({
  /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
  root: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    width: "100%",
    boxSizing: "border-box",
    textAlign: "left",
    paddingTop: 12,
    paddingBottom: 12,
    "&$selected": {
      backgroundColor: theme.palette.action.selected
    }
  },

  /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
  container: {
    position: "relative"
  },
  // TODO: Sanity check this - why is focusVisibleClassName prop apparently applied to a div?

  /* Styles applied to the `component`'s `focusVisibleClassName` property if `button={true}`. */
  focusVisible: {
    backgroundColor: theme.palette.action.hover
  },

  /* Legacy styles applied to the root element. Use `root` instead. */
  default: {},

  /* Styles applied to the `component` element if `dense={true}` or `children` includes `Avatar`. */
  dense: {
    paddingTop: 8,
    paddingBottom: 8
  },

  /* Styles applied to the inner `component` element if `disabled={true}`. */
  disabled: {
    opacity: 0.5
  },

  /* Styles applied to the inner `component` element if `divider={true}`. */
  divider: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundClip: "padding-box"
  },

  /* Styles applied to the inner `component` element if `disableGutters={false}`. */
  gutters: theme.mixins.gutters(),

  /* Styles applied to the inner `component` element if `button={true}`. */
  button: {
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shortest
    }),
    "&:hover": {
      textDecoration: "none",
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }
  },

  /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
  secondaryAction: {
    // Add some space to avoid collision as `ListItemSecondaryAction`
    // is absolutely positionned.
    paddingRight: 32
  },

  /* Styles applied to the root element if `selected={true}`. */
  selected: {}
});

class ListItem extends React.Component<CodeProps, any> {
  static defaultProps: CodeProps;
  static muiName;
  static displayName;
  static contextTypes;
  static childContextTypes;
  static options;

  getChildContext() {
    return {
      dense: this.props.dense || this.context.dense || false
    };
  }

  render() {
    const {
      $system: { theme },
      button,
      children: childrenProp,
      classes,
      className: classNameProp,
      component: componentProp,
      ContainerComponent,
      ContainerProps: {
        className: ContainerClassName,
        ...ContainerProps
      } = {} as any,
      dense,
      disabled,
      disableGutters,
      divider,
      focusVisibleClassName,
      selected,
      ...other
    } = this.props;
    const isDense = dense || this.context.dense || false;
    const children = React.Children.toArray(childrenProp);
    const hasAvatar = children.some(value =>
      isMuiElement(value, ["ListItemAvatar"])
    );
    const hasSecondaryAction =
      children.length &&
      isMuiElement(children[children.length - 1], ["ListItemSecondaryAction"]);
    const className = classNames(
      classes.root,
      classes.default,
      (isDense || hasAvatar) && classes.dense,
      !disableGutters && classes.gutters,
      divider && classes.divider,
      disabled && classes.disabled,
      button && classes.button,
      hasSecondaryAction && classes.secondaryAction,
      selected && classes.selected,
      classNameProp
    );
    const componentProps: any = {
      className,
      disabled,
      ...other
    };
    let Component = componentProp || "li";

    if (button) {
      componentProps.component = componentProp || "div";
      componentProps.focusVisibleClassName = classNames(
        classes.focusVisible,
        focusVisibleClassName
      );
      Component = ButtonBase;
    }

    if (hasSecondaryAction) {
      // Use div by default.
      Component =
        !componentProps.component && !componentProp ? "div" : Component; // Avoid nesting of li > li.

      if (ContainerComponent === "li") {
        if (Component === "li") {
          Component = "div";
        } else if (componentProps.component === "li") {
          componentProps.component = "div";
        }
      }

      return (
        <ContainerComponent
          className={classNames(classes.container, ContainerClassName)}
          {...ContainerProps as any}
        >
          <Component {...componentProps as any}>{children}</Component>
          {children.pop()}
        </ContainerComponent>
      );
    }

    return <Component {...componentProps as any}>{children}</Component>;
  }
}

ListItem.contextTypes = {
  dense: PropTypes.bool
};
ListItem.childContextTypes = {
  dense: PropTypes.bool
};

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<ListItemClassKey>,
  props: ListItemProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = ListItem.defaultProps = {
  button: false,
  ContainerComponent: 'li',
  dense: false,
  disabled: false,
  disableGutters: false,
  divider: false,
  selected: false
} as CodeProps;
export const ListItemCode: CodeComponentType = ListItem as any
export const ListItemStyles: SheetCreatorX = styles as any
export const ListItemCreator: WithStyleCreator = withStyles<Shape>(ListItemStyles, ListItemCode, {isMui:true, defaultProps});
export const ListItemComponent: React.ComponentClass<PropsX> = ListItemCreator();
if ((ListItem as any).muiName) (ListItemComponent as any).muiName = (ListItem as any).muiName;


export default ListItemComponent
