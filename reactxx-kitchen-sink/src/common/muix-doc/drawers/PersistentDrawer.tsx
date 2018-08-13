import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Drawer from 'reactxx-muix/current/Drawer/Drawer';
import AppBar from 'reactxx-muix/current/AppBar/AppBar';
import Toolbar from 'reactxx-muix/current/Toolbar/Toolbar';
import List from 'reactxx-muix/current/List/List';
import MenuItem from 'reactxx-muix/current/MenuItem/MenuItem';
import Typography from 'reactxx-muix/current/Typography/Typography';
import TextField from 'reactxx-muix/current/TextField/TextField';
import Divider from 'reactxx-muix/current/Divider/Divider';
import IconButton from 'reactxx-muix/current/IconButton/IconButton';
import MenuIcon from 'reactxx-icons/Menu';
import ChevronLeftIcon from 'reactxx-icons/ChevronLeft';
import ChevronRightIcon from 'reactxx-icons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'appBarShift-left': {
    marginLeft: drawerWidth
  },
  'appBarShift-right': {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  'content-left': {
    marginLeft: -drawerWidth
  },
  'content-right': {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'contentShift-left': {
    marginLeft: 0
  },
  'contentShift-right': {
    marginRight: 0
  }
});

class PersistentDrawer extends React.Component<any, any> {
  state: any = {
    open: false,
    anchor: 'left'
  };
  handleDrawerOpen = () => {
    this.setState({
      open: true
    });
  };
  handleDrawerClose = () => {
    this.setState({
      open: false
    });
  };
  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value
    });
  };

  render() {
    const {
      classes,
      theme
    } = this.props;
    const {
      anchor,
      open
    } = this.state;
    const drawer = <Drawer variant="persistent" anchor={anchor} open={open} classes={{
      paper: classes.drawerPaper
    }}>
        <div className={classNamesStr(classes.drawerHeader)}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </Drawer>;
    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }

    return <div className={classNamesStr(classes.root)}>
        <TextField id="persistent-anchor" select label="Anchor" value={anchor} onChange={this.handleChangeAnchor} margin="normal">
          <MenuItem value="left">left</MenuItem>
          <MenuItem value="right">right</MenuItem>
        </TextField>
        <div className={classNamesStr(classes.appFrame)}>
          <AppBar className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
          [classes[`appBarShift-${anchor}`]]: open
        })}>
            <Toolbar disableGutters={!open}>
              <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen} className={classNames(classes.menuButton, open && classes.hide)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                Persistent drawer
              </Typography>
            </Toolbar>
          </AppBar>
          {before}
          <main className={classNamesStr(classes.content, classes[`content-${anchor}`], {
          [classes.contentShift]: open,
          [classes[`contentShift-${anchor}`]]: open
        })}>
            <div className={classNamesStr(classes.drawerHeader)} />
            <Typography>{'You think water moves fast? You should see ice.'}</Typography>
          </main>
          {after}
        </div>
      </div>;
  }

}

PersistentDrawer['propTypes'] = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), PersistentDrawer, {
  withTheme: true
})();