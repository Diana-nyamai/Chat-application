import React from 'react'
import './online.css'


function Online({friendonline}) {
  return (
    <>
        <li className='rightbarfriend'>
        <div className="rightbarprofileimgcontainer">
            <img src={friendonline.profile} alt="p1" className="rightbarprofileimg" />
            <span className="rightbaronline"></span>
        </div>
        <span className="rightbarusername">{friendonline.username}</span>
        </li>
    </>
  )
}

export default Online