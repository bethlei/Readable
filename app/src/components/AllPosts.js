import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { styles } from './../utils/styles'
import Grid from 'material-ui/Grid'
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
import { changeSortOrder } from './../actions'

class AllPosts extends Component {
  upVote = postId => {
    this.props.updateSinglePostVote(postId, 'upVote')
  }

  downVote = postId => {
    this.props.updateSinglePostVote(postId, 'downVote')
  }

  deleteSinglePost = postId => {
    this.props.deletePost(postId)
  }

  render() {
    const posts = this.props.posts
    const sortedPostIds = this.props.sortedPostIds
    const classes = this.props.classes

    return (
      <div className={classes.mainContentWrapper}>
      <Grid item xs={12}>
        <SortMenu sortPosts={this.props.sortPosts} />
        <div className={classes.postWrapper}>
        {sortedPostIds.map(postId => (
        <Card className={classes.cardPost} key={ posts[postId].id }>
          <CardContent className={classes.cardContent}>
            <Link to ={ '/post/' + posts[postId].id } className={classes.postTitle}>{ posts[postId].title }</Link>
            <div className={classes.postInfo}><PersonIcon /><span className={classes.postInfoText}>{ posts[postId].author }</span></div>
            <div className={classes.postInfo}><DateRangeIcon /><span className={classes.postInfoText}>{ moment(posts[postId].timestamp).format('MMMM Do YYYY, h:mm:ss a') }</span></div>
            <div className={classes.postInfo}><CommentIcon /><span className={classes.postInfoText}>{ posts[postId].comments.length } comments</span></div>
            <div className={classes.postBody}>{ posts[postId].body }</div>
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
            <Button onClick={() => this.deleteSinglePost(postId)} fab color="primary" aria-label="delete" className={classes.deletePostIcon}>
              <DeleteIcon />
            </Button>
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
        </Grid>
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
