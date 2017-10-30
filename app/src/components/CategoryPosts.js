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
import Tooltip from 'material-ui/Tooltip'
import SortMenu from './SortMenu';
import { changeSortOrder } from './../actions'

class CategoryPosts extends Component {
  upVote = postId => {
    this.props.updateSinglePostVote(postId, 'upVote')
  }

  downVote = postId => {
    this.props.updateSinglePostVote(postId, 'downVote')
  }

  deleteSinglePost = postId => {
    this.props.deletePost(postId, () => {
      this.props.history.push("/")
    })
  }

  render() {
    const posts = this.props.posts
    const sortedPostIds = this.props.sortedPostIds
    const { category } = this.props.match.params
    const classes = this.props.classes

    return (
      <div className={classes.mainContentWrapper}>
      <Grid item xs={12}>
        <SortMenu sortPosts={this.props.sortPosts} />
        <div className={classes.postWrapper}>
        {sortedPostIds
          .filter(postId => posts[postId].category === category)
          .map(postId => (
        <Card className={classes.cardPost} key={ posts[postId].id }>
          <CardContent className={classes.cardContent}>
            <Link to ={`/post/${posts[postId].id}`} className={classes.postTitle}>{ posts[postId].title }</Link>
            <div className={classes.postInfo}><PersonIcon /><span className={classes.postInfoText}>{ posts[postId].author }</span></div>
            <div className={classes.postInfo}><DateRangeIcon /><span className={classes.postInfoText}>{ moment(posts[postId].timestamp).format('MMMM Do YYYY, h:mm:ss a') }</span></div>
            <div className={classes.postInfo}><CommentIcon /><span className={classes.postInfoText}>{ posts[postId].comments.length } { posts[postId].comments.length > 1 ? `comments` : `comment` }</span></div>
            <div className={classes.postBody}>{ posts[postId].body }</div>
          </CardContent>
          <div className={classes.cardControls}>
            <Tooltip id="upvote-post" title="Upvote Post" placement="top">
            <IconButton
              aria-label="Upvote Post"
              className={classes.iconButton}
              value={postId}
              onClick={() => this.upVote(postId)}>
              <ThumbUpIcon />
            </IconButton>
            </Tooltip>
            <div className={classes.voteScore}>{ posts[postId].voteScore }</div>
            <Tooltip id="downvote-post" title="Downvote Post" placement="top">
            <IconButton
              aria-label="Downvote Post"
              className={classes.iconButton}
              value={postId}
              onClick={() => this.downVote(postId)}>
              <ThumbDownIcon />
            </IconButton>
            </Tooltip>
            <Tooltip id="delete-post" title="Delete Post" placement="top">
            <Button onClick={() => this.deleteSinglePost(postId)} fab color="primary" aria-label="Delete Post" className={classes.deletePostIcon}>
              <DeleteIcon />
            </Button>
            </Tooltip>
            <Link to ={`/post/edit/${posts[postId].id}`}>
              <Tooltip id="edit-post" title="Edit Post" placement="top">
              <Button fab color="primary" aria-label="Edit Post" className={classes.editPostIcon}>
                <ModeEditIcon />
              </Button>
              </Tooltip>
            </Link>
          </div>
        </Card>
        ))}
        </div>
        <Link to ='/addpost'>
          <Tooltip id="add-post" title="Add Post" placement="top">
          <Button fab color="primary" aria-label="Add Post" className={classes.addPostIcon}>
            <AddIcon />
          </Button>
          </Tooltip>
        </Link>
      </Grid>
      </div>
    )
  }
}

CategoryPosts.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapDispatchToProps = {
  sortPosts: changeSortOrder
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(CategoryPosts))
