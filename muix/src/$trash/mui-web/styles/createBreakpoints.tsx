//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";
export type BreakpointValues = { [key in Breakpoint]: number };
export interface Breakpoints {
  keys: Breakpoint[];
  values: BreakpointValues;
  up: (key: Breakpoint | number) => string;
  down: (key: Breakpoint | number) => string;
  between: (start: Breakpoint, end: Breakpoint) => string;
  only: (key: Breakpoint) => string;
  width: (key: Breakpoint) => number;
}
export type BreakpointsOptions = Partial<
  {
    unit: string;
    step: number;
  } & Breakpoints
>; // Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.

export const keys = ["xs", "sm", "md", "lg", "xl"]; // Keep in mind that @media is inclusive by the CSS specification.

export default function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm[.
    values = {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    },
    unit = "px",
    step = 5,
    ...other
  } = breakpoints;

  function up(key) {
    const value = typeof values[key] === "number" ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }

  function down(key) {
    const endIndex = keys.indexOf(key) + 1;
    const upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up("xs");
    }

    const value =
      typeof upperbound === "number" && endIndex > 0 ? upperbound : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }

  function between(start, end) {
    const endIndex = keys.indexOf(end) + 1;

    if (endIndex === keys.length) {
      return up(start);
    }

    return (
      `@media (min-width:${values[start]}${unit}) and ` +
      `(max-width:${values[keys[endIndex]] - step / 100}${unit})`
    );
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return {
    keys,
    values,
    up,
    down,
    between,
    only,
    width,
    ...other
  };
}
