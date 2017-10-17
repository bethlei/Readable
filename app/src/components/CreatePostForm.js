import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { styles } from './../utils/styles'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Select from 'material-ui/Select'
import MenuItem from 'material-ui/Menu/MenuItem'
import Input from 'material-ui/Input'
import { InputLabel } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import Button from 'material-ui/Button'
import asyncValidate from './../utils/asyncValidate'

class CreatePostForm extends Component {
  renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField
      label={label}
      {...input}
      {...custom}
    />
  )

  renderSelect = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <FormControl
      style={{
        width: `75%`,
        marginBottom: `24px`,
      }}
    >
    <InputLabel htmlFor="category">Category</InputLabel>
    <Select
      label={label}
      {...input}
      onChange={(event, index, value) => input.onChange(value)}
      children={children}
      {...custom}
      input={<Input id="category" />} />
      </FormControl>
  )

  render() {
    const classes = this.props.classes
    const categories = ['react', 'redux', 'udacity']

    return (
      <div className={classes.mainContentWrapper}>
      <Grid item xs={12}>
      <form className={classes.formWrapper}>
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

        <Field name="favoriteColor" component={this.renderSelect} label="Favorite Color">
          <MenuItem value={`react`} className={classes.categoryMenuItem}>React</MenuItem>
          <MenuItem value={`redux`} className={classes.categoryMenuItem}>Redux</MenuItem>
          <MenuItem value={`udacity`} className={classes.categoryMenuItem}>Udacity</MenuItem>
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
          <Button raised color="primary" className={classes.submitButton}>
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
  const requiredFields = [ 'title', 'author', 'body' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
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
