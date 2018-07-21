// @inheritedComponent IconButton
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import IconButton from '../IconButton';
export const styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'none',
    '&:hover': {
      // Disable the hover effect for the IconButton.
      backgroundColor: 'transparent'
    }
  },
  checked: {},
  disabled: {},
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0
  }
};

class SwitchBase extends React.Component {
  input = null;
  isControlled = null;

  constructor(props) {
    super(props);
    this.isControlled = props.checked != null;

    if (!this.isControlled) {
      // not controlled, use internal state
      this.state.checked = props.defaultChecked !== undefined ? props.defaultChecked : false;
    }
  }

  state = {};
  handleFocus = event => {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }

    const {
      muiFormControl
    } = this.context;

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  handleBlur = event => {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }

    const {
      muiFormControl
    } = this.context;

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  handleInputChange = event => {
    const checked = event.target.checked;

    if (!this.isControlled) {
      this.setState({
        checked
      });
    }

    if (this.props.onChange) {
      this.props.onChange(event, checked);
    }
  };

  render() {
    const {
      $system: {
        classNames,
        classNamesStr
      },
      checked: checkedProp,
      checkedIcon,
      classes,
      className: classNameProp,
      disabled: disabledProp,
      icon,
      id,
      inputProps,
      inputRef,
      name,
      onBlur,
      onChange,
      onFocus,
      tabIndex,
      type,
      value,
      ...other
    } = this.props;
    const {
      muiFormControl
    } = this.context;
    let disabled = disabledProp;

    if (muiFormControl) {
      if (typeof disabled === 'undefined') {
        disabled = muiFormControl.disabled;
      }
    }

    const checked = this.isControlled ? checkedProp : this.state.checked;
    const hasLabelFor = type === 'checkbox' || type === 'radio';
    return <IconButton component="span" className={classNames(classes.root, checked && classes.checked, disabled && classes.disabled, classNameProp)} disabled={disabled} tabIndex={null} role={undefined} onFocus={this.handleFocus} onBlur={this.handleBlur} {...other}>
        {checked ? checkedIcon : icon}
        <input id={hasLabelFor && id} type={type} name={name} checked={checked} onChange={this.handleInputChange} className={classNamesStr(classes.input)} disabled={disabled} tabIndex={tabIndex} value={value} ref={inputRef} {...inputProps} />
      </IconButton>;
  }

} // NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.


SwitchBase.contextTypes = {
  muiFormControl: PropTypes.object
};
const defaultProps = {
  type: 'checkbox'
};
const meta = {
  component: SwitchBase || null,
  defaultProps: defaultProps || null,
  styles: styles || null
};
export default meta;