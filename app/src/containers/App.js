import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { styles } from './../utils/styles'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import { fetchAllPosts } from './../actions'
import Category from './../components/Category'
import { ListAllPosts, ListCategoryPosts } from './ListPosts'
import PostDetails from './PostDetails'
import EditPost from './EditPost'
import { CreatePost } from './CreatePost'
import NoMatch from './NoMatch'

class App extends Component {
  state = {
    fetchPosts: true
  }

  componentDidMount() {
    if (this.state.fetchPosts) {
      this.props.getPosts()
      this.setState({
        fetchPosts: false
      })
    }
  }

  render() {
    const classes = this.props.classes

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
                  <Paper className={classes.paper}><ListAllPosts /></Paper>
                </Grid>
              )} />
              <Route exact path='/category/:category?' render={(props) => (
                <Grid item xs={12}>
                  <Paper className={classes.paper}><ListCategoryPosts {...props} /></Paper>
                </Grid>
              )} />
              <Route exact path='/post/:post?' render={() => (
                <Grid item xs={12}>
                  <Paper className={classes.paper}><PostDetails /></Paper>
                </Grid>
              )} />
              <Route exact path='/post/edit/:post?' render={() => (
                <Grid item xs={12}>
                  <Paper className={classes.paper}><EditPost /></Paper>
                </Grid>
              )} />
              <Route exact path='/addpost' render={(props) => (
                <Grid item xs={12}>
                  <Paper className={classes.paper}><CreatePost {...props} /></Paper>
                </Grid>
              )} />
              <Route render={(props) => (
                <Grid item xs={12}>
                  <Paper className={classes.paper}><NoMatch {...props} /></Paper>
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
}

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = {
  getPosts: fetchAllPosts
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App))
