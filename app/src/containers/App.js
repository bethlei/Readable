import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { styles } from './../utils/styles'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Category from './../components/Category.js'



class App extends Component {




  render() {
    const classes = this.props.classes;

    return (
      <Router>
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Paper className={classes.header}><Link className={classes.header} to='/'>Readable</Link></Paper>
            </Grid>
            <Grid item xs={12}>
              <Category />
            </Grid>
            <Switch>
              <Route exact path='/' render={() => (
                <Grid item xs={12}>
                  <Paper className={classes.paper}>Main - list all post view</Paper>
                </Grid>
              )} />
              <Route path='/category' render={() => (
                <Grid item xs={12}>
                  <Paper className={classes.paper}>Main - category list post view</Paper>
                </Grid>
              )} />
              <Route path='/postdetails' render={() => (
                <Grid item xs={12}>
                  <Paper className={classes.paper}>Main - show post details view</Paper>
                </Grid>
              )} />
              <Route path='/addpost' render={() => (
                <Grid item xs={12}>
                  <Paper className={classes.paper}>Main - add post form view</Paper>
                </Grid>
              )} />
              <Route path='/editpost' render={() => (
                <Grid item xs={12}>
                  <Paper className={classes.paper}>Main - edit post form view</Paper>
                </Grid>
              )} />
              <Route render={() => (
                <Grid item xs={12}>
                  <Paper className={classes.paper}>No match</Paper>
                </Grid>
              )} />
            </Switch>
          </Grid>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
