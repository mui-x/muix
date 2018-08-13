import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Input from 'reactxx-muix/current/Input/Input';
import InputLabel from 'reactxx-muix/current/InputLabel/InputLabel';
import FormHelperText from 'reactxx-muix/current/FormHelperText/FormHelperText';
import FormControl from 'reactxx-muix/current/FormControl/FormControl';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

class ComposedTextField extends React.Component<any, any> {
  state: any = {
    name: 'Composed TextField'
  };
  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    const {
      classes
    } = this.props;
    return <div className={classNamesStr(classes.container)}>
        <FormControl className={classNames(classes.formControl)}>
          <InputLabel htmlFor="name-simple">Name</InputLabel>
          <Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
        </FormControl>
        <FormControl className={classNames(classes.formControl)} aria-describedby="name-helper-text">
          <InputLabel htmlFor="name-helper">Name</InputLabel>
          <Input id="name-helper" value={this.state.name} onChange={this.handleChange} />
          <FormHelperText id="name-helper-text">Some important helper text</FormHelperText>
        </FormControl>
        <FormControl className={classNames(classes.formControl)} disabled>
          <InputLabel htmlFor="name-disabled">Name</InputLabel>
          <Input id="name-disabled" value={this.state.name} onChange={this.handleChange} />
          <FormHelperText>Disabled</FormHelperText>
        </FormControl>
        <FormControl className={classNames(classes.formControl)} error aria-describedby="name-error-text">
          <InputLabel htmlFor="name-error">Name</InputLabel>
          <Input id="name-error" value={this.state.name} onChange={this.handleChange} />
          <FormHelperText id="name-error-text">Error</FormHelperText>
        </FormControl>
      </div>;
  }

}

ComposedTextField['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), ComposedTextField)();