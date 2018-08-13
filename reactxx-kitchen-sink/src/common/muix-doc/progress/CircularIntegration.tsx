import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import CircularProgress from 'reactxx-muix/current/CircularProgress/CircularProgress';
import green from 'reactxx-mui-web/colors/green';
import Button from 'reactxx-muix/current/Button/Button';
import CheckIcon from 'reactxx-icons/Check';
import SaveIcon from 'reactxx-icons/Save';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative'
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
});

class CircularIntegration extends React.Component<any, any> {
  timer = null;
  state: any = {
    loading: false,
    success: false
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleButtonClick = () => {
    if (!this.state.loading) {
      this.setState({
        success: false,
        loading: true
      }, () => {
        this.timer = setTimeout(() => {
          this.setState({
            loading: false,
            success: true
          });
        }, 2000);
      });
    }
  };

  render() {
    const {
      loading,
      success
    } = this.state;
    const {
      classes
    } = this.props;
    const buttonClassname = classNames({
      [classes.buttonSuccess]: success
    });
    return <div className={classNamesStr(classes.root)}>
        <div className={classNamesStr(classes.wrapper)}>
          <Button variant="fab" color="primary" className={classNames(buttonClassname)} onClick={this.handleButtonClick}>
            {success ? <CheckIcon /> : <SaveIcon />}
          </Button>
          {loading && <CircularProgress size={68} className={classNames(classes.fabProgress)} />}
        </div>
        <div className={classNamesStr(classes.wrapper)}>
          <Button variant="contained" color="primary" className={classNames(buttonClassname)} disabled={loading} onClick={this.handleButtonClick}>
            Accept terms
          </Button>
          {loading && <CircularProgress size={24} className={classNames(classes.buttonProgress)} />}
        </div>
      </div>;
  }

}

CircularIntegration['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), CircularIntegration)();