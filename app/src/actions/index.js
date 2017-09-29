import generateId from './../utils/generateId'
import moment, { format } from 'moment'
import {
  getAllCategories,
  getAllCategoriesPosts,
  getAllPostsByCategory,
  addSinglePost,
  getSinglePost,
  deleteSinglePost,
  updateSinglePostVote,
  editSinglePost,
  getAllCommentsByPost,
  getSingleComment,
  editSingleComment,
  addSingleComment,
  updateSingleCommentVote,
  deleteSingleComment
} from './../utils/ReadableAPI'

export const CHANGE_SORT_ORDER = 'CHANGE_SORT_ORDER'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY'
export const ADD_POST = 'ADD_POST'
export const GET_POST = 'GET_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST_VOTE = 'UPDATE_POST_VOTE'
export const EDIT_POST = 'EDIT_POST'
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'
export const GET_COMMENTS_BY_POST = 'GET_COMMENTS_BY_POST'
export const GET_COMMENT = 'GET_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT_VOTE = 'UPDATE_COMMENT_VOTE'
export const DELETE_COMMENT = 'DELETE_COMMENT'


export function fetchAllPosts() {
  return dispatch => {
    return getAllCategories()
      .then(data => dispatch(getCategories(data)))
      .then(() => getAllCategoriesPosts())
      .then(data => dispatch(getAllPosts(data)))
      .then(data =>
        data.allPosts.map(postItem =>
          getAllCommentsByPost(postItem).then(data => dispatch(getCommentsByPost(data,postItem))))
      )
  }
}

export const sortTypes = {
  VOTE_SCORE: 'VOTE_SCORE',
  TIME_STAMP: 'TIME_STAMP'
}

export function changeSortOrder(sortOrder) {
  return {
    type: CHANGE_SORT_ORDER,
    sortOrder
  }
}

export function getCategories(data) {
  return {
    type: GET_CATEGORIES,
    categories: data.categories.map(category => category.name)
  }
}

export function getAllPosts(data) {
  let dataObj = {};
  for (let i = 0; i < data.length; i++) {
    dataObj[data[i].id] = data[i];
    dataObj[data[i].id].comments = [];
  }

  return {
    type: GET_ALL_POSTS,
    allPosts: data.filter(post => !post.deleted).map(post => post.id),
    posts: dataObj
  }
}

export function getPostsByCategory(data, category) {
  return {
    type: GET_POSTS_BY_CATEGORY,
    categoryPosts: data.filter(post => post.category === category)
      .filter(post => !post.deleted)
      .map(post => post.id)
  }
}

// console.log('moment-format', moment().format('MMMM Do YYYY, h:mm:ss a'))
// console.log('moment-unix', moment().unix())

export function addPost(data) {
  return dispatch => {
    type: ADD_POST,
    data
  }
}

export function getPost(data) {
  return {
    type: GET_POST,
    data
  }
}

export function deletePost(data) {
  return {
    type: DELETE_POST,
    data
  }
}

export function updatePostVote(data) {
  return {
    type: UPDATE_POST_VOTE,
    data
  }
}

export function editPost(data) {
  return {
    type: EDIT_POST,
    data
  }
}

export function getAllComments(data, parentId) {
  let dataObj = {};
  for (let i = 0; i < data.length; i++) {
    dataObj[data[i].id] = data[i];
  }

  return {
    type: GET_ALL_COMMENTS,
    comments: data.map(comment => comment.id),
    dataObj,
    parentId
  }
}

export function getCommentsByPost(data, parentId) {
  let dataObj = {};
  for (let i = 0; i < data.length; i++) {
    dataObj[data[i].id] = data[i];
  }

  return {
    type: GET_COMMENTS_BY_POST,
    comments: dataObj,
    parentId
  }
}

export function getComment(data) {
  return {
    type: GET_COMMENT,
    data
  }
}

export function editComment(data) {
  return {
    type: EDIT_COMMENT,
    data
  }
}

export function addComment(data) {
  return {
    type: ADD_COMMENT,
    data
  }
}

export function updateCommentVote(data) {
  return {
    type: UPDATE_COMMENT_VOTE,
    data
  }
}

export function deleteComment(data) {
  return {
    type: DELETE_COMMENT,
    data
  }
}
