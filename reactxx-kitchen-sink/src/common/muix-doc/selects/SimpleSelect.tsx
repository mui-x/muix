import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Input from 'reactxx-muix/current/Input/Input';
import InputLabel from 'reactxx-muix/current/InputLabel/InputLabel';
import MenuItem from 'reactxx-muix/current/MenuItem/MenuItem';
import FormHelperText from 'reactxx-muix/current/FormHelperText/FormHelperText';
import FormControl from 'reactxx-muix/current/FormControl/FormControl';
import Select from 'reactxx-muix/current/Select/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class SimpleSelect extends React.Component<any, any> {
  state: any = {
    age: '',
    name: 'hai'
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {
      classes
    } = this.props;
    return <form className={classNamesStr(classes.root)} autoComplete="off">
        <FormControl className={classNames(classes.formControl)}>
          <InputLabel htmlFor="age-simple">Age</InputLabel>
          <Select value={this.state.age} onChange={this.handleChange} inputProps={{
          name: 'age',
          id: 'age-simple'
        }}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classNames(classes.formControl)}>
          <InputLabel htmlFor="age-helper">Age</InputLabel>
          <Select value={this.state.age} onChange={this.handleChange} input={<Input name="age" id="age-helper" />}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>
        <FormControl className={classNames(classes.formControl)}>
          <Select value={this.state.age} onChange={this.handleChange} displayEmpty name="age" className={classNames(classes.selectEmpty)}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Without label</FormHelperText>
        </FormControl>
        <FormControl className={classNames(classes.formControl)}>
          <InputLabel shrink htmlFor="age-label-placeholder">
            Age
          </InputLabel>
          <Select value={this.state.age} onChange={this.handleChange} input={<Input name="age" id="age-label-placeholder" />} displayEmpty name="age" className={classNames(classes.selectEmpty)}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Label + placeholder</FormHelperText>
        </FormControl>
        <FormControl className={classNames(classes.formControl)} disabled>
          <InputLabel htmlFor="name-disabled">Name</InputLabel>
          <Select value={this.state.name} onChange={this.handleChange} input={<Input name="name" id="name-disabled" />}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="hai">Hai</MenuItem>
            <MenuItem value="olivier">Olivier</MenuItem>
            <MenuItem value="kevin">Kevin</MenuItem>
          </Select>
          <FormHelperText>Disabled</FormHelperText>
        </FormControl>
        <FormControl className={classNames(classes.formControl)} error>
          <InputLabel htmlFor="name-error">Name</InputLabel>
          <Select value={this.state.name} onChange={this.handleChange} name="name" renderValue={value => `⚠️  - ${value}`} input={<Input id="name-error" />}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="hai">Hai</MenuItem>
            <MenuItem value="olivier">Olivier</MenuItem>
            <MenuItem value="kevin">Kevin</MenuItem>
          </Select>
          <FormHelperText>Error</FormHelperText>
        </FormControl>
        <FormControl className={classNames(classes.formControl)}>
          <InputLabel htmlFor="name-readonly">Name</InputLabel>
          <Select value={this.state.name} onChange={this.handleChange} input={<Input name="name" id="name-readonly" readOnly />}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="hai">Hai</MenuItem>
            <MenuItem value="olivier">Olivier</MenuItem>
            <MenuItem value="kevin">Kevin</MenuItem>
          </Select>
          <FormHelperText>Read only</FormHelperText>
        </FormControl>
        <FormControl className={classNames(classes.formControl)}>
          <InputLabel htmlFor="age-auto-width">Age</InputLabel>
          <Select value={this.state.age} onChange={this.handleChange} input={<Input name="age" id="age-auto-width" />} autoWidth>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Auto width</FormHelperText>
        </FormControl>
        <FormControl className={classNames(classes.formControl)}>
          <Select value={this.state.age} onChange={this.handleChange} name="age" displayEmpty className={classNames(classes.selectEmpty)}>
            <MenuItem value="" disabled>
              Placeholder
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Placeholder</FormHelperText>
        </FormControl>
        <FormControl required className={classNames(classes.formControl)}>
          <InputLabel htmlFor="age-required">Age</InputLabel>
          <Select value={this.state.age} onChange={this.handleChange} name="age" inputProps={{
          id: 'age-required'
        }} className={classNames(classes.selectEmpty)}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
      </form>;
  }

}

SimpleSelect['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), SimpleSelect)();