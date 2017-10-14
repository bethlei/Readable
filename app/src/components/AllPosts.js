import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { styles } from './../utils/styles'
import SortMenu from './SortMenu';
import { changeSortOrder } from './../actions'

class AllPosts extends Component {
  render() {
    const posts = this.props.posts
    const sortedPostIds = this.props.sortedPostIds
    const classes = this.props.classes

    return (
      <div className={classes.mainContentWrapper}>
        <div>Main - all posts list view</div>
        <SortMenu sortPosts={this.props.sortPosts} />
        {sortedPostIds.map(postId => (
        <ul key={ posts[postId].id }>
          <li><Link to ={ '/post/' + posts[postId].id } className={classes.postDetails}>{ posts[postId].title }</Link></li>
          <li>{ posts[postId].body }</li>
          <li>{ posts[postId].author }</li>
          <li>{ posts[postId].voteScore }</li>
          <li>{ moment(posts[postId].timestamp).format('MMMM Do YYYY, h:mm:ss a') }</li>
          <li>{ posts[postId].comments.length }</li>
          <div className="edit-post-container">
            <Link to ={ '/post/edit/' + posts[postId].id } className={classes.editPost}>Edit Post</Link>
          </div>
          <div className={classes.deletePostContainer}>
            <Link to ='/' className={classes.deletePost}>Delete Post</Link>
          </div>
        </ul>
        ))}
        <div className={classes.addPostContainer}>
          <Link to ='/addpost' className={classes.addPost}>Add Post</Link>
        </div>
      </div>

    )
  }
}

AllPosts.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapDispatchToProps = {
  sortPosts: changeSortOrder
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(AllPosts))
