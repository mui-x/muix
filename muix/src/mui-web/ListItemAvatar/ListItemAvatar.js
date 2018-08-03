import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import withStyles from '../styles/withStyles';
export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    width: 36,
    height: 36,
    fontSize: theme.typography.pxToRem(18),
    marginRight: 4
  },

  /* Styles applied to the children – typically the `Avatar` component. */
  icon: {
    width: 20,
    height: 20,
    fontSize: theme.typography.pxToRem(20)
  }
});
/**
 * This is a simple wrapper to apply the `dense` mode styles to `Avatar`.
 */

function ListItemAvatar(props, context) {
  const {
    $system: {
      classNames,
      classNamesStr,
      classNamesAny,
      theme
    },
    children,
    classes,
    className: classNameProp,
    ...other
  } = props;

  if (context.dense === undefined) {
    warning(false, `Material-UI: <ListItemAvatar> is a simple wrapper to apply the dense styles
      to <Avatar>. You do not need it unless you are controlling the <List> dense property.`);
    return props.children;
  }

  return React.cloneElement(children, {
    className: classNames(context.dense && classes.root, classNameProp, children.props.className),
    childrenClassName: classNames(context.dense && classes.icon, children.props.childrenClassName),
    ...other
  });
}

ListItemAvatar.contextTypes = {
  dense: PropTypes.bool
};
ListItemAvatar.muiName = 'ListItemAvatar';
const defaultProps = ListItemAvatar.defaultProps = {};

/**
* @type { import('reactxx-basic').WithStyleCreator<import('../typings/shapes/ListItemAvatar/ListItemAvatar').Shape>}
*/
export const ListItemAvatarCreator = withStyles(styles, ListItemAvatar, {
  isMui: true,
  defaultProps
});
const ListItemAvatarComponent = ListItemAvatarCreator();
if (ListItemAvatar.muiName) ListItemAvatarComponent.muiName = ListItemAvatar.muiName;
export default ListItemAvatarComponent;