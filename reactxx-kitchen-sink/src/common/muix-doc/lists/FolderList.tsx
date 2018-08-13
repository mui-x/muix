import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import List from 'reactxx-muix/current/List/List';
import ListItem from 'reactxx-muix/current/ListItem/ListItem';
import ListItemText from 'reactxx-muix/current/ListItemText/ListItemText';
import Avatar from 'reactxx-muix/current/Avatar/Avatar';
import ImageIcon from 'reactxx-icons/Image';
import WorkIcon from 'reactxx-icons/Work';
import BeachAccessIcon from 'reactxx-icons/BeachAccess';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function FolderList(props) {
  const {
    classes
  } = props;
  return <div className={classNamesStr(classes.root)}>
      <List>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <Avatar>
            <WorkIcon />
          </Avatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    </div>;
}

FolderList['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), FolderList)();