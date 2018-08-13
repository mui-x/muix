import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Button from 'reactxx-muix/current/Button/Button';
import Tooltip from 'reactxx-muix/current/Tooltip/Tooltip';

const styles = theme => ({
  lightTooltip: {
    background: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    fontSize: 11
  },
  arrowPopper: {
    '&[x-placement*="bottom"] $arrowArrow': {
      top: 0,
      left: 0,
      marginTop: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${theme.palette.grey[700]} transparent`
      }
    },
    '&[x-placement*="top"] $arrowArrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${theme.palette.grey[700]} transparent transparent transparent`
      }
    },
    '&[x-placement*="right"] $arrowArrow': {
      left: 0,
      marginLeft: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${theme.palette.grey[700]} transparent transparent`
      }
    },
    '&[x-placement*="left"] $arrowArrow': {
      right: 0,
      marginRight: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${theme.palette.grey[700]}`
      }
    }
  },
  arrowArrow: {
    position: 'absolute',
    fontSize: 7,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid'
    }
  },
  button: {
    margin: theme.spacing.unit
  }
});

class CustomizedTooltips extends React.Component<any, any> {
  state: any = {
    arrowRef: null
  };
  handleArrowRef = node => {
    this.setState({
      arrowRef: node
    });
  };

  render() {
    const {
      classes
    } = this.props;
    return <div>
        <Tooltip title="Add">
          <Button className={classNames(classes.button)}>Default</Button>
        </Tooltip>
        <Tooltip title="Add" classes={{
        tooltip: classes.lightTooltip
      }}>
          <Button className={classNames(classes.button)}>Light</Button>
        </Tooltip>
        <Tooltip title={<React.Fragment>
              Add
              <span className={classNamesStr(classes.arrowArrow)} ref={this.handleArrowRef} />
            </React.Fragment>} classes={{
        popper: classes.arrowPopper
      }} PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(this.state.arrowRef),
              element: this.state.arrowRef
            }
          }
        }
      }}>
          <Button className={classNames(classes.button)}>Arrow</Button>
        </Tooltip>
      </div>;
  }

}

CustomizedTooltips['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), CustomizedTooltips)();