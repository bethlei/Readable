import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { styles } from './../utils/styles'
import Card, { CardContent } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import ThumbUpIcon from 'material-ui-icons/ThumbUp'
import ThumbDownIcon from 'material-ui-icons/ThumbDown'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import DeleteIcon from 'material-ui-icons/Delete'
import PersonIcon from 'material-ui-icons/Person'
import DateRangeIcon from 'material-ui-icons/DateRange'
import CommentIcon from 'material-ui-icons/Comment'
import SortMenu from './SortMenu';
import { changeSortOrder, updatePostScoreToServer } from './../actions'

class AllPosts extends Component {
  upVote = postId => {
    this.props.updateSinglePostVote(postId, 'upVote')
  };

  downVote = postId => {
    this.props.updateSinglePostVote(postId, 'downVote')
  };

  render() {
    const posts = this.props.posts
    const sortedPostIds = this.props.sortedPostIds
    const classes = this.props.classes

    return (
      <div className={classes.mainContentWrapper}>
        <SortMenu sortPosts={this.props.sortPosts} />
        <div className={classes.postWrapper}>
        {sortedPostIds.map(postId => (
        <Card className={classes.cardPost} key={ posts[postId].id }>
          <CardContent className={classes.cardContent}>
            <Link to ={ '/post/' + posts[postId].id } className={classes.postDetails}>{ posts[postId].title }</Link>
            <div><PersonIcon />{ posts[postId].author }</div>
            <div><DateRangeIcon />{ moment(posts[postId].timestamp).format('MMMM Do YYYY, h:mm:ss a') }</div>
            <div><CommentIcon />{ posts[postId].comments.length }</div>
            <div>{ posts[postId].body }</div>
          </CardContent>
          <div className={classes.cardControls}>
            <IconButton
              aria-label="Thumb Up"
              className={classes.iconButton}
              value={postId}
              onClick={() => this.upVote(postId)}>
              <ThumbUpIcon />
            </IconButton>
            <div className={classes.voteScore}>{ posts[postId].voteScore }</div>
            <IconButton
              aria-label="Thumb Down"
              className={classes.iconButton}
              value={postId}
              onClick={() => this.downVote(postId)}>
              <ThumbDownIcon />
            </IconButton>
            <Link to ='/'>
              <Button fab color="primary" aria-label="delete" className={classes.deletePostIcon}>
                <DeleteIcon />
              </Button>
            </Link>
            <Link to ={ '/post/edit/' + posts[postId].id }>
              <Button fab color="primary" aria-label="edit" className={classes.editPostIcon}>
                <ModeEditIcon />
              </Button>
            </Link>
          </div>
        </Card>
        ))}
        </div>
        <Link to ='/addpost'>
          <Button fab color="primary" aria-label="add" className={classes.addPostIcon}>
            <AddIcon />
          </Button>
        </Link>
      </div>
    )
  }
}

AllPosts.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapDispatchToProps = {
  sortPosts: changeSortOrder,
  updateSinglePostVote: updatePostScoreToServer,
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(AllPosts))
