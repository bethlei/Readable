import React, { Component } from 'react'
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

class Post extends Component {
  state = {
    showAddCommentModal: false,
    showEditCommentModal: false,
  };

  OpenAddCommentModal = ({ commentId }) => {
    this.setState(() => ({
      showAddCommentModal: true,
      showEditCommentModal: false,
    }))
  }

  CloseAddCommentModal = () => {
    this.setState(() => ({
      showAddCommentModal: false,
      showEditCommentModal: false,
    }))
  }

  OpenEditCommentModal = ({ commentId }) => {
    this.setState(() => ({
      showAddCommentModal: false,
      showEditCommentModal: true,
    }))
  }

  CloseEditCommentModal = () => {
    this.setState(() => ({
      showAddCommentModal: false,
      showEditCommentModal: false,
    }))
  }

  upVotePost = postId => {
    this.props.updateSinglePostVote(postId, 'upVote')
  }

  downVotePost = postId => {
    this.props.updateSinglePostVote(postId, 'downVote')
  }

  deleteSinglePost = postId => {
    this.props.deletePost(postId, () => {
      this.props.history.push("/");
    });
  }

  upVoteComment = commentId => {
    this.props.updateSingleCommentVote(commentId, 'upVote')
  }

  downVoteComment = commentId => {
    this.props.updateSingleCommentVote(commentId, 'downVote')
  }

  addSingleComment = postId => {
    this.OpenAddCommentModal({ postId })
  }

  editSingleComment = commentId => {
    this.OpenEditCommentModal({ commentId })
  }

  deleteSingleComment = commentId => {
    const postId = this.props.postId
    this.props.deleteComment(commentId, postId)
  }

  submitComment = values => {
    const postId = this.props.postId
    this.props.addComment(postId, values)
  }

  render() {
    const { classes, postId, post, comments } = this.props
    const commentIdsFromPost = post.comments
    console.log(this.props)

    return (
      <div className={classes.mainContentWrapper}>
      <Grid item xs={12}>
      <div className={classes.postDetailsWrapper}>
        <Card className={classes.cardPost}>
          <CardContent className={classes.cardContent}>
            <div className={classes.postTitle}>{ post.title }</div>
            <div className={classes.postInfo}><PersonIcon /><span className={classes.postInfoText}>{ post.author }</span></div>
            <div className={classes.postInfo}><DateRangeIcon /><span className={classes.postInfoText}>{ moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a') }</span></div>
            <div className={classes.postBody}>{ post.body }</div>
          </CardContent>
          <div className={classes.cardControls}>
            <IconButton
              aria-label="Thumb Up"
              className={classes.iconButton}
              value={postId}
              onClick={() => this.upVotePost(postId)}>
              <ThumbUpIcon />
            </IconButton>
            <div className={classes.voteScore}>{ post.voteScore }</div>
            <IconButton
              aria-label="Thumb Down"
              className={classes.iconButton}
              value={postId}
              onClick={() => this.downVotePost(postId)}>
              <ThumbDownIcon />
            </IconButton>
            <Button onClick={() => this.deleteSinglePost(postId)} fab color="primary" aria-label="delete" className={classes.deletePostIcon}>
              <DeleteIcon />
            </Button>
            <Link to ={ '/post/edit/' + post.id }>
              <Button fab color="primary" aria-label="edit" className={classes.editPostIcon}>
                <ModeEditIcon />
              </Button>
            </Link>
          </div>
        </Card>
      </div>
      
      <div className={classes.commentHeader}>Join the discussion<CommentIcon className={classes.commentIcon} /><span className={classes.commentIconText}>{ post.comments.length } { post.comments.length > 1 ? `comments` : `comment` }</span></div>

      <div className={classes.commentsWrapper}>
        {commentIdsFromPost.map(comment => (
        <Card className={classes.cardPost} key={comment}>
          <CardContent className={classes.cardContent}>
            <div className={classes.postInfo}><PersonIcon /><span className={classes.postInfoText}>{ comments[comment].author }</span></div>
            <div className={classes.postInfo}><DateRangeIcon /><span className={classes.postInfoText}>{ moment(comments[comment].timestamp).format('MMMM Do YYYY, h:mm:ss a') }</span></div>
            <div className={classes.postBody}>{ comments[comment].body }</div>
          </CardContent>
          <div className={classes.cardCommentControls}>
            <IconButton
              aria-label="Thumb Up"
              className={classes.iconButton}
              value={postId}
              onClick={() => this.upVoteComment(comment)}>
              <ThumbUpIcon />
            </IconButton>
            <div className={classes.voteScoreComment}>{ comments[comment].voteScore }</div>
            <IconButton
              aria-label="Thumb Down"
              className={classes.iconButton}
              value={postId}
              onClick={() => this.downVoteComment(comment)}>
              <ThumbDownIcon />
            </IconButton>
            <Button onClick={() => this.deleteSingleComment(comment)} fab color="primary" aria-label="delete" className={classes.deleteCommentIcon}>
              <DeleteIcon />
            </Button>
            <Button fab color="primary" aria-label="edit" className={classes.editCommentIcon}>
              <ModeEditIcon />
            </Button>
          </div>
        </Card>
        ))}
      </div>
      <Button fab color="primary" aria-label="Add comment" className={classes.addCommentIcon}>
        <AddIcon />
      </Button>
      </Grid>
      </div>
    )
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Post)
