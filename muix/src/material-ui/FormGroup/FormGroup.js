import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
export const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  row: {
    flexDirection: 'row'
  }
};
/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */

function FormGroup(props) {
  const {
    $system: {
      classNames,
      classNamesStr
    },
    classes,
    className,
    children,
    row,
    ...other
  } = props;
  return <div className={classNamesStr(classes.root, row && classes.row, className)} {...other}>
      {children}
    </div>;
}

const defaultProps = {
  row: false
};
const meta = {
  component: FormGroup || null,
  defaultProps: defaultProps || null,
  styles: styles || null
};
export default meta;