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
import Dialog from 'material-ui/Dialog'
import Paper from 'material-ui/Paper'
import Tooltip from 'material-ui/Tooltip'
import CreateCommentForm from './CreateCommentForm'
import EditCommentForm from './EditCommentForm'
import NoMatch from './../containers/NoMatch'

class Post extends Component {
  state = {
    openAddComment: false,
    openEditComment: false,
    commentId: ``,
  };

  handleClickOpenAddComment = () => {
    this.setState({
      openAddComment: true,
    });
  };

  handleRequestCloseAddComment = () => {
    this.setState({
      openAddComment: false,
    });
  };

  handleClickOpenEditComment = (event) => {
    this.setState({
      openEditComment: true,
      commentId: event.currentTarget.getAttribute('data-key'),
    });
  }

  handleRequestCloseEditComment = () => {
    this.setState({
      openEditComment: false,
    });
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

  deleteSingleComment = commentId => {
    const postId = this.props.postId
    this.props.deleteComment(commentId, postId)
  }

  render() {
    const post = this.props.post
    
    if (Object.keys(post).length === 0) {
      return (
        <div><NoMatch /></div>
      )
    }

    const { classes, postId, comments, posts } = this.props
    const commentIdsFromPost = post.comments

    return (
      <div className={classes.mainContentWrapper}>
      <Grid item xs={12}>
      <div className={classes.postDetailsWrapper}>
        <Card className={classes.cardPost}>
          <CardContent className={classes.cardContent}>
            <div className={classes.postTitleAlt}>{ post.title }</div>
            <div className={classes.postInfo}><PersonIcon /><span className={classes.postInfoText}>{ post.author }</span></div>
            <div className={classes.postInfo}><DateRangeIcon /><span className={classes.postInfoText}>{ moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a') }</span></div>
            <div className={classes.postBody}>{ post.body }</div>
          </CardContent>
          <div className={classes.cardControls}>
            <Tooltip id="upvote-post" title="Upvote Post" placement="top">
            <IconButton
              aria-label="Upvote Post"
              className={classes.iconButton}
              value={postId}
              onClick={() => this.upVotePost(postId)}>
              <ThumbUpIcon />
            </IconButton>
            </Tooltip>
            <div className={classes.voteScore}>{ post.voteScore }</div>
            <Tooltip id="downvote-post" title="Downvote Post" placement="top">
            <IconButton
              aria-label="Downvote Post"
              className={classes.iconButton}
              value={postId}
              onClick={() => this.downVotePost(postId)}>
              <ThumbDownIcon />
            </IconButton>
            </Tooltip>
            <Tooltip id="delete-post" title="Delete Post" placement="top">
            <Button onClick={() => this.deleteSinglePost(postId)} fab color="primary" aria-label="Delete Post" className={classes.deletePostIcon}>
              <DeleteIcon />
            </Button>
            </Tooltip>
            <Link to ={ '/post/edit/' + post.id }>
              <Tooltip id="edit-post" title="Edit Post" placement="top">
              <Button fab color="primary" aria-label="Edit Post" className={classes.editPostIcon}>
                <ModeEditIcon />
              </Button>
              </Tooltip>
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
            <Tooltip id="upvote-comment" title="Upvote Comment" placement="top">
            <IconButton
              aria-label="Upvote Comment"
              className={classes.iconButton}
              value={postId}
              onClick={() => this.upVoteComment(comment)}>
              <ThumbUpIcon />
            </IconButton>
            </Tooltip>
            <div className={classes.voteScoreComment}>{ comments[comment].voteScore }</div>
            <Tooltip id="downvote-comment" title="Downvote Comment" placement="top">
            <IconButton
              aria-label="Downvote Comment"
              className={classes.iconButton}
              value={postId}
              onClick={() => this.downVoteComment(comment)}>
              <ThumbDownIcon />
            </IconButton>
            </Tooltip>
            <Tooltip id="delete-comment" title="Delete Comment" placement="top">
            <Button onClick={() => this.deleteSingleComment(comment)} fab color="primary" aria-label="Delete Comment" className={classes.deleteCommentIcon}>
              <DeleteIcon />
            </Button>
            </Tooltip>
            <Tooltip id="edit-comment" title="Edit Comment" placement="top">
            <Button onClick={this.handleClickOpenEditComment} data-key={comment} fab color="primary" aria-label="Edit Comment" className={classes.editCommentIcon}>
              <ModeEditIcon />
            </Button>
            </Tooltip>
          </div>
        </Card>
        ))}
      </div>

      <Tooltip id="add-comment" title="Add comment" placement="top">
      <Button onClick={this.handleClickOpenAddComment} fab color="primary" aria-label="Add comment" className={classes.addCommentIcon}>
        <AddIcon />
      </Button>
      </Tooltip>
      <Dialog open={this.state.openAddComment} onRequestClose={this.handleRequestCloseAddComment} fullWidth maxWidth="md">
        <Paper className={classes.paper}>
          <CreateCommentForm
            addComment={this.props.addComment}
            onRequestClose={this.handleRequestCloseAddComment}
            postId={postId}
            comments={comments}
            posts={posts} />
        </Paper>
      </Dialog>

      <Dialog open={this.state.openEditComment} onRequestClose={this.handleRequestCloseEditComment} fullWidth maxWidth="md">
        <Paper className={classes.paper}>
          <EditCommentForm
            editComment={this.props.editComment}
            onRequestClose={this.handleRequestCloseEditComment}
            postId={postId}
            commentId={this.state.commentId}
            comments={comments} />
        </Paper>
      </Dialog>
      </Grid>
      </div>
    )
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Post)
