import React from 'react';
import imgNotFound from '../../images/pagenotfound.png'

const NotFound = () => {
  return (
    <div className='not-found-page'>
      <img src={imgNotFound} alt='page not found' />
    </div>
  )
}

export default NotFound