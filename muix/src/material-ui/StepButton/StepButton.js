// @inheritedComponent ButtonBase
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
import StepLabel from '../StepLabel';
import { isMuiElement } from '../utils/reactHelpers';
export const styles = {
  root: {
    width: '100%',
    padding: '24px 16px',
    margin: '-24px -16px',
    boxSizing: 'content-box'
  },
  vertical: {
    justifyContent: 'flex-start'
  },
  touchRipple: {
    color: 'rgba(0, 0, 0, 0.3)'
  }
};

function StepButton(props) {
  const {
    $system: {
      classNames,
      classNamesStr
    },
    active,
    alternativeLabel,
    children,
    classes,
    className: classNameProp,
    completed,
    disabled,
    icon,
    last,
    optional,
    orientation,
    ...other
  } = props;
  const childProps = {
    active,
    alternativeLabel,
    completed,
    disabled,
    icon,
    optional,
    orientation
  };
  const child = isMuiElement(children, ['StepLabel']) ? React.cloneElement(children, childProps) : <StepLabel {...childProps}>{children}</StepLabel>;
  return <ButtonBase disabled={disabled} TouchRippleProps={{
    className: classes.touchRipple
  }} className={classNames(classes.root, orientation === 'vertical' && classes.vertical, classNameProp)} {...other}>
      {child}
    </ButtonBase>;
}

const meta = {
  component: StepButton || null,
  defaultProps: defaultProps || null,
  styles: styles || null
};
export default meta;