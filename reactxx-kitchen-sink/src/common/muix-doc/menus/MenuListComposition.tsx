//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'reactxx-mui-web/Button/Button';
import ClickAwayListener from 'reactxx-mui-web/ClickAwayListener/ClickAwayListener';
import Grow from 'reactxx-mui-web/Grow/Grow';
import Paper from 'reactxx-mui-web/Paper/Paper';
import Popper from 'reactxx-mui-web/Popper/Popper';
import MenuItem from 'reactxx-mui-web/MenuItem/MenuItem';
import MenuList from 'reactxx-mui-web/MenuList/MenuList';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  }
});

class MenuListComposition extends React.Component<any, any> {
  state: any = {
    open: false
  };
  anchorEl;
  handleToggle = () => {
    this.setState(state => ({
      open: !state.open
    }));
  };
  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({
      open: false
    });
  };

  render() {
    const {
      classes
    } = this.props;
    const {
      open
    } = this.state;
    return <div className={classes.root}>
        <Paper className={classes.paper}>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Paper>
        <div>
          <Button buttonRef={node => {
          this.anchorEl = node;
        }} aria-owns={open ? 'menu-list-grow' : null} aria-haspopup="true" onClick={this.handleToggle}>
            Toggle Menu Grow
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({
            TransitionProps,
            placement
          }) => <Grow {...TransitionProps} {...{
            id: "menu-list-grow"
          }} style={{
            $web: {
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
            }
          }}>
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                      <MenuItem onClick={this.handleClose}>My account</MenuItem>
                      <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>}
          </Popper>
        </div>
      </div>;
  }

}

MenuListComposition['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), MenuListComposition)();