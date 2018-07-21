// @inheritedComponent Input
import React from 'react';
import PropTypes from 'prop-types';
import NativeSelectInput from './NativeSelectInput';
import withStyles from '../styles/withStyles';
import ArrowDropDownIcon from '../internal/svg-icons/ArrowDropDown';
import Input from '../Input';
export const styles = theme => ({
  root: {
    position: 'relative',
    width: '100%'
  },
  select: {
    '-moz-appearance': 'none',
    // Reset
    '-webkit-appearance': 'none',
    // Reset
    // When interacting quickly, the text can end up selected.
    // Native select can't be selected either.
    userSelect: 'none',
    paddingRight: 32,
    width: 'calc(100% - 32px)',
    minWidth: 16,
    // So it doesn't collapse.
    cursor: 'pointer',
    '&:focus': {
      // Show that it's not an text input
      background: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
      borderRadius: 0 // Reset Chrome style

    },
    // Remove Firefox focus border
    '&:-moz-focusring': {
      color: 'transparent',
      textShadow: '0 0 0 #000'
    },
    // Remove IE11 arrow
    '&::-ms-expand': {
      display: 'none'
    },
    '&$disabled': {
      cursor: 'default'
    }
  },
  selectMenu: {
    width: 'auto',
    // Fix Safari textOverflow
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    minHeight: '1.1875em' // Reset (19px), match the native input line-height

  },
  disabled: {},
  icon: {
    // We use a position absolute over a flexbox in order to forward the pointer events
    // to the input.
    position: 'absolute',
    right: 0,
    top: 'calc(50% - 12px)',
    // Center vertically
    color: theme.palette.action.active,
    'pointer-events': 'none' // Don't block pointer events on the select under the icon.

  }
});
/**
 * An alternative to `<Select native />` with a much smaller dependency graph.
 */

function NativeSelect(props) {
  const {
    $system: {
      classNames,
      classNamesStr
    },
    children,
    classes,
    IconComponent,
    input,
    inputProps,
    ...other
  } = props;
  return React.cloneElement(input, {
    // Most of the logic is implemented in `NativeSelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: NativeSelectInput,
    inputProps: {
      children,
      classes,
      IconComponent,
      type: undefined,
      // We render a select. We can ignore the type provided by the `Input`.
      ...inputProps,
      ...(input ? input.props.inputProps : {})
    },
    ...other
  });
}

NativeSelect.muiName = 'NativeSelect';
const defaultProps = {
  IconComponent: ArrowDropDownIcon,
  input: <Input />
};
const meta = {
  component: NativeSelect || null,
  defaultProps: defaultProps || null,
  styles: styles || null
};
export default meta;