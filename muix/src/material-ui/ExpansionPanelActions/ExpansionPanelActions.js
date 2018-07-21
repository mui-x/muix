import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import { cloneChildrenWithClassName } from '../utils/reactHelpers';
import '../Button'; // So we don't have any override priority issue.

export const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '16px 8px'
  },
  action: {
    marginLeft: 8
  }
};

function ExpansionPanelActions(props) {
  const {
    $system: {
      classNames,
      classNamesStr
    },
    children,
    classes,
    className,
    ...other
  } = props;
  return <div className={classNamesStr(classes.root, className)} {...other}>
      {cloneChildrenWithClassName(children, classes.action)}
    </div>;
}

const meta = {
  component: ExpansionPanelActions || null,
  defaultProps: defaultProps || null,
  styles: styles || null
};
export default meta;