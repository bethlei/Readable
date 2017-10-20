import { connect } from 'react-redux'
import CreatePostForm from './../components/CreatePostForm'
import {
  addPostToServer,
} from './../actions'

const mapDispatchToProps = {
  setPost: addPostToServer
}

export const CreatePost = connect(null, mapDispatchToProps)(CreatePostForm)
