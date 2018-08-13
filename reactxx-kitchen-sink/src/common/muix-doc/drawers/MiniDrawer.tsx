import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Drawer from 'reactxx-muix/current/Drawer/Drawer';
import AppBar from 'reactxx-muix/current/AppBar/AppBar';
import Toolbar from 'reactxx-muix/current/Toolbar/Toolbar';
import List from 'reactxx-muix/current/List/List';
import Typography from 'reactxx-muix/current/Typography/Typography';
import Divider from 'reactxx-muix/current/Divider/Divider';
import IconButton from 'reactxx-muix/current/IconButton/IconButton';
import MenuIcon from 'reactxx-icons/Menu';
import ChevronLeftIcon from 'reactxx-icons/ChevronLeft';
import ChevronRightIcon from 'reactxx-icons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

class MiniDrawer extends React.Component<any, any> {
  state: any = {
    open: false
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

  render() {
    const {
      classes,
      theme
    } = this.props;
    return <div className={classNamesStr(classes.root)}>
        <AppBar position="absolute" className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
          <Toolbar disableGutters={!this.state.open}>
            <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen} className={classNames(classes.menuButton, this.state.open && classes.hide)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Mini variant drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" classes={{
        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
      }} open={this.state.open}>
          <div className={classNamesStr(classes.toolbar)}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </Drawer>
        <main className={classNamesStr(classes.content)}>
          <div className={classNamesStr(classes.toolbar)} />
          <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
        </main>
      </div>;
  }

}

MiniDrawer['propTypes'] = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), MiniDrawer, {
  withTheme: true
})();