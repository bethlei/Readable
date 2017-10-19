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
      <Button color="contrast" dense classes={{
        root: classes.button,
        label: classes.catLabel,
      }}>{props.children ? props.children : <Link className={classes.catLink} to='/'>All Posts</Link>}</Button>

      {categories.map(category => (
        <Button color="contrast" dense classes={{
          root: classes.button,
          label: classes.catLabel,
        }} key={category}>{props.children ? props.children : <Link className={classes.catLink} to={'/category/' + category}>{category}</Link>}</Button>
      ))}
    </div>
  )
}

Category.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Category)
