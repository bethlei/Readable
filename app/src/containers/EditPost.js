import { connect } from 'react-redux'
import EditPostForm from './../components/EditPostForm'
import {
  editPostToServer,
} from './../actions'

const mapStateToProps = ({ allPosts, posts }, ownProps) => ({
  postId: ownProps.match.params.post,
  post: posts[ownProps.match.params.post]
})

const mapDispatchToProps = {
  editPost: editPostToServer
}

export const EditPost = connect(mapStateToProps, mapDispatchToProps)(EditPostForm)
