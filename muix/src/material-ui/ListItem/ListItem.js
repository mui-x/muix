import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
import { isMuiElement } from '../utils/reactHelpers';
export const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    textDecoration: 'none',
    width: '100%',
    boxSizing: 'border-box',
    textAlign: 'left'
  },
  container: {
    position: 'relative'
  },
  focusVisible: {
    backgroundColor: theme.palette.action.hover
  },
  default: {
    paddingTop: 12,
    paddingBottom: 12
  },
  dense: {
    paddingTop: 8,
    paddingBottom: 8
  },
  disabled: {
    opacity: 0.5
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundClip: 'padding-box'
  },
  gutters: theme.mixins.gutters(),
  button: {
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest
    }),
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },
  secondaryAction: {
    // Add some space to avoid collision as `ListItemSecondaryAction`
    // is absolutely positionned.
    paddingRight: 32
  }
});

class ListItem extends React.Component {
  getChildContext() {
    return {
      dense: this.props.dense || this.context.dense || false
    };
  }

  render() {
    const {
      $system: {
        classNames,
        classNamesStr
      },
      button,
      children: childrenProp,
      classes,
      className: classNameProp,
      component: componentProp,
      ContainerComponent,
      ContainerProps: {
        className: ContainerClassName,
        ...ContainerProps
      } = {},
      dense,
      disabled,
      disableGutters,
      divider,
      focusVisibleClassName,
      ...other
    } = this.props;
    const isDense = dense || this.context.dense || false;
    const children = React.Children.toArray(childrenProp);
    const hasAvatar = children.some(value => isMuiElement(value, ['ListItemAvatar']));
    const hasSecondaryAction = children.length && isMuiElement(children[children.length - 1], ['ListItemSecondaryAction']);
    const className = classNames(classes.root, isDense || hasAvatar ? classes.dense : classes.default, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, hasSecondaryAction && classes.secondaryAction, classNameProp);
    const componentProps = {
      className,
      disabled,
      ...other
    };
    let Component = componentProp || 'li';

    if (button) {
      componentProps.component = componentProp || 'div';
      componentProps.focusVisibleClassName = classNames(classes.focusVisible, focusVisibleClassName);
      Component = ButtonBase;
    }

    if (hasSecondaryAction) {
      // Use div by default.
      Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

      if (ContainerComponent === 'li') {
        if (Component === 'li') {
          Component = 'div';
        } else if (componentProps.component === 'li') {
          componentProps.component = 'div';
        }
      }

      return <ContainerComponent className={classNames(classes.container, ContainerClassName)} {...ContainerProps}>
          <Component {...componentProps}>{children}</Component>
          {children.pop()}
        </ContainerComponent>;
    }

    return <Component {...componentProps}>{children}</Component>;
  }

}

ListItem.contextTypes = {
  dense: PropTypes.bool
};
ListItem.childContextTypes = {
  dense: PropTypes.bool
};
const defaultProps = {
  button: false,
  ContainerComponent: 'li',
  dense: false,
  disabled: false,
  disableGutters: false,
  divider: false
};
const meta = {
  component: ListItem || null,
  defaultProps: defaultProps || null,
  styles: styles || null
};
export default meta;