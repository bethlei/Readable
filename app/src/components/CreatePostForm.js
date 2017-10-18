import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { styles } from './../utils/styles'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Select from 'material-ui/Select'
import MenuItem from 'material-ui/Menu/MenuItem'
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import Button from 'material-ui/Button'
import asyncValidate from './../utils/asyncValidate'

class CreatePostForm extends Component {
  state = {
    category: '',
  };

  handleChange = category => event => {
    this.setState({ [category]: event.target.value });
  };

  renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField
      label={label}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )

  renderSelect = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <FormControl style={{width: `75%`,marginBottom: `24px`,}}>
      <InputLabel htmlFor='category'>Category</InputLabel>
      <Select
        label={label}
        helperText={touched && error}
        {...input}
        children={children}
        {...custom}
        value={this.state.category}
        onChange={this.handleChange('category')}
        input={<Input id='category' type='text' style={{textAlign:`left`,}}/>}
      />
    </FormControl>
  )

  onSubmit(values) {
    console.log('form values', values)

    this.props.addPostToServer(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const classes = this.props.classes
    const categories = ['react', 'redux', 'udacity']
    const { handleSubmit } = this.props

    return (
      <div className={classes.mainContentWrapper}>
      <Grid item xs={12}>
      <form className={classes.formWrapper} onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name='title'
          label='Title'
          component={this.renderTextField}
          type='text'
          className={classes.textField}
        />

        <Field
          name='author'
          label='Author'
          component={this.renderTextField}
          type='text'
          className={classes.textField}
        />

        <Field
          name='category'
          label='Category'
          component={this.renderSelect}
        >
          {categories.map(option => (
            <MenuItem key={option} value={option} className={classes.categoryMenuItem}>
              {option}
            </MenuItem>
          ))}
        </Field>

        <Field
          name='body'
          label='Enter Post'
          component={this.renderTextField}
          type='text'
          className={classes.textField}
          multiline
          rows='4'
        />

        <div className={classes.buttonGroup}>
          <Button raised color="accent" className={classes.cancelButton}>
            Cancel
          </Button>
          <Button type="submit" raised color="primary" className={classes.submitButton}>
            Submit
          </Button>
        </div>
      </form>
      </Grid>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}
  const requiredFields = [ 'title', 'author', 'category', 'body' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  return errors
}

CreatePostForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(reduxForm({
  form: 'AddPostForm',
  validate,
  asyncValidate,
})(CreatePostForm))
