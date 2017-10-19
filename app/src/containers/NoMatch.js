import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { styles } from './../utils/styles'

const NoMatch = (props) => {
  const classes = props.classes

  return (
    <div className={classes.errorContainer}>
      <h1 className={classes.error404}>404</h1>
      <p className={classes.errorReturn}>Take me back to the <Link to='/' className={classes.errorReturnLink}>Home page</Link></p>
    </div>
  )
}

NoMatch.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NoMatch)
