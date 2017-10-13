import React, { Component } from 'react'
import moment, { format } from 'moment'

class CategoryPosts extends Component {
  componentDidMount() {
    const { category } = this.props.match.params
  }

  render() {
    const posts = this.props.posts
    const sortedPostIds = this.props.sortedPostIds
    const { category } = this.props.match.params

    return (
      <div>
        <div>Main - category posts list view</div>
        {sortedPostIds
          .filter(postId => posts[postId].category === category)
          .map(postId => (
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

export default CategoryPosts
