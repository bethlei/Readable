import React, { Component } from 'react'
import moment, { format } from 'moment'
import { Link } from 'react-router-dom'

class AllPosts extends Component {
  render() {
    const posts = this.props.posts
    const sortedPostIds = this.props.sortedPostIds

    return (
      <div>
        <div>Main - all posts list view</div>
        {sortedPostIds.map(postId => (
        <ul key={ posts[postId].id }>
          <li><Link to ={ '/post/' + posts[postId].id } className='post-details'>{ posts[postId].title }</Link></li>
          <li>{ posts[postId].body }</li>
          <li>{ posts[postId].author }</li>
          <li>{ posts[postId].voteScore }</li>
          <li>{ moment(posts[postId].timestamp).format('MMMM Do YYYY, h:mm:ss a') }</li>
          <li>{ posts[postId].comments.length }</li>
          <div className="edit-post-container">
            <Link to ={ '/post/edit/' + posts[postId].id } className='edit-post'>Edit Post</Link>
          </div>
          <div className="delete-post-container">
            <Link to ='/' className='delete-post'>Delete Post</Link>
          </div>
        </ul>
        ))}
        <div className="add-post-container">
          <Link to ='/addpost' className='add-post'>Add Post</Link>
        </div>
      </div>

    )
  }
}

export default AllPosts
