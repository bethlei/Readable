import React from 'react'
import { connect } from 'react-redux'
import Post from './../components/EditCommentForm'
import {
  fetchAllPosts,

} from './../actions'

const EditComment = () => {
  return (
    <Post />
  )
}

export default EditComment
