import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import withStyles from '../styles/withStyles';
export const styles = theme => {
  const elevations = {};
  theme.shadows.forEach((shadow, index) => {
    elevations[`elevation${index}`] = {
      boxShadow: shadow
    };
  });
  return {
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },
    ...elevations
  };
};

function Paper(props) {
  const {
    $system: {
      classNames,
      classNamesStr,
      classNamesAny,
      theme
    },
    classes,
    className: classNameProp,
    component: Component,
    square,
    elevation,
    ...other
  } = props;
  warning(elevation >= 0 && elevation < 25, `Material-UI: this elevation \`${elevation}\` is not implemented.`);
  const className = classNames(classes.root, classes[`elevation${elevation}`], !square && classes.rounded, classNameProp);
  return <Component className={classNamesAny(Component, className)} {...other} />;
}

const defaultProps = Paper.defaultProps = {
  component: 'div',
  elevation: 2,
  square: false
};

/**
* @type { import('reactxx-basic').WithStyleCreator<import('../typings/shapes/Paper/Paper').Shape>}
*/
export const PaperCreator = withStyles(styles, Paper, {
  isMui: true,
  defaultProps
});
const PaperComponent = PaperCreator();
if (Paper.muiName) PaperComponent.muiName = Paper.muiName;
export default PaperComponent;