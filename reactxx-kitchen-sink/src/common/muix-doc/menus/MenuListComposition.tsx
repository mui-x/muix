import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import Button from 'reactxx-muix/current/Button/Button';
import ClickAwayListener from 'reactxx-muix/current/ClickAwayListener/ClickAwayListener';
import Grow from 'reactxx-muix/current/Grow/Grow';
import Paper from 'reactxx-muix/current/Paper/Paper';
import Popper from 'reactxx-muix/current/Popper/Popper';
import MenuItem from 'reactxx-muix/current/MenuItem/MenuItem';
import MenuList from 'reactxx-muix/current/MenuList/MenuList';
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
    return <div className={classNamesStr(classes.root)}>
        <Paper className={classNames(classes.paper)}>
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
            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
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