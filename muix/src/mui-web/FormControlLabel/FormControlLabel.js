//autogenerated--------------------------------------------------------------------
//
// This code was generated from material-ui v1.4.3 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
//
//----------------------------------------------------------------------------------

/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "../styles/withStyles";
import Typography from "../Typography/Typography";
export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    // For correct alignment with the text.
    verticalAlign: "middle",
    // Remove grey highlight
    WebkitTapHighlightColor: "transparent",
    marginLeft: -14,
    marginRight: 16,
    // used for row presentation of radio/checkbox
    "&.disabled31": {
      cursor: "default"
    }
  },

  /* Styles applied to the root element if `labelPlacement="start"`. */
  labelPlacementStart: {
    flexDirection: "row-reverse"
  },

  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {
    NAME$disabled31: true
  },

  /* Styles applied to the label's Typography component. */
  label: {
    "&.disabled31": {
      color: theme.palette.text.disabled
    }
  }
});
/**
 * Drop in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */

function FormControlLabel(props, context) {
  const {
    $system: { classNames, classNamesStr, classNamesAny, theme },
    checked,
    classes,
    className: classNameProp,
    control,
    disabled: disabledProp,
    inputRef,
    label,
    labelPlacement,
    name,
    onChange,
    value,
    ...other
  } = props;
  const { muiFormControl } = context;
  let disabled = disabledProp;

  if (
    typeof disabled === "undefined" &&
    typeof control.props.disabled !== "undefined"
  ) {
    disabled = control.props.disabled;
  }

  if (typeof disabled === "undefined" && muiFormControl) {
    disabled = muiFormControl.disabled;
  }

  const controlProps = {
    disabled
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach(key => {
    if (
      typeof control.props[key] === "undefined" &&
      typeof props[key] !== "undefined"
    ) {
      controlProps[key] = props[key];
    }
  });
  return (
    <label
      className={classNamesStr(
        classes.root,
        labelPlacement === "start" && classes.labelPlacementStart,
        disabled && classes.disabled,
        classNameProp
      )}
      {...other}
    >
      {React.cloneElement(control, controlProps)}
      <Typography
        component="span"
        className={classNames(classes.label, disabled && classes.disabled)}
      >
        {label}
      </Typography>
    </label>
  );
}

FormControlLabel.contextTypes = {
  muiFormControl: PropTypes.object
};
export const defaultProps = (FormControlLabel.defaultProps = {
  labelPlacement: "end"
});

export const FormControlLabelCode = FormControlLabel;
export const FormControlLabelCreator = withStyles(styles, FormControlLabel, {
  isMui: true,
  defaultProps
});
export const FormControlLabelComponent = FormControlLabelCreator();
if (FormControlLabel.muiName)
  FormControlLabelComponent.muiName = FormControlLabel.muiName;
export default FormControlLabelComponent;