import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import {postdata} from '../post/PostData'

function Feed() {
  return(
    <div className='feed'>
        <div className="feedwrapper">
            <Share/>
            {postdata.map(post =>
              <Post key={post.id} post={post}/>
              )}
        </div>
    </div>
  )
}

export default Feed