import React from 'react'
import { connect } from 'react-redux'
import CreateCommentForm from './../components/CreateCommentForm'
import {
  fetchAllPosts,

} from './../actions'

const CreateComment = () => {
  return (
    <CreateCommentForm />
  )
}

export default CreateComment
