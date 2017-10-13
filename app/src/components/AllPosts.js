import React, { Component } from 'react'
import moment, { format } from 'moment'

class AllPosts extends Component {
  render() {
    const posts = this.props.posts
    const sortedPostIds = this.props.sortedPostIds

    return (
      <div>
        <div>Main - all posts list view</div>
        {sortedPostIds.map(postId => (
        <ul key={ posts[postId].id }>
          <li>{ posts[postId].title }</li>
          <li>{ posts[postId].body }</li>
          <li>{ posts[postId].author }</li>
          <li>{ posts[postId].voteScore }</li>
          <li>{ moment(posts[postId].timestamp).format('MMMM Do YYYY, h:mm:ss a') }</li>
          <li>{ posts[postId].comments.length }</li>
        </ul>
        ))}
      </div>

    )
  }
}

export default AllPosts
