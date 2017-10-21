import generateId from './../utils/generateId'
import moment from 'moment'
import {
  getAllCategories,
  getAllCategoriesPosts,
  addSinglePost,
  getSinglePost,
  deleteSinglePost,
  updateSinglePostVote,
  editSinglePost,
  getAllCommentsByPost,
  addSingleComment,
  getSingleComment,
  editSingleComment,
  deleteSingleComment,
  updateSingleCommentVote
} from './../utils/ReadableAPI'

export const CHANGE_SORT_ORDER = 'CHANGE_SORT_ORDER'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY'
export const ADD_POST = 'ADD_POST'
export const GET_POST = 'GET_POST'
export const EDIT_POST = 'EDIT_POST'
export const FLAG_POST_AS_DELETED = 'FLAG_POST_AS_DELETED'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST_SCORE = 'UPDATE_POST_SCORE'
export const GET_COMMENTS_BY_POST = 'GET_COMMENTS_BY_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const GET_COMMENT = 'GET_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPDATE_COMMENT_SCORE = 'UPDATE_COMMENT_SCORE'


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

export function addPostToServer(post, callback) {
  return dispatch => {
    const id = generateId()
    const timestamp = (moment().unix()) * 1000
    return addSinglePost({ ...post, id, timestamp })
      .then(() => getSinglePost(id)
      .then(data => dispatch(addPost(data)))
    ).then(() => callback())
  }
}

export function addPost(data) {
  return {
    type: ADD_POST,
    postId: data.id,
    post: data
  }
}

export function editPostToServer(postId, newPost, callback) {
  return dispatch => {
    return editSinglePost(postId, newPost)
      .then(() => getSinglePost(postId)
      .then(data => dispatch(editPost(postId, data)))
    ).then(() => callback())
  }
}

export function editPost(postId, data) {
  return {
    type: EDIT_POST,
    postId,
    category: data.category,
    title: data.title,
    body: data.body
  }
}

export function flagPostAsDeleted(postId) {
  return {
    type: FLAG_POST_AS_DELETED,
    postId
  }
}

export function deletePostToServer(postId, callback) {
  return dispatch => {
    return deleteSinglePost(postId)
      .then(() => dispatch(flagPostAsDeleted(postId)))
      .then(() => getAllCategoriesPosts()
      .then(data => dispatch(deletePost(data)))
    ).then(() => callback())
  }
}

export function deletePost(data) {
  return {
    type: DELETE_POST,
    allPosts: data.filter(post => !post.deleted)
                  .map(post => post.id)
  }
}

export function updatePostScoreToServer(postId, vote) {
  return dispatch => {
    return updateSinglePostVote(postId, { option: vote })
      .then(() => getSinglePost(postId)
      .then(data => dispatch(updatePostScore(data)))
      .then(() => getAllCommentsByPost(postId)
      .then(data => dispatch(getCommentsByPost(data,postId)))
      )
    )
  }
}

export function updatePostScore(data) {
  return {
    type: UPDATE_POST_SCORE,
    postId: data.id,
    postScore: data.voteScore
  }
}

export function getCommentsByPost(data, parentId) {
  let dataObj = {};
  for (let i = 0; i < data.length; i++) {
    dataObj[data[i].id] = data[i];
  }
  let commentArr = data.map(comment => comment.id);

  return {
    type: GET_COMMENTS_BY_POST,
    dataObj,
    commentArr,
    parentId
  }
}

export function addCommentToServer(comment) {
  return dispatch => {
    const id = generateId()
    const timestamp = (moment().unix()) * 1000
    return addSingleComment({ ...comment, id, timestamp })
      .then(() => getSingleComment(id)
      .then(data => dispatch(addComment(data)))
    )
  }
}

export function addComment(data) {
  return {
    type: ADD_COMMENT,
    parentId: data.parentId,
    commentId: data.id,
    comment: data
  }
}

export function editCommentToServer(commentId, newComment) {
  return dispatch => {
    const timestamp = (moment().unix()) * 1000
    return editSingleComment(commentId, { ...newComment, timestamp })
      .then(() => getSingleComment(commentId)
      .then(data => dispatch(editComment(data)))
    )
  }
}

export function editComment(data) {
  return {
    type: EDIT_COMMENT,
    commentId: data.id,
    timestamp: data.timestamp,
    body: data.body
  }
}

export function updateCommentScoreToServer(commentId, vote) {
  return dispatch => {
    return updateSingleCommentVote(commentId, { option: vote })
      .then(() => getSingleComment(commentId)
      .then(data => dispatch(updateCommentScore(data)))
    )
  }
}

export function updateCommentScore(data) {
  return {
    type: UPDATE_COMMENT_SCORE,
    commentId: data.id,
    commentScore: data.voteScore
  }
}

export function deleteCommentToServer(commentId, postId) {
  return dispatch => {
    return deleteSingleComment(commentId)
      .then(() => getAllCommentsByPost(postId)
      .then(data => dispatch(deleteComment(data, postId)))
    )
  }
}

export function deleteComment(data, parentId) {
  return {
    type: DELETE_COMMENT,
    postId: parentId,
    commentsIds: data.filter(comment => !comment.deleted)
                     .map(comment => comment.id)
  }
}
