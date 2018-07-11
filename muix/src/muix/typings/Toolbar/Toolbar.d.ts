import * as React from 'react';
import { StandardProps } from 'reactxx-muix/typings';

export interface ToolbarProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, ToolbarClassKey> {
  disableGutters?: boolean;
}

export type ToolbarClassKey = 'root' | 'gutters';

declare const Toolbar: React.ComponentType<ToolbarProps>;

export default Toolbar;
