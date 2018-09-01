//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Popper from 'reactxx-mui-web/Popper/Popper';
import Typography from 'reactxx-mui-web/Typography/Typography';
import Grid from 'reactxx-mui-web/Grid/Grid';
import Button from 'reactxx-mui-web/Button/Button';
import Fade from 'reactxx-mui-web/Fade/Fade';
import Paper from 'reactxx-mui-web/Paper/Paper';

const styles = theme => ({
  root: {
    width: 500
  },
  typography: {
    padding: theme.spacing.unit * 2
  }
});

class PositionedPopper extends React.Component<any, any> {
  state: any = {
    anchorEl: null,
    open: false,
    placement: null
  };
  handleClick = placement => event => {
    const {
      currentTarget
    } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: state.placement !== placement || !state.open,
      placement
    }));
  };

  render() {
    const {
      classes
    } = this.props;
    const {
      anchorEl,
      open,
      placement
    } = this.state;
    return <div className={classes.root}>
        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
          {({
          TransitionProps
        }) => <Fade {...(TransitionProps as any)} timeout={350}>
              <Paper>
                <Typography className={classes.typography}>The content of the Popper.</Typography>
              </Paper>
            </Fade>}
        </Popper>
        <Grid container justify="center">
          <Grid item>
            <Button onClick={this.handleClick('top-start')}>top-start</Button>
            <Button onClick={this.handleClick('top')}>top</Button>
            <Button onClick={this.handleClick('top-end')}>top-end</Button>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={6}>
            <Button onClick={this.handleClick('left-start')}>left-start</Button>
            <br />
            <Button onClick={this.handleClick('left')}>left</Button>
            <br />
            <Button onClick={this.handleClick('left-end')}>left-end</Button>
          </Grid>
          <Grid item container xs={6} alignItems="flex-end" direction="column" spacing={0}>
            <Grid item>
              <Button onClick={this.handleClick('right-start')}>right-start</Button>
            </Grid>
            <Grid item>
              <Button onClick={this.handleClick('right')}>right</Button>
            </Grid>
            <Grid item>
              <Button onClick={this.handleClick('right-end')}>right-end</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <Button onClick={this.handleClick('bottom-start')}>bottom-start</Button>
            <Button onClick={this.handleClick('bottom')}>bottom</Button>
            <Button onClick={this.handleClick('bottom-end')}>bottom-end</Button>
          </Grid>
        </Grid>
      </div>;
  }

}

PositionedPopper['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), PositionedPopper)();