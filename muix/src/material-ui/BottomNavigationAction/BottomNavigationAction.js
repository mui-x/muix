// @inheritedComponent ButtonBase
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
import unsupportedProp from '../utils/unsupportedProp';
export const styles = theme => ({
  root: {
    transition: theme.transitions.create(['color', 'padding-top'], {
      duration: theme.transitions.duration.short
    }),
    paddingTop: 8,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    minWidth: 80,
    maxWidth: 168,
    color: theme.palette.text.secondary,
    flex: '1',
    '&$iconOnly': {
      paddingTop: 16
    },
    '&$selected': {
      paddingTop: 6,
      color: theme.palette.primary.main
    }
  },
  selected: {},
  iconOnly: {},
  wrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column'
  },
  label: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(12),
    opacity: 1,
    transition: 'font-size 0.2s, opacity 0.2s',
    transitionDelay: '0.1s',
    '&$iconOnly': {
      opacity: 0,
      transitionDelay: '0s'
    },
    '&$selected': {
      fontSize: theme.typography.pxToRem(14)
    }
  }
});

class BottomNavigationAction extends React.Component {
  handleChange = event => {
    const {
      onChange,
      value,
      onClick
    } = this.props;

    if (onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  render() {
    const {
      $system: {
        classNames,
        classNamesStr
      },
      classes,
      className: classNameProp,
      icon,
      label,
      onChange,
      onClick,
      selected,
      showLabel: showLabelProp,
      value,
      ...other
    } = this.props;
    const className = classNames(classes.root, selected && classes.selected, !showLabelProp && !selected && classes.iconOnly, classNameProp);
    const labelClassName = classNames(classes.label, selected && classes.selected, !showLabelProp && !selected && classes.iconOnly);
    return <ButtonBase className={className} focusRipple onClick={this.handleChange} {...other}>
        <span className={classNamesStr(classes.wrapper)}>
          {icon}
          <span className={classNamesStr(labelClassName)}>{label}</span>
        </span>
      </ButtonBase>;
  }

}

export default withStyles(styles, {
  name: 'MuiBottomNavigationAction'
})(BottomNavigationAction);