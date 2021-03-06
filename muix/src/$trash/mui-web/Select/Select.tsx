//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
// @inheritedComponent Input
import React from "react";
import PropTypes from "prop-types";
import SelectInput from "./SelectInput";
import mergeClasses from "../styles/mergeClasses";
import ArrowDropDownIcon from "../internal/svg-icons/ArrowDropDown";
import Input from "../Input/Input";
import { NativeSelectStyles as nativeSelectStyles } from "../NativeSelect/NativeSelect";
import NativeSelectInput from "../NativeSelect/NativeSelectInput";
import { StandardProps } from "..";
import { InputProps } from "../Input/Input";
import { MenuProps } from "../Menu/Menu";
import { SelectInputProps } from "./SelectInput";
export interface SelectProps
  extends StandardProps<InputProps, SelectClassKey, "value" | "onChange">,
    Pick<SelectInputProps, "onChange"> {
  autoWidth?: boolean;
  displayEmpty?: boolean;
  IconComponent?: React.ReactType;
  input?: React.ReactNode;
  MenuProps?: Partial<MenuProps>;
  multiple?: boolean;
  native?: boolean;
  onClose?: (event: React.ChangeEvent<{}>) => void;
  onOpen?: (event: React.ChangeEvent<{}>) => void;
  open?: boolean;
  renderValue?: (value: SelectProps["value"]) => React.ReactNode;
  SelectDisplayProps?: React.HTMLAttributes<HTMLDivElement>;
  value?: Array<string | number | boolean> | string | number | boolean;
}
export type SelectClassKey =
  | "root"
  | "select"
  | "selectMenu"
  | "disabled"
  | "icon";
const styles = nativeSelectStyles;

const Select: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    autoWidth,
    children,
    classes,
    displayEmpty,
    IconComponent,
    input,
    inputProps,
    MenuProps,
    multiple,
    native,
    onClose,
    onOpen,
    open,
    renderValue,
    SelectDisplayProps,
    ...other
  } = props;
  const inputComponent = native ? NativeSelectInput : SelectInput;
  return React.cloneElement(input as any, {
    // Most of the logic is implemented in `SelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent,
    inputProps: {
      children,
      IconComponent,
      type: undefined,
      // We render a select. We can ignore the type provided by the `Input`.
      ...(native
        ? {}
        : {
            autoWidth,
            displayEmpty,
            MenuProps,
            multiple,
            onClose,
            onOpen,
            open,
            renderValue,
            SelectDisplayProps
          }),
      ...inputProps,
      classes: inputProps
        ? mergeClasses({
            baseClasses: classes,
            newClasses: (inputProps as any).classes,
            Component: Select
          })
        : classes,
      ...(input ? (input as any).props.inputProps : {})
    },
    ...other
  });
};

Select.muiName = "Select";

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<SelectClassKey>,
  props: SelectProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Select.defaultProps = {
  autoWidth: false,
  displayEmpty: false,
  IconComponent: ArrowDropDownIcon,
  input: <Input />,
  multiple: false,
  native: false
} as CodeProps;
export const SelectCode: CodeComponentType = Select as any
export const SelectStyles: SheetCreatorX = styles as any
export const SelectCreator: WithStyleCreator = withStyles<Shape>(SelectStyles, SelectCode, {isMui:true, defaultProps});
export const SelectComponent: React.ComponentType<PropsX> = SelectCreator();
if ((Select as any).muiName) (SelectComponent as any).muiName = (Select as any).muiName;


export default SelectComponent
