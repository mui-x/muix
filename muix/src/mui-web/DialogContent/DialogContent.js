//autogenerated--------------------------------------------------------------------
//
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
//
//----------------------------------------------------------------------------------

import React from "react";
import { toAtomic } from "../styles/withStyles";

import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import withStyles from "../styles/withStyles";
export const styles = {
  /* Styles applied to the root element. */
  root: {
    ...toAtomic("padding", "0 24px 24px"),
    flex: "1 1 auto",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    "&:first-child": {
      paddingTop: 24
    }
  }
};

function DialogContent(props) {
  const {
    $system: { theme },
    classes,
    children,
    className,
    ...other
  } = props;
  return (
    <div className={classNames(classes.root, className)} {...other}>
      {children}
    </div>
  );
}

export const defaultProps = (DialogContent.defaultProps = {});

export const DialogContentCode = DialogContent;
export const DialogContentCreator = withStyles(styles, DialogContent, {
  isMui: true,
  defaultProps
});
export const DialogContentComponent = DialogContentCreator();
if (DialogContent.muiName)
  DialogContentComponent.muiName = DialogContent.muiName;
export default DialogContentComponent;
