//autogenerated--------------------------------------------------------------------
//
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
//
//----------------------------------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import withStyles from "../styles/withStyles";
export const styles = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
  },

  /* Styles applied to the root element if `row={true}`. */
  row: {
    flexDirection: "row"
  }
};
/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */

function FormGroup(props) {
  const {
    $system: { theme },
    classes,
    className,
    children,
    row,
    ...other
  } = props;
  return (
    <div
      className={classNames(classes.root, row && classes.row, className)}
      {...other}
    >
      {children}
    </div>
  );
}

export const defaultProps = (FormGroup.defaultProps = {
  row: false
});

export const FormGroupCode = FormGroup;
export const FormGroupCreator = withStyles(styles, FormGroup, {
  isMui: true,
  defaultProps
});
export const FormGroupComponent = FormGroupCreator();
if (FormGroup.muiName) FormGroupComponent.muiName = FormGroup.muiName;
export default FormGroupComponent;
