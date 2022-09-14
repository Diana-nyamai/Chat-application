import React from 'react'
import './profile.css'
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"

function Profile() {
  return (
   <>
           <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileright">
                <div className="profilerighttop">
                    asdass
                </div>
                <div className="profilerightbottom">
                    <Feed/>
                    <Rightbar/>
                </div>
            </div>
        </div>
   </>
  )
}

export default Profile