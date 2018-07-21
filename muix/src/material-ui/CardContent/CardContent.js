import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
export const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    '&:last-child': {
      paddingBottom: 24
    }
  })
});

function CardContent(props) {
  const {
    $system: {
      classNames,
      classNamesStr
    },
    classes,
    className,
    component: Component,
    ...other
  } = props;
  return <Component className={classNames(classes.root, className)} {...other} />;
}

const defaultProps = {
  component: 'div'
};
const meta = {
  component: CardContent || null,
  defaultProps: defaultProps || null,
  styles: styles || null
};
export default meta;