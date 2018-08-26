//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import debounce from "debounce"; // < 1kb payload overhead when lodash/debounce is > 3kb.

import EventListener from "react-event-listener";
import { StandardProps } from "..";
export interface TextareaProps
  extends StandardProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      TextareaClassKey,
      "rows"
    > {
  defaultValue?: any;
  disabled?: boolean;
  rows?: string | number;
  rowsMax?: string | number;
  textareaRef?: React.Ref<any> | React.RefObject<any>;
  value?: string;
}
export type TextareaClassKey = "root" | "shadow" | "textarea";
const ROWS_HEIGHT = 19;
const styles = {
  /* Styles applied to the root element. */
  root: {
    position: "relative",
    // because the shadow has position: 'absolute',
    width: "100%"
  },
  textarea: {
    width: "100%",
    height: "100%",
    resize: "none",
    font: "inherit",
    padding: 0,
    cursor: "inherit",
    boxSizing: "border-box",
    lineHeight: "inherit",
    border: "none",
    outline: "none",
    background: "transparent"
  },
  shadow: {
    // Overflow also needed to here to remove the extra row
    // added to textareas in Firefox.
    overflow: "hidden",
    // Visibility needed to hide the extra text area on ipads
    visibility: "hidden",
    position: "absolute",
    height: "auto",
    whiteSpace: "pre-wrap"
  }
};
/**
 * @ignore - internal component.
 */

class Textarea extends React.Component<CodeProps, any> {
  static defaultProps: CodeProps;
  static muiName;
  static displayName;
  static contextTypes;
  static childContextTypes;
  static options;
  isControlled = null;
  shadowRef = null;
  singlelineShadowRef = null;
  inputRef = null;
  value = null;
  handleResize = debounce(() => {
    this.syncHeightWithShadow();
  }, 166); // Corresponds to 10 frames at 60 Hz.

  constructor(props) {
    super(props);
    this.isControlled = props.value != null; // <Input> expects the components it renders to respond to 'value'
    // so that it can check whether they are filled.

    this.value = props.value || props.defaultValue || "";
    this.state = {
      height: Number(props.rows) * ROWS_HEIGHT
    };
  }

  state: any = {
    height: null
  };

  componentDidMount() {
    this.syncHeightWithShadow();
  }

  componentDidUpdate() {
    this.syncHeightWithShadow();
  }

  componentWillUnmount() {
    this.handleResize.clear();
  }

  handleRefInput = ref => {
    this.inputRef = ref;
    const { textareaRef } = this.props;

    if (textareaRef) {
      if (typeof textareaRef === "function") {
        textareaRef(ref);
      } else {
        (textareaRef as any).current = ref;
      }
    }
  };
  handleRefSinglelineShadow = ref => {
    this.singlelineShadowRef = ref;
  };
  handleRefShadow = ref => {
    this.shadowRef = ref;
  };
  handleChange = event => {
    this.value = event.target.value;

    if (!this.isControlled) {
      // The component is not controlled, we need to update the shallow value.
      this.shadowRef.value = this.value;
      this.syncHeightWithShadow();
    }

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  syncHeightWithShadow() {
    const props = this.props; // Guarding for **broken** shallow rendering method that call componentDidMount
    // but doesn't handle refs correctly.
    // To remove once the shallow rendering has been fixed.

    if (!this.shadowRef) {
      return;
    }

    if (this.isControlled) {
      // The component is controlled, we need to update the shallow value.
      this.shadowRef.value = props.value == null ? "" : String(props.value);
    }

    const lineHeight = this.singlelineShadowRef.scrollHeight;
    let newHeight = this.shadowRef.scrollHeight; // Guarding for jsdom, where scrollHeight isn't present.
    // See https://github.com/tmpvar/jsdom/issues/1013

    if (newHeight === undefined) {
      return;
    }

    if (Number(props.rowsMax) >= Number(props.rows)) {
      newHeight = Math.min(Number(props.rowsMax) * lineHeight, newHeight);
    }

    newHeight = Math.max(newHeight, lineHeight); // Need a large enough different to update the height.
    // This prevents infinite rendering loop.

    if (Math.abs(this.state.height - newHeight) > 1) {
      this.setState({
        height: newHeight
      });
    }
  }

  render() {
    const {
      $system: { theme },
      classes,
      className,
      defaultValue,
      onChange,
      rows,
      rowsMax,
      textareaRef,
      value,
      ...other
    } = this.props;
    return (
      <div
        className={classes.root}
        style={{
          height: this.state.height
        }}
      >
        <EventListener target="window" onResize={this.handleResize} />
        <textarea
          aria-hidden="true"
          className={classNames(classes.textarea, classes.shadow)}
          readOnly
          ref={this.handleRefSinglelineShadow}
          rows={1}
          tabIndex={-1}
          value=""
        />
        <textarea
          aria-hidden="true"
          className={classNames(classes.textarea, classes.shadow)}
          defaultValue={defaultValue}
          readOnly
          ref={this.handleRefShadow}
          rows={rows as any}
          tabIndex={-1}
          value={value}
        />
        <textarea
          rows={rows}
          className={classNames(classes.textarea, className)}
          defaultValue={defaultValue}
          value={value}
          onChange={this.handleChange}
          ref={this.handleRefInput}
          {...other as any}
        />
      </div>
    );
  }
}

export interface Shape extends Types.ShapeDefault {
  common: TCommon.ShapeTexts<TextareaClassKey>,
  props: TextareaProps,
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = Textarea.defaultProps = {
  rows: 1
} as CodeProps;
export const TextareaCode: CodeComponentType = Textarea as any
export const TextareaStyles: SheetCreatorX = styles as any
export const TextareaCreator: WithStyleCreator = withStyles<Shape>(TextareaStyles, TextareaCode, {isMui:true, defaultProps});
export const TextareaComponent: React.ComponentClass<PropsX> = TextareaCreator();
if ((Textarea as any).muiName) (TextareaComponent as any).muiName = (Textarea as any).muiName;


export default TextareaComponent
