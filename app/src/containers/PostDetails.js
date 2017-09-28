import React from 'react'
import { connect } from 'react-redux'
import Post from './../components/Post'
import {
  fetchAllPosts,

} from './../actions'

const PostDetails = () => {
  return (
    <Post />
  )
}

export default PostDetails
