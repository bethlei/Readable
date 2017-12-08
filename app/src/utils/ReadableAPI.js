const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

let token = localStorage.token

if (!token) { token = localStorage.token = Math.random().toString(36).substr(-8) }

const headers = {
  Accept: 'application/json',
  Authorization: token,
}

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(
      res => res.json(),
      error => console.log('An error occurred', error),
    )

export const getAllCategoriesPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(
      res => res.json(),
      error => console.log('An error occurred', error),
    )

export const getAllPostsByCategory = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(
      res => res.json(),
      error => console.log('An error occurred', error),
    )

export const addSinglePost = obj =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  }).then(res => res.json())

export const getSinglePost = post =>
  fetch(`${api}/posts/${post}`, { headers })
    .then(
      res => res.json(),
      error => console.log('An error occurred', error),
    )

export const deleteSinglePost = post =>
  fetch(`${api}/posts/${post}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  })

export const updateSinglePostVote = (post, vote) =>
  fetch(`${api}/posts/${post}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(vote),
  }).then(res => res.json())

export const editSinglePost = (post, newPost) =>
  fetch(`${api}/posts/${post}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  }).then(res => res.json())

export const getAllCommentsByPost = post =>
  fetch(`${api}/posts/${post}/comments`, { headers })
    .then(
      res => res.json(),
      error => console.log('An error occurred', error),
    )

export const getSingleComment = comment =>
  fetch(`${api}/comments/${comment}`, { headers })
    .then(
      res => res.json(),
      error => console.log('An error occurred', error),
    )

export const editSingleComment = (comment, newComment) =>
  fetch(`${api}/comments/${comment}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newComment),
  }).then(res => res.json())

export const addSingleComment = obj =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  }).then(res => res.json())

export const updateSingleCommentVote = (comment, vote) =>
  fetch(`${api}/comments/${comment}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(vote),
  }).then(res => res.json())

export const deleteSingleComment = comment =>
  fetch(`${api}/comments/${comment}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  })
