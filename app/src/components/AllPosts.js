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
import SortMenu from './SortMenu';
import { changeSortOrder } from './../actions'

class AllPosts extends Component {
  handleClickThumbUp = event => {

  };

  handleClickThumbDown = event => {

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
          <CardContent className={classes.content} className={classes.cardContent}>
            <Link to ={ '/post/' + posts[postId].id } className={classes.postDetails}>{ posts[postId].title }</Link>
            <div>{ posts[postId].author }</div>
            <div>{ moment(posts[postId].timestamp).format('MMMM Do YYYY, h:mm:ss a') }</div>
            <div>{ posts[postId].comments.length }</div>
            <div>{ posts[postId].body }</div>
          </CardContent>
          <div className={classes.controls} className={classes.cardControls}>
            <IconButton
              aria-label="Thumb Up"
              className={classes.iconButton}
              onClick={this.handleClickThumbUp}
            >
              <ThumbUpIcon />
            </IconButton>
            <div className={classes.voteScore}>{ posts[postId].voteScore }</div>
            <IconButton
              aria-label="Thumb Down"
              className={classes.iconButton}
              onClick={this.handleClickThumbDown}
            >
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
  sortPosts: changeSortOrder
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(AllPosts))
