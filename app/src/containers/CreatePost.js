import React from 'react'
import { connect } from 'react-redux'
import CreatePostForm from './../components/CreatePostForm'
import {
  fetchAllPosts,

} from './../actions'

const CreatePost = () => {
  return (
    <CreatePostForm />
  )
}

export default CreatePost
