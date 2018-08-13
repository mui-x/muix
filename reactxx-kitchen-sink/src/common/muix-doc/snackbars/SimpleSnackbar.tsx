import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Button from 'reactxx-muix/current/Button/Button';
import Snackbar from 'reactxx-muix/current/Snackbar/Snackbar';
import IconButton from 'reactxx-muix/current/IconButton/IconButton';
import CloseIcon from 'reactxx-icons/Close';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  }
});

class SimpleSnackbar extends React.Component<any, any> {
  state: any = {
    open: false
  };
  handleClick = () => {
    this.setState({
      open: true
    });
  };
  handleClose = (event, reason?) => {
    if (reason === 'clickaway') {
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
    return <div>
        <Button onClick={this.handleClick}>Open simple snackbar</Button>
        <Snackbar anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }} open={this.state.open} autoHideDuration={6000} onClose={this.handleClose} ContentProps={{
        'aria-describedby': 'message-id'
      }} message={<span id="message-id">Note archived</span>} action={[<Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              UNDO
            </Button>, <IconButton key="close" aria-label="Close" color="inherit" className={classNames(classes.close)} onClick={this.handleClose}>
              <CloseIcon />
            </IconButton>]} />
      </div>;
  }

}

SimpleSnackbar['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), SimpleSnackbar)();