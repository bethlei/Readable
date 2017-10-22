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
import CreateCommentForm from './../components/CreateCommentForm'
import EditCommentForm from './../components/EditCommentForm'

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
    const { classes, postId, post, comments, posts } = this.props
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
            <Button onClick={this.handleClickOpenEditComment} data-key={comment} fab color="primary" aria-label="edit" className={classes.editCommentIcon}>
              <ModeEditIcon />
            </Button>
          </div>
        </Card>
        ))}
      </div>

      <Button onClick={this.handleClickOpenAddComment} fab color="primary" aria-label="Add comment" className={classes.addCommentIcon}>
        <AddIcon />
      </Button>
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
