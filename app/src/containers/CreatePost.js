import React from 'react'
import { connect } from 'react-redux'
import CreatePostForm from './../components/CreatePostForm'
import {
  addPostToServer,
  fetchAllPosts,
} from './../actions'

const mapStateToProps = (posts, allPosts) => ({
  posts,
  allPosts,
})

const mapDispatchToProps = {
  setPost: addPostToServer,
  getAllPosts: fetchAllPosts,
}

export const CreatePost = connect(mapStateToProps, mapDispatchToProps)(CreatePostForm)
