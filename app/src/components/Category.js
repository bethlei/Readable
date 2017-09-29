import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { styles } from './../utils/styles'
import Button from 'material-ui/Button';


function doSomething(event) {
  console.log(event.currentTarget.getAttribute(`data-something`));
}

class Category extends Component {

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.category}>
        <Button color="contrast" dense classes={{
          root: classes.button,
          label: classes.catLabel,
        }} onClick={doSomething} data-something="all posts">{this.props.children ? this.props.children : <Link  className={classes.catLink} to='/'>All Posts</Link>}</Button>


        <Button color="contrast" dense classes={{
          root: classes.button,
          label: classes.catLabel,
        }} onClick={doSomething} data-something="React">{this.props.children ? this.props.children : <Link  className={classes.catLink} to='/category/react'>React</Link>}</Button>

        <Button color="contrast" dense classes={{
          root: classes.button,
          label: classes.catLabel,
        }} onClick={doSomething} data-something="Redux">{this.props.children ? this.props.children : <Link  className={classes.catLink} to='/category/redux'>Redux</Link>}</Button>

        <Button color="contrast" dense classes={{
          root: classes.button,
          label: classes.catLabel,
        }} onClick={doSomething} data-something="Udacity">{this.props.children ? this.props.children : <Link  className={classes.catLink} to='/category/udacity'>Udacity</Link>}</Button>
      </div>
    );
  }
}

Category.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Category);
