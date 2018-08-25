//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import PropTypes from "prop-types";
import { keys as breakpointKeys } from "../styles/createBreakpoints";
import withWidth, { isWidthDown, isWidthUp } from "../withWidth";
import exactProp from "../utils/exactProp";
import { Breakpoint } from "../styles/createBreakpoints";
export interface HiddenJsProps {
  initialWidth?: Breakpoint;
  lgDown?: boolean;
  lgUp?: boolean;
  mdDown?: boolean;
  mdUp?: boolean;
  only?: Breakpoint | Array<Breakpoint>;
  smDown?: boolean;
  smUp?: boolean;
  xlDown?: boolean;
  xlUp?: boolean;
  xsDown?: boolean;
  xsUp?: boolean;
}
/**
 * @ignore - internal component.
 */

const HiddenJs: React.SFC<HiddenJsProps> & {
  muiName?: string;
} = props => {
  const { children, only, width } = props;
  let visible = true; // `only` check is faster to get out sooner if used.

  if (only) {
    if (Array.isArray(only)) {
      for (let i = 0; i < only.length; i += 1) {
        const breakpoint = only[i];

        if (width === breakpoint) {
          visible = false;
          break;
        }
      }
    } else if (only && width === only) {
      visible = false;
    }
  } // Allow `only` to be combined with other props. If already hidden, no need to check others.

  if (visible) {
    // determine visibility based on the smallest size up
    for (let i = 0; i < breakpointKeys.length; i += 1) {
      const breakpoint = breakpointKeys[i];
      const breakpointUp = props[`${breakpoint}Up`];
      const breakpointDown = props[`${breakpoint}Down`];

      if (
        (breakpointUp && isWidthUp(breakpoint, width)) ||
        (breakpointDown && isWidthDown(breakpoint, width))
      ) {
        visible = false;
        break;
      }
    }
  }

  if (!visible) {
    return null;
  }

  return children;
};

export default withWidth()(HiddenJs);
