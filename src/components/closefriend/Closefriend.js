import React from 'react'
import './closefriend.css'

function Closefriend({friendlist}) {
  return (
    <>
       <li className="sidebarfriend">
                <img className='sidebarfriendimg' src={friendlist.profile} alt="friendprofile" />
                <span className='sidebarfriendname'>{friendlist.username}</span>
        </li>
    </>
  )
}

export default Closefriend