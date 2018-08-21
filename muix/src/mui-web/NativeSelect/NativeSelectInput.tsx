//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from "react";
import { Types } from "reactxx-basic";
import { classNames } from "reactxx-basic";
export interface NativeSelectInputProps {
  disabled?: boolean;
  IconComponent?: React.ReactType;
  inputRef?: (
    ref:
      | HTMLSelectElement
      | {
          node: HTMLInputElement;
          value: NativeSelectInputProps["value"];
        }
  ) => void;
  name?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLSelectElement>,
    child: React.ReactNode
  ) => void;
  value?: string | number | boolean;
}
/**
 * @ignore - internal component.
 */

export type Shape = Types.OverwriteShape<{
  props: NativeSelectInputProps;
}>;

const NativeSelectInput: Types.CodeSFCWeb<Shape> = props => {
  const {
    children,
    classes,
    className,
    disabled,
    IconComponent,
    inputRef,
    name,
    onChange,
    value,
    ...other
  } = props;
  return (
    <div className={classes.root}>
      <select
        className={classNames(
          classes.select,
          disabled && classes.disabled,
          className
        )}
        name={name}
        disabled={disabled}
        onChange={onChange}
        value={value}
        ref={inputRef}
        {...other}
      >
        {children}
      </select>
      <IconComponent className={classes.icon} />
    </div>
  );
};

NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * The CSS class name of the select element.
   */
  className: PropTypes.string,

  /**
   * If `true`, the select will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),

  /**
   * Use that property to pass a ref callback to the native select element.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: PropTypes.string,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: PropTypes.func,

  /**
   * The input value.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ])
};
export default NativeSelectInput;
