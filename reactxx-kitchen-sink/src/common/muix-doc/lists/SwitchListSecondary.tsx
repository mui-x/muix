import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import List from 'reactxx-muix/current/List/List';
import ListItem from 'reactxx-muix/current/ListItem/ListItem';
import ListItemIcon from 'reactxx-muix/current/ListItemIcon/ListItemIcon';
import ListItemSecondaryAction from 'reactxx-muix/current/ListItemSecondaryAction/ListItemSecondaryAction';
import ListItemText from 'reactxx-muix/current/ListItemText/ListItemText';
import ListSubheader from 'reactxx-muix/current/ListSubheader/ListSubheader';
import Switch from 'reactxx-muix/current/Switch/Switch';
import WifiIcon from 'reactxx-icons/Wifi';
import BluetoothIcon from 'reactxx-icons/Bluetooth';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class SwitchListSecondary extends React.Component<any, any> {
  state: any = {
    checked: ['wifi']
  };
  handleToggle = value => () => {
    const {
      checked
    } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  render() {
    const {
      classes
    } = this.props;
    return <div className={classNamesStr(classes.root)}>
        <List subheader={<ListSubheader>Settings</ListSubheader>}>
          <ListItem>
            <ListItemIcon>
              <WifiIcon />
            </ListItemIcon>
            <ListItemText primary="Wi-Fi" />
            <ListItemSecondaryAction>
              <Switch onChange={this.handleToggle('wifi')} checked={this.state.checked.indexOf('wifi') !== -1} />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BluetoothIcon />
            </ListItemIcon>
            <ListItemText primary="Bluetooth" />
            <ListItemSecondaryAction>
              <Switch onChange={this.handleToggle('bluetooth')} checked={this.state.checked.indexOf('bluetooth') !== -1} />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>;
  }

}

SwitchListSecondary['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), SwitchListSecondary)();