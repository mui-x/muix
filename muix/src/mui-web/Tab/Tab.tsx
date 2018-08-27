//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
// @inheritedComponent ButtonBase
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import ButtonBase from "../ButtonBase/ButtonBase";
import { capitalize } from "../utils/helpers";
import unsupportedProp from "../utils/unsupportedProp";
import { StandardProps } from "..";
import { ButtonBaseProps } from "../ButtonBase/ButtonBase";
export interface TabProps
  extends StandardProps<ButtonBaseProps, TabClassKey, "onChange"> {
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: string | React.ReactElement<any>;
  value?: any;
  label?: React.ReactNode;
  onChange?: (
    event: React.ChangeEvent<{
      checked: boolean;
    }>,
    value: any
  ) => void;
  onClick?: React.EventHandler<any>;
  selected?: boolean;
  style?: React.CSSProperties;
  textColor?: string | "secondary" | "primary" | "inherit";
}
export type TabClassKey =
  | "root"
  | "labelIcon"
  | "textColorInherit"
  | "textColorPrimary"
  | "textColorSecondary"
  | "selected"
  | "disabled"
  | "fullWidth"
  | "wrapper"
  | "labelContainer"
  | "label"
  | "labelWrapped";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    ...theme.typography.button,
    maxWidth: 264,
    position: "relative",
    minWidth: 72,
    padding: 0,
    minHeight: 48,
    flexShrink: 0,
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      minWidth: 160
    }
  },

  /* Styles applied to the root element if both `icon` and `label` are provided. */
  labelIcon: {
    minHeight: 72
  },

  /* Styles applied to the root element if `textColor="inherit"`. */
  textColorInherit: {
    color: "inherit",
    opacity: 0.7,
    "&$selected": {
      opacity: 1
    },
    "&$disabled": {
      opacity: 0.4
    }
  },

  /* Styles applied to the root element if `textColor="primary"`. */
  textColorPrimary: {
    color: theme.palette.text.secondary,
    "&$selected": {
      color: theme.palette.primary.main
    },
    "&$disabled": {
      color: theme.palette.text.disabled
    }
  },

  /* Styles applied to the root element if `textColor="secondary"`. */
  textColorSecondary: {
    color: theme.palette.text.secondary,
    "&$selected": {
      color: theme.palette.secondary.main
    },
    "&$disabled": {
      color: theme.palette.text.disabled
    }
  },

  /* Styles applied to the root element if `selected={true}` (controlled by the Tabs component). */
  selected: {},

  /* Styles applied to the root element if `disabled={true}` (controlled by the Tabs component). */
  disabled: {},

  /* Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
  fullWidth: {
    flexShrink: 1,
    flexGrow: 1,
    maxWidth: "none"
  },

  /* Styles applied to the `icon` and `label`'s wrapper element. */
  wrapper: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "column"
  },

  /* Styles applied to the label container element if `label` is provided. */
  labelContainer: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 24,
      paddingRight: 24
    }
  },

  /* Styles applied to the label wrapper element if `label` is provided. */
  label: {
    fontSize: theme.typography.pxToRem(14),
    whiteSpace: "normal",
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.pxToRem(13)
    }
  },

  /* Styles applied to the label wrapper element if `label` is provided and the text is wrapped. */
  labelWrapped: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(12)
    }
  }
});

class Tab extends React.Component<CodeProps, any> {
  static defaultProps: CodeProps;
  static muiName;
  static displayName;
  static contextTypes;
  static childContextTypes;
  labelRef;
  static options;
  label = null;
  state: any = {
    labelWrapped: false
  };

  componentDidMount() {
    this.checkTextWrap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.labelWrapped === prevState.labelWrapped) {
      /**
       * At certain text and tab lengths, a larger font size may wrap to two lines while the smaller
       * font size still only requires one line.  This check will prevent an infinite render loop
       * fron occurring in that scenario.
       */
      this.checkTextWrap();
    }
  }

  handleChange = event => {
    const { onChange, value, onClick } = this.props;

    if (onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };
  checkTextWrap = () => {
    if (this.labelRef) {
      const labelWrapped = this.labelRef.getClientRects().length > 1;

      if (this.state.labelWrapped !== labelWrapped) {
        this.setState({
          labelWrapped
        });
      }
    }
  };

  render() {
    const {
      $system: { theme },
      classes,
      className: classNameProp,
      disabled,
      fullWidth,
      icon,
      indicator,
      label: labelProp,
      onChange,
      selected,
      textColor,
      value,
      ...other
    } = this.props;
    let label;

    if (labelProp !== undefined) {
      label = (
        <span className={classes.labelContainer}>
          <span
            className={classNames(
              classes.label,
              this.state.labelWrapped && classes.labelWrapped
            )}
            ref={ref => {
              this.labelRef = ref;
            }}
          >
            {labelProp}
          </span>
        </span>
      );
    }

    const className = classNames(
      classes.root,
      classes[`textColor${capitalize(textColor)}`],
      disabled && classes.disabled,
      selected && classes.selected,
      icon && label && classes.labelIcon,
      fullWidth && classes.fullWidth,
      classNameProp
    );
    return (
      <ButtonBase
        focusRipple
        className={className}
        role="tab"
        aria-selected={selected}
        disabled={disabled}
        {...other as any}
        onClick={this.handleChange}
      >
        <span className={classes.wrapper}>
          {icon}
          {label}
        </span>
        {indicator}
      </ButtonBase>
    );
  }
}

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<TabClassKey>,
  props: TabProps & { indicator?; }
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Tab.defaultProps = {
  disabled: false,
  textColor: 'inherit'
} as CodeProps;
export const TabCode: CodeComponentType = Tab as any
export const TabStyles: SheetCreatorX = styles as any
export const TabCreator: WithStyleCreator = withStyles<Shape>(TabStyles, TabCode, {isMui:true, defaultProps});
export const TabComponent: React.ComponentClass<PropsX> = TabCreator();
if ((Tab as any).muiName) (TabComponent as any).muiName = (Tab as any).muiName;


export default TabComponent
