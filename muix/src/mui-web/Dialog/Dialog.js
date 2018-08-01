// @inheritedComponent Modal
import React from 'react';
import { toAtomic } from '../styles/withStyles';

import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
import Modal from "../Modal/Modal";
import Fade from "../Fade/Fade";
import { duration } from '../styles/transitions';
import Paper from "../Paper/Paper";
export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the root element if `scroll="paper"`. */
  scrollPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  /* Styles applied to the root element if `scroll="bodyr"`. */
  scrollBody: {
    overflowY: 'auto',
    overflowX: 'hidden'
  },

  /* Styles applied to the `Paper` component. */
  paper: { ...toAtomic('margin', 48),
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflowY: 'auto',
    // Fix IE11 issue, to remove at some point.
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none'
  },

  /* Styles applied to the `Paper` component if `scroll="paper"`. */
  paperScrollPaper: {
    flex: '0 1 auto',
    maxHeight: 'calc(100% - 96px)'
  },

  /* Styles applied to the `Paper` component if `scroll="body"`. */
  paperScrollBody: { ...toAtomic('margin', '48px auto'),
    NAME$paperScrollBody21: true
  },

  /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
  paperWidthXs: {
    maxWidth: Math.max(theme.breakpoints.values.xs, 360),
    '&.paperScrollBody21': {
      [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 360) + 48 * 2)]: { ...toAtomic('margin', 48)
      }
    }
  },

  /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
  paperWidthSm: {
    maxWidth: theme.breakpoints.values.sm,
    '&.paperScrollBody21': {
      [theme.breakpoints.down(theme.breakpoints.values.sm + 48 * 2)]: { ...toAtomic('margin', 48)
      }
    }
  },

  /* Styles applied to the `Paper` component if `maxWidth="md"`. */
  paperWidthMd: {
    maxWidth: theme.breakpoints.values.md,
    '&.paperScrollBody21': {
      [theme.breakpoints.down(theme.breakpoints.values.md + 48 * 2)]: { ...toAtomic('margin', 48)
      }
    }
  },

  /* Styles applied to the `Paper` component if `fullWidth={true}`. */
  paperFullWidth: {
    width: '100%'
  },

  /* Styles applied to the `Paper` component if `fullScreen={true}`. */
  paperFullScreen: { ...toAtomic('margin', 0),
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    maxHeight: 'none',
    borderRadius: 0
  }
});
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */

function Dialog(props) {
  const {
    $system: {
      classNames,
      classNamesStr,
      theme
    },
    BackdropProps,
    children,
    classes,
    className,
    disableBackdropClick,
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    onBackdropClick,
    onClose,
    onEnter,
    onEntered,
    onEntering,
    onEscapeKeyDown,
    onExit,
    onExited,
    onExiting,
    open,
    PaperProps,
    scroll,
    TransitionComponent,
    transitionDuration,
    TransitionProps,
    ...other
  } = props;
  return <Modal className={classNames(classes.root, classes[`scroll${capitalize(scroll)}`], className)} BackdropProps={{
    transitionDuration,
    ...BackdropProps
  }} disableBackdropClick={disableBackdropClick} disableEscapeKeyDown={disableEscapeKeyDown} onBackdropClick={onBackdropClick} onEscapeKeyDown={onEscapeKeyDown} onClose={onClose} open={open} role="dialog" {...other}>
      <TransitionComponent appear in={open} timeout={transitionDuration} onEnter={onEnter} onEntering={onEntering} onEntered={onEntered} onExit={onExit} onExiting={onExiting} onExited={onExited} {...TransitionProps}>
        <Paper elevation={24} className={classNames(classes.paper, classes[`paperScroll${capitalize(scroll)}`], maxWidth && classes[`paperWidth${maxWidth ? capitalize(maxWidth) : ''}`], fullScreen && classes.paperFullScreen, fullWidth && classes.paperFullWidth)} {...PaperProps}>
          {children}
        </Paper>
      </TransitionComponent>
    </Modal>;
}

const defaultProps = Dialog.defaultProps = {
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  fullScreen: false,
  fullWidth: false,
  maxWidth: 'sm',
  scroll: 'paper',
  TransitionComponent: Fade,
  transitionDuration: {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  }
};

/**
* @type { import('reactxx-basic').WithStyleCreator<import('../typings/shapes/Dialog/Dialog').Shape>}
*/
export const DialogCreator = withStyles(styles, Dialog, {
  isMui: true,
  defaultProps
});
const DialogComponent = DialogCreator();
if (Dialog.muiName) DialogComponent.muiName = Dialog.muiName;
export default DialogComponent;