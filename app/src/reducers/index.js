import { combineReducers } from 'redux';
import {
  sortTypes,
  CHANGE_SORT_ORDER,
  GET_CATEGORIES,
  GET_ALL_POSTS,
  GET_POSTS_BY_CATEGORY,
  ADD_POST,
  GET_POST,
  DELETE_POST,
  UPDATE_POST_VOTE,
  EDIT_POST,
  GET_ALL_COMMENTS,
  GET_COMMENTS_BY_POST,
  GET_COMMENT,
  EDIT_COMMENT,
  ADD_COMMENT,
  UPDATE_COMMENT_VOTE,
  DELETE_COMMENT } from './../actions'

const initialState = {
  categories: [],
  sortOrder: sortTypes.VOTE_SCORE,
  posts: {},
  comments: {},
  allPosts: [],
  postsByCategory: {}
}

function categories(state = initialState.categories, action) {
  switch(action.type) {
    case GET_CATEGORIES:
      return action.categories

    default:
      return state
  }
}

function sortOrder(state = initialState.sortOrder, action) {
  switch(action.type) {
    case CHANGE_SORT_ORDER:
      return action.sortOrder

    default:
      return state
  }
}

function posts(state = initialState.posts, action) {
  switch(action.type) {
    case GET_ALL_POSTS:
      const posts = action.posts
      return {
        ...posts
      }

    case GET_POST:
      return action.posts

    case ADD_POST:
      return action.posts

    case DELETE_POST:
      return action.posts

    case UPDATE_POST_VOTE:
      return action.posts

    case EDIT_POST:
      return action.posts

    default:
      return state
  }
}

function comments(state = initialState.comments, action) {
  const commentId = action.commentId

  switch(action.type) {
    case GET_COMMENTS_BY_POST:
      const comments = action.dataObj
      return {
        ...state,
        ...comments
      }

    case GET_COMMENT:
      return action.comments

    case EDIT_COMMENT:
      return action.comments

    case ADD_COMMENT:
      return action.comments

    case UPDATE_COMMENT_VOTE:
      return action.comments

    case DELETE_COMMENT:
      return action.comments

    default:
      return state
  }
}

function allPosts(state = initialState.allPosts, action) {
  switch(action.type) {
    case GET_ALL_POSTS:
      return [...action.allPosts]

    default:
      return state
  }
}

function postsByCategory(state = initialState.postsByCategory, action) {
  switch(action.type) {
    case GET_POSTS_BY_CATEGORY:
      return [...action.postsByCategory]

    default:
      return state
  }
}

export default combineReducers({
  categories,
  sortOrder,
  posts,
  comments,
  allPosts,
  postsByCategory
})
