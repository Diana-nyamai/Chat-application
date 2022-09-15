import React from 'react'
import Online from '../online/Online'
import './rightbar.css'
import {postdata} from '../post/PostData'

const followings = [
  {
    image: '../assets/person/p2.jpg',
    name: `Lupita N`
  },
  {
    image: '../assets/person/p2.jpg',
    name: `Lupita N`
  },
  {
    image: '../assets/person/p2.jpg',
    name: `Lupita N`
  },
  {
    image: '../assets/person/p2.jpg',
    name: `Lupita N`
  },
  {
    image: '../assets/person/p2.jpg',
    name: `Lupita N`
  },
  {
    image: '../assets/person/p2.jpg',
    name: `Lupita N`
  }
]
const about = [
  {
    title: 'City:',
    name:'Nairobi'
  },
  {
    title: 'From:',
    name:'Kenya'
  },
  {
    title: 'Relationship:',
    name:'Single'
  }
]
function Rightbar({profile}) {
  const Homerightbar = () =>{
    return (
      <>
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
      </>
    )
  }
  const Profilerightbar = () =>{
    return(
      <>
       <h4 className='rightbartitle'>User information</h4>
       <div className="rightbarinfo">
        {about.map(a =>
           <div className="rightbarinfoitem"> 
           <span className="rightbarinfokey">{a.title}</span>
        <span className="rightbarinfovalue">{a.name}</span>
       </div>
          )}
       </div>
       <h4 className='rightbartitle'>User friends</h4>
       <div className="rightbarfollowings">
        {followings.map(following =>
          <div className="rightbarfollowing">
          <img src={following.image} alt="following" className="rightbarfollowingimg" />
          <span className="rightbarfollowingname">{following.name}</span>
        </div>
          )}
        
       </div>
      </>
     
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
        {profile? <Profilerightbar/>: <Homerightbar/>}
      </div>
      </div>
  )
}

export default Rightbar