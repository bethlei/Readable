import React, { Component } from 'react'
import Category from './../components/Category'

class CategoryPosts extends Component {
  render() {
    const posts = this.props.posts
    const sortedPostIds = this.props.sortedPostIds
    return (
      <div>
        <div>Main - category posts list view</div>
        {sortedPostIds.map(postId => (
        <ul key={ posts[postId].id }>
          <li>{ posts[postId].id }</li>
          <li>{ posts[postId].title }</li>
          <li>{ posts[postId].body }</li>
          <li>{ posts[postId].author }</li>
          <li>{ posts[postId].category }</li>
          <li>{ posts[postId].voteScore }</li>
          <li>{ posts[postId].deleted }</li>
          <li>{ posts[postId].timestamp }</li>
        </ul>
        ))}
      </div>

    )
  }
}

export default CategoryPosts
