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

class Post extends Component {
  upVote = postId => {
    this.props.updateSinglePostVote(postId, 'upVote')
  }

  downVote = postId => {
    this.props.updateSinglePostVote(postId, 'downVote')
  }

  deleteSinglePost = postId => {
    this.props.deletePost(postId, () => {
      this.props.history.push("/");
    });
  }

  render() {
    console.log(this.props)
    const { classes, postId, post } = this.props

    return (
      <div className={classes.mainContentWrapper}>
      <Grid item xs={12}>
        <div className={classes.postDetailsWrapper}>
        <Card className={classes.cardPost}>
          <CardContent className={classes.cardContent}>
            <div className={classes.postTitle}>{ post.title }</div>
            <div className={classes.postInfo}><PersonIcon /><span className={classes.postInfoText}>{ post.author }</span></div>
            <div className={classes.postInfo}><DateRangeIcon /><span className={classes.postInfoText}>{ moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a') }</span></div>
            <div className={classes.postInfo}><CommentIcon /><span className={classes.postInfoText}>{ post.comments.length } comments</span></div>
            <div className={classes.postBody}>{ post.body }</div>
          </CardContent>
          <div className={classes.cardControls}>
            <IconButton
              aria-label="Thumb Up"
              className={classes.iconButton}
              value={postId}
              onClick={() => this.upVote(postId)}>
              <ThumbUpIcon />
            </IconButton>
            <div className={classes.voteScore}>{ post.voteScore }</div>
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
            <Link to ={ '/post/edit/' + postId.id }>
              <Button fab color="primary" aria-label="edit" className={classes.editPostIcon}>
                <ModeEditIcon />
              </Button>
            </Link>
          </div>
        </Card>
        </div>
        </Grid>
      </div>
    )
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Post)
