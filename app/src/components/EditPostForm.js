import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
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

let postId

class EditPostForm extends Component {
  state = {
    category: '',
  };

  handleChange = category => event => {
    let newCat = this.props.change('category', event.target.value)
    this.setState({ category: newCat })
  };

  renderTextField({ input, label, meta: { touched, error }, ...custom }) {
    return (
      <TextField
        label={label}
        helperText={touched && (error && <span style={{color:`red`,}}>{error}</span>)}
        {...input}
        {...custom}
      />
    )
  }

  renderSelect = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <FormControl style={{width: `75%`,marginBottom: `24px`,}}>
      <InputLabel htmlFor='category'>Category</InputLabel>
      <Select
        label={label}
        {...input}
        children={children}
        {...custom}
        onChange={this.handleChange('category',this.state.category)}
        input={<Input id='category' style={{textAlign:`left`,}}/>}
      />
      {touched && (error && <FormHelperText style={{color:`red`,}}>{error}</FormHelperText>)}
    </FormControl>
  )

  onSubmit(values) {
    const postId = this.props.match.params.post
    this.props.editPost(postId, values, () => {
      this.props.history.push("/")
    })
  }

  render() {
    const classes = this.props.classes
    const categories = ['react', 'redux', 'udacity']
    const { handleSubmit } = this.props
    postId = this.props.post.id

    return (
      <div className={classes.mainContentWrapper}>
      <Grid item xs={12}>
        <h1 className={classes.sectionHeader}>Edit Post</h1>
      </Grid>
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
          label='Post'
          component={this.renderTextField}
          type='text'
          className={classes.textField}
          multiline
          rows='4'
        />

        <div className={classes.buttonGroup}>
          <Link to='/' className={classes.cancelButtonWrapper}>
            <Button raised color="accent" className={classes.cancelButton}>
              Cancel
            </Button>
          </Link>
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

EditPostForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

EditPostForm = withStyles(styles)(reduxForm({
  form: 'EditPostForm',
  asyncValidate,
  validate,
})(EditPostForm))

EditPostForm = connect(state => ({
    initialValues: state.posts[postId]
}))(EditPostForm)

export default EditPostForm
