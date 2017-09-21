const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
  .then(
    res => res.json(),
    error => console.log('An error occurred', error)
  )

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
  .then(
    res => res.json(),
    error => console.log('An error occurred', error)
  )

export const getPostsByCategory = category =>
  fetch(`${api}/${category}/posts`, { headers })
  .then(
    res => res.json(),
    error => console.log('An error occurred', error)
  )

export const addPost = obj =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  }).then(res => res.json())

export const getPost = post =>
  fetch(`${api}/posts/${post}`, { headers })
  .then(
    res => res.json(),
    error => console.log('An error occurred', error)
  )

export const deletePost = (post) =>
  fetch(`${api}/posts/${post}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  })

export const addPostVote = (post, vote) =>
  fetch(`${api}/posts/${post}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())

export const editPost = (post) =>
  fetch(`${api}/posts/${post}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())

export const getCommentsByPost = post =>
  fetch(`${api}/posts/${post}/comments`, { headers })
  .then(
    res => res.json(),
    error => console.log('An error occurred', error)
  )

export const getComment = comment =>
  fetch(`${api}/comments/${comment}`, { headers })
  .then(
    res => res.json(),
    error => console.log('An error occurred', error)
  )

export const editComment = (comment) =>
  fetch(`${api}/comments/${comment}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json())

export const addComment = obj =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  }).then(res => res.json())

export const addCommentVote = (comment, vote) =>
  fetch(`${api}/comments/${comment}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json())

export const deleteComment = (comment) =>
  fetch(`${api}/comments/${comment}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  })








//
