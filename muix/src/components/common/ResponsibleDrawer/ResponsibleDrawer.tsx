﻿import React from 'react'
import ReactN from 'react-native'
import { withStyles, sheetCreator } from 'muix-styles'
import { ViewX, TextX, Typography } from 'muix-primitives'

import Drawer from 'muix-components/Drawer/Drawer';
import AppBar from 'muix-components/Drawer/Drawer';
import Toolbar from 'muix-components/Drawer/Drawer';
import IconButton from 'muix-components/IconButton/IconButton';
import Hidden from 'muix-components/Hidden/Hidden';
import Divider from 'muix-components/Divider/Divider';

const drawerWidth = 240

export const sheet = sheetCreator<MuixResponsibleDrawer.Shape>(({ typographyX: typoX, spacing, breakpoints, mixins, palette }) => ({
  root: {
    width: '100%',
    height: 430,
    marginTop: spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  style: {},
  appFrame: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: {
    $web: mixins.toolbar,
  },
  drawerPaper: {
    width: 250,
    [breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
    },
  },
  content: {
    backgroundColor: palette.background.default,
    width: '100%',
    padding: spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
}))

class ResponsiveDrawer extends React.Component<Muix.CodeProps<MuixResponsibleDrawer.Shape>> {
  state = {
    mobileOpen: false,
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  render() {

    const { classes, theme, getStyleWithSideEffect } = this.props

    const drawer = <ViewX>
      <ViewX className={classes.drawerHeader}>
        <TextX>drawerHeader</TextX>
      </ViewX>
      <Divider />
      <TextX>mailFolderListItems</TextX>
      <Divider />
      <TextX>otherMailFolderListItems</TextX>
    </ViewX>


    return <ViewX className={classes.root}>
      <ViewX className={classes.appFrame}>
        <AppBar classesInCode={classes.appBar}>
          <Toolbar>
            <IconButton color="contrast" onClick={this.handleDrawerToggle} classesInCode={{ root: classes.navIconHide }} >
              {/*<MenuIcon />*/}
            </IconButton>
            <Typography color='inherit' noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            type="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            classesInCode={{ paper: classes.drawerPaper }}
            onClose={this.handleDrawerToggle}
            ModalProps={{ keepMounted: true, /*Better open performance on mobile*/ }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer type="permanent" open classesInCode={{ paper: classes.drawerPaper }}>{drawer}</Drawer>
        </Hidden>
        <ViewX className={classes.content}>
          <Typography noWrap>You think water moves fast? You should see ice.</Typography>
        </ViewX>
      </ViewX>
    </ViewX>
  }
}

export default withStyles(sheet, { name: 'MuiResponsiveDrawer' })(ResponsiveDrawer);

/*
  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <ViewX>
        <ViewX className={classes.drawerHeader}>
          <TextX>drawerHeader</TextX>
        </ViewX>
        <Divider />
        <TextX>mailFolderListItems</TextX>
        <Divider />
        <TextX>otherMailFolderListItems</TextX>
      </ViewX>
    );

    return (
      <ViewX className={classes.root}>
        <ViewX className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                Responsive drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              type="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              type="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
          </main>
        </ViewX>
      </ViewX>
    );
  }

*/