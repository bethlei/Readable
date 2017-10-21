import { connect } from 'react-redux'
import Post from './../components/Post'
import {
  updatePostScoreToServer,
  deletePostToServer,
  editPostToServer,
  updateCommentScoreToServer,
  deleteCommentToServer,
  editCommentToServer,
  addCommentToServer,
} from './../actions'

const getPostFromParamId = (postIds, posts, comments, postId) => {
  const commentsByPost = posts[postId].comments
  let sortedCommentsByPost

  sortedCommentsByPost = commentsByPost.sort(function(a, b) {
    return comments[b].voteScore - comments[a].voteScore
  })

  const post = { ...posts[postId], comments: sortedCommentsByPost }

  return post
}

const mapStateToProps = ({ allPosts, posts, comments }, ownProps) => ({
  postId: ownProps.match.params.post,
  post: getPostFromParamId(
    allPosts,
    posts,
    comments,
    ownProps.match.params.post
  ),
  comments,
})

const mapDispatchToProps = {
  updateSinglePostVote: updatePostScoreToServer,
  deletePost: deletePostToServer,
  editPost: editPostToServer,
  updateSingleCommentVote: updateCommentScoreToServer,
  deleteComment: deleteCommentToServer,
  editComment: editCommentToServer,
  addComment: addCommentToServer,
}

export const PostDetails = connect(mapStateToProps, mapDispatchToProps)(Post)
