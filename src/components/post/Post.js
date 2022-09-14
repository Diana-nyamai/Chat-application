import React, { useState } from 'react'
import './post.css'
import {MoreVert} from '@mui/icons-material'
import {postdata} from '../post/PostData'

function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isliked, setIsliked] = useState(false)

    const handlelike = () =>{
        setIsliked(!isliked)
        setLike(isliked? like - 1: like + 1)
    }
  return (
    <div className='post'>
        <div className="postwrapper">
            {/* post top */}
            <div className="posttop">
                <div className="posttopleft">
                    <img className='postprofileimg' src={postdata.filter(p => p.id === post?.userid)[0].profile} alt="person5" />
                    <span className="postusername">{postdata.filter(p => p.id === post?.userid)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="posttopright"><MoreVert/></div>
            </div>
            {/* post center */}
            <div className="postcenter">
                <span className="posttext">{post.desc}</span>
                <img className='postimg' src={post.photo} alt="post"/>
            </div>
            {/* post bottom */}
            <div className="postbottom">
                <div className="postbottomleft">
                    <img className='hearticon' src="../assets/heart.png" alt="post" onClick={handlelike} />
                    <span className="postlikecounter">{like} people like it</span>
                </div>
                <div className="postbottomright">
                    <span className="postcommenttext">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post