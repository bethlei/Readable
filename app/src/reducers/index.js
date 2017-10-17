import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {
  sortTypes,
  CHANGE_SORT_ORDER,
  GET_CATEGORIES,
  GET_ALL_POSTS,
  ADD_POST,
  FLAG_POST_AS_DELETED,
  DELETE_POST,
  UPDATE_POST_SCORE,
  EDIT_POST,
  GET_COMMENTS_BY_POST,
  EDIT_COMMENT,
  ADD_COMMENT,
  UPDATE_COMMENT_SCORE,
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
  const post = action.post
  const postId = action.postId
  const parentId = action.parentId

  switch(action.type) {
    case GET_ALL_POSTS:
      const posts = action.posts
      return {
        ...posts
      }

    case GET_COMMENTS_BY_POST:
      const comments = action.commentArr
      return {
        ...state,
        [parentId]: {
          ...state[parentId],
          comments: [...comments]
        }
      }

    case ADD_POST:
      return {
        ...state,
        [postId]: {
          ...post,
          comments: []
        }
      }

    case ADD_COMMENT:
        return {
          ...state,
          [parentId]: {
            ...state[parentId],
            comments: [...state[parentId].comments, action.commentId]
          }
        }

    case EDIT_POST:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          category: action.category,
          title: action.title,
          body: action.body
        }
      }

    case FLAG_POST_AS_DELETED:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          deleted: true
        }
      }

    case DELETE_COMMENT:
      const commentsIds = action.commentsIds
      return {
        ...state,
        [postId]: {
          ...state[postId],
          comments: [...commentsIds]
        }
      }

    case UPDATE_POST_SCORE:
      const postScore = action.postScore
      return {
        ...state,
        [postId]: {
          ...state[postId],
          voteScore: postScore
        }
      }

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

    case ADD_COMMENT:
      return {
        ...state,
        [commentId]: action.comment
      }

    case EDIT_COMMENT:
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          timestamp: action.timestamp,
          body: action.body
        }
      }

    case UPDATE_COMMENT_SCORE:
      const commentScore = action.commentScore
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          voteScore: commentScore
        }
      }

    default:
      return state
  }
}

function allPosts(state = initialState.allPosts, action) {
  const allPosts = action.allPosts
  const postId = action.postId

  switch(action.type) {
    case GET_ALL_POSTS:
      return [...allPosts]

    case ADD_POST:
      return [...state, postId]

    case DELETE_POST:
      return [...allPosts]

    default:
      return state
  }
}

function postsByCategory(state = initialState.postsByCategory, action) {
  const categories = action.categories
  let categoriesState = {}

  switch(action.type) {
    case GET_CATEGORIES:
      categories.map(category => {
        categoriesState[category] = {
          posts: []
        }
      })
      return categoriesState;

    case GET_ALL_POSTS:
      const posts = action.posts
      const postsIds = action.allPosts
      let categoriesArr = [];

      for (const category in state) {
        categoriesArr.push(category)
      }
      categoriesArr.map(category => {
        categoriesState[category] = {
          posts: postsIds.filter(postId => posts[postId].category === category)
        }
      })
      return categoriesState

    case ADD_POST:
      const postId = action.postId
      const post = action.post
      const category = post.category
      return {
        ...state,
        [category]: {
          posts: [...state, postId]
        }
      }

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
  postsByCategory,
  form: formReducer,
})
