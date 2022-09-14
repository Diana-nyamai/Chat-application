import React from 'react'
import Online from '../online/Online'
import './rightbar.css'
import {postdata} from '../post/PostData'

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
        <div className="birthdaycontainer">
          <img src="../assets/gift.png" alt="birthday" className="birthdayimg" />
          <span className="birthdaytext"><b>kamama</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img src="../assets/ad.jpg" alt="rightad" className='rightbarad'/>
        <h4 className="rightbartitle">Online friends</h4>
        <ul className='rightbarfriendlist'>
          {postdata.map((post) => 
              <Online key={post.id} friendonline={post}/>
            )}
        
        </ul>
      </div>
      </div>
  )
}

export default Rightbar