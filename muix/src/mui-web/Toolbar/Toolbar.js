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
export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    position: "relative",
    display: "flex",
    alignItems: "center"
  },

  /* Styles applied to the root element if `disableGutters={false}`. */
  gutters: theme.mixins.gutters(),

  /* Styles applied to the root element if `variant="regular"`. */
  regular: theme.mixins.toolbar,

  /* Styles applied to the root element if `variant="dense"`. */
  dense: {
    minHeight: 48
  }
});

function Toolbar(props) {
  const {
    $system: { theme },
    children,
    classes,
    className: classNameProp,
    disableGutters,
    variant,
    ...other
  } = props;
  const className = classNames(
    classes.root,
    classes[variant],
    !disableGutters && classes.gutters,
    classNameProp
  );
  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
}

export const defaultProps = (Toolbar.defaultProps = {
  disableGutters: false,
  variant: "regular"
});

export const ToolbarCode = Toolbar;
export const ToolbarCreator = withStyles(styles, Toolbar, {
  isMui: true,
  defaultProps
});
export const ToolbarComponent = ToolbarCreator();
if (Toolbar.muiName) ToolbarComponent.muiName = Toolbar.muiName;
export default ToolbarComponent;
