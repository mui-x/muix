import React from 'react';
import { toAtomic } from '../styles/withStyles';

import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import { cloneChildrenWithClassName } from '../utils/reactHelpers';
import '../Button'; // So we don't have any override priority issue.

export const styles = {
  /* Styles applied to the root element. */
  root: { ...toAtomic('padding', '16px 8px'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  /* Styles applied to the children. */
  action: {
    marginLeft: 8
  }
};

function ExpansionPanelActions(props) {
  const {
    $system: {
      classNames,
      classNamesStr,
      theme
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

/**
* @type { import('reactxx-basic').WithStyleCreator<import('../typings/shapes/ExpansionPanelActions/ExpansionPanelActions').Shape>}
*/
export const ExpansionPanelActionsCreator = withStyles(styles, ExpansionPanelActions, {
  isMui: true,
  defaultProps
});
const ExpansionPanelActionsComponent = ExpansionPanelActionsCreator();
if (ExpansionPanelActions.muiName) ExpansionPanelActionsComponent.muiName = ExpansionPanelActions.muiName;
export default ExpansionPanelActionsComponent;