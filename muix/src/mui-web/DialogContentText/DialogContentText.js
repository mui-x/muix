//autogenerated--------------------------------------------------------------------
//
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
//
//----------------------------------------------------------------------------------

// @inheritedComponent Typography
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import withStyles from "../styles/withStyles";
import Typography from "../Typography/Typography";
export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    color: theme.palette.text.secondary
  }
});

function DialogContentText(props) {
  const {
    $system: { theme },
    children,
    classes,
    className,
    ...other
  } = props;
  return (
    <Typography
      component="p"
      variant="subheading"
      className={classNames(classes.root, className)}
      {...other}
    >
      {children}
    </Typography>
  );
}

export const defaultProps = (DialogContentText.defaultProps = {});

export const DialogContentTextCode = DialogContentText;
export const DialogContentTextCreator = withStyles(styles, DialogContentText, {
  isMui: true,
  defaultProps
});
export const DialogContentTextComponent = DialogContentTextCreator();
if (DialogContentText.muiName)
  DialogContentTextComponent.muiName = DialogContentText.muiName;
export default DialogContentTextComponent;
