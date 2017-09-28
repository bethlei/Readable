import React from 'react';
import { Link } from 'react-router-dom'

const NoMatch = () => {
  return (
    <div className='error-container'>
      <h1 className='error-404'>404</h1>
      <p className='error-return'>Take me back to <Link to='/'>Readable Home</Link></p>
    </div>
  )
}

export default NoMatch
