//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles'
import TextField from 'reactxx-muix/current/TextField/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function TimePickers(props) {
  const { classes } = props;

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
  );
}

TimePickers['propTypes'] = {
  classes: PropTypes.object.isRequired,
};

export default withStylesCreator(styles as any, TimePickers)();
