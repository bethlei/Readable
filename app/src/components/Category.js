import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { styles } from './../utils/styles'
import Button from 'material-ui/Button'

const Category = (props) => {
  const categories = ['react', 'redux', 'udacity']
  const classes = props.classes

  return (
    <div className={classes.category}>
      <Link className={classes.catLink} to='/'>
        <Button color="contrast" dense classes={{
          root: classes.button,
          label: classes.catLabel,
        }}>{props.children ? props.children : `All Posts`}</Button>
      </Link>
      {categories.map(category => (
      <Link className={classes.catLink} to={`/category/${category}`} key={category}>
        <Button color="contrast" dense classes={{
          root: classes.button,
          label: classes.catLabel,
        }}>{props.children ? props.children : category}</Button>
      </Link>
      ))}
    </div>
  )
}

Category.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Category)
